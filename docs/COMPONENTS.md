# Component sources

The portfolio uses local adaptations of two MIT-licensed Magic UI components discovered through 21st.dev:

- [Interactive Hover Button on 21st.dev](https://21st.dev/@dillionverma/components/interactive-hover-button), [upstream source](https://github.com/magicuidesign/magicui/blob/main/apps/www/registry/magicui/interactive-hover-button.tsx).
- [Blur Fade on 21st.dev](https://21st.dev/@dillionverma/components/blur-fade), [upstream source](https://github.com/magicuidesign/magicui/blob/main/apps/www/registry/magicui/blur-fade.tsx).

The registry returned HTTP 403 during development, so the original source was read from Magic UI's GitHub repository. The upstream MIT license is retained in `MAGIC-UI-LICENSE.txt`.

Adaptations: navigation uses anchors; palette uses shared theme tokens; motion honors reduced-motion preferences. Blur Fade keeps a single entrance transition using native CSS opacity and transform instead of an animation runtime, animated blur, or scroll observers. The hover button uses a restrained dot and arrow transition. These changes deliberately reduce work on mobile devices.

Lucide icons are tree-shaken from `lucide-react`. The AD monogram logo is an original vector design, combining the initials with a joint-like circular vertex. Inter is self-hosted through Fontsource; there is no Google Fonts request.
