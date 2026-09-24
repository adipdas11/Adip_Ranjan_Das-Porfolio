import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("research links, publication status, assets and CV are correct", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("./");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator("#publication-language-agent")).toContainText(
    "Under review",
  );
  await expect(page.locator("#publication-language-agent a")).toHaveCount(0);
  for (const [id, document] of [
    ["egrap", "11658063"],
    ["review", "11023241"],
    ["exosuit", "10719697"],
  ]) {
    await expect(page.locator(`#publication-${id} h3 a`)).toHaveAttribute(
      "href",
      `https://ieeexplore.ieee.org/abstract/document/${document}`,
    );
  }
  await expect(page.locator("iframe")).toHaveCount(0);
  await expect(page.locator("canvas")).toHaveCount(0);
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: "Download CV", exact: true }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("Adip_Ranjan_Das_CV.docx");
  expect(await download.failure()).toBeNull();
  for (const src of await page
    .locator("img")
    .evaluateAll((images) =>
      images
        .map((image) => image.getAttribute("src")!)
        .filter((src) => !src.startsWith("https:")),
    )) {
    const response = await request.get(src);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("image");
  }
  const brokenAnchors = await page
    .locator('a[href^="#"]')
    .evaluateAll((anchors) =>
      anchors
        .map((a) => a.getAttribute("href")!)
        .filter((href) => !document.getElementById(href.slice(1))),
    );
  expect(brokenAnchors).toEqual([]);
  expect(errors).toEqual([]);
});

test("theme persists and follows system preference when no choice is saved", async ({
  page,
}) => {
  await page.goto("./");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.evaluate(() => localStorage.removeItem("portfolio-theme"));
  await page.emulateMedia({ colorScheme: "dark" });
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.emulateMedia({ colorScheme: "light" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("project gallery and accessible modal work with keyboard", async ({
  page,
}) => {
  await page.goto("./");
  await expect(page.locator(".project-card")).toHaveCount(3);
  await page.getByRole("button", { name: "View all 16 projects" }).click();
  await expect(page.locator(".project-card")).toHaveCount(16);
  const trigger = page.getByRole("button", {
    name: "View Teleoperation to Imitation Learning details",
  });
  await trigger.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog")).toContainText("Coena Das");
  await expect(page.getByRole("dialog")).toContainText("7 of 10 trials");
  await expect(
    page.getByRole("link", { name: "Watch video on LinkedIn" }),
  ).toHaveAttribute(
    "href",
    "https://www.linkedin.com/posts/adip-das1998_imitationlearning-robotics-machinelearning-ugcPost-7453393433056145408-tdnB/",
  );
  await expect(page.locator("iframe, video")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "Close project details" }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  expect(
    await page.evaluate(() => !!document.activeElement?.closest("dialog")),
  ).toBe(true);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.getByRole("button", { name: "Close project details" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await page.getByRole("button", { name: "Show selected projects" }).click();
  await expect(page.locator(".project-card")).toHaveCount(3);
});

test("video iframe is only requested after play", async ({ page }) => {
  const embeds: string[] = [];
  await page.route("https://www.youtube-nocookie.com/embed/**", (route) => {
    embeds.push(route.request().url());
    return route.fulfill({
      contentType: "text/html",
      body: "<p>Player mock</p>",
    });
  });
  await page.goto("./");
  expect(embeds).toHaveLength(0);
  await page
    .getByRole("button", { name: "Play eGRAP research demonstration" })
    .click();
  await expect(page.locator("iframe")).toHaveAttribute(
    "src",
    "https://www.youtube-nocookie.com/embed/pO8HsUYfkjA?autoplay=1",
  );
  await expect.poll(() => embeds.length).toBe(1);
});

test("contact validates input and handles success and failure without sending messages", async ({
  page,
}) => {
  let status = 200;
  let count = 0;
  await page.route("https://formspree.io/**", (route) => {
    count++;
    return route.fulfill({
      status,
      contentType: "application/json",
      body: status === 200 ? '{"ok":true}' : '{"error":"test"}',
    });
  });
  await page.goto("./");
  await page.getByRole("button", { name: "Send message" }).click();
  expect(count).toBe(0);
  const fill = async () => {
    await page.getByLabel("Your name").fill("Browser test");
    await page.getByLabel("Email address").fill("test@example.com");
    await page
      .getByLabel("What are you working on?")
      .fill("Mocked request; never sent externally.");
  };
  await fill();
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(
    page.getByText("Thanks — your message has been sent."),
  ).toBeVisible();
  await expect(page.getByLabel("Your name")).toHaveValue("");
  status = 500;
  await fill();
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(
    page.getByText("Your message could not be sent.", { exact: false }),
  ).toBeVisible();
  await expect(page.getByLabel("Your name")).toHaveValue("Browser test");
  expect(count).toBe(2);
});

for (const theme of ["dark", "light"] as const) {
  test(`${theme} layout and accessibility at desktop and mobile sizes`, async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: theme });
    await page.goto("./");
    await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
    for (const width of [1440, 1024, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `overflow at ${width}`,
      ).toBe(true);
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Publications", exact: true })
      .click();
    await expect(page).toHaveURL(/#publications$/);
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).toHaveCount(0);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(result.violations).toEqual([]);
    await page.screenshot({
      path: `test-results/mobile-${theme}.png`,
      fullPage: true,
    });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto("./");
    const desktopResult = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(desktopResult.violations).toEqual([]);
    await page.screenshot({
      path: `test-results/desktop-${theme}.png`,
      fullPage: true,
    });
  });
}

test("storage restrictions and reduced motion do not break the page", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new Error("Storage disabled");
    };
    Storage.prototype.setItem = () => {
      throw new Error("Storage disabled");
    };
  });
  await page.goto("./");
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  expect(
    await page
      .locator(".reveal")
      .first()
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
});
