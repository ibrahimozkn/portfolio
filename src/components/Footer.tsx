import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer p-5 bg-base-200 text-neutral-content rounded-lg">
      <div className="flex flex-row justify-between w-full items-center">
        <p>© 2024 Ibrahim. All rights reserved.</p>
        <div className="flex gap-2">
          <a
            href="https://github.com/ibrahimozkn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ibrahim-ozkan/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
