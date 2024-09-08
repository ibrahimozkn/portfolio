import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar bg-base-200 rounded-lg">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">ibrahimozkan</a>
      </div>
      <div className="flex-none">
        <a
          href="https://www.linkedin.com/in/ibrahim-ozkan/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-circle"
        >
          <FaLinkedin className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/ibrahimozkn"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-circle"
        >
          <FaGithub className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
