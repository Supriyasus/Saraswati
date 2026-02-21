import { FloatingDock } from "../components/floating-dock";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandFacebook,
  IconBrandX
} from "@tabler/icons-react";

export default function FooterBar() {

  const socials = [
    { title:"Facebook", icon:<IconBrandFacebook className="h-full w-full"/>, href:"#"},
    { title:"Instagram", icon:<IconBrandInstagram className="h-full w-full"/>, href:"#"},
    { title:"LinkedIn", icon:<IconBrandLinkedin className="h-full w-full"/>, href:"#"},
    { title:"YouTube", icon:<IconBrandYoutube className="h-full w-full"/>, href:"#"},
    { title:"Twitter", icon:<IconBrandX className="h-full w-full"/>, href:"#"}
  ];

  return (
    <div className="w-full bg-red-600 py-6 px-10 relative flex items-center justify-between">

      {/* LEFT LOGO */}
      <img src="/saraswati.png" className="h-8"/>

      {/* CENTER DOCK */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <FloatingDock items={socials}/>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="flex gap-6 text-sm text-white">
        <p>© 2024 Saraswati. All rights reserved.</p>
      </div>

    </div>
  );
}