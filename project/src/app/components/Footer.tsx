import { LucideGithub, LucideLinkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { HeartIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-[25px] min-w-screen flex justify-center items-center pt-7 pb-5">
      <Link
        href="https://github.com/PrassesKhadka/sessami/tree/main/project"
        className="pr-4 animate-pulse hover:animate-spin"
      >
        <LucideGithub className="text-black" />
      </Link>
      <Link href="https://linkedin.com/in/prasses-khadka">
        <LucideLinkedin className="text-blue-500 animate-pulse hover:animate-spin" />
      </Link>
    </div>
  );
};

export default Footer;
