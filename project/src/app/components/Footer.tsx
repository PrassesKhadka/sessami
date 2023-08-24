import { LucideGithub, LucideLinkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full min-w-screen flex justify-center items-center m-5">
      <Link
        href="https://github.com/PrassesKhadka/sessami/tree/main/project"
        className="pr-4"
      >
        <LucideGithub className="text-black" />
      </Link>
      <Link href="https://linkedin.com/in/prasses-khadka">
        <LucideLinkedin className="text-blue-500 " />
      </Link>
    </div>
  );
};

export default Footer;
