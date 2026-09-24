import { ArrowUp } from "lucide-react";
import { asset } from "../data/profile";
export default function Footer() {
  return (
    <footer className="shell footer">
      <a href="#home" className="flex items-center gap-3">
        <img src={asset("logo.svg")} alt="" width="28" height="28" />
        <span>© {new Date().getFullYear()} Adip Ranjan Das</span>
      </a>
      <span className="hidden md:block">
        Researching in Edinburgh. Building for the real world.
      </span>
      <a className="flex items-center gap-2" href="#home">
        Back to top <ArrowUp size={15} />
      </a>
    </footer>
  );
}
