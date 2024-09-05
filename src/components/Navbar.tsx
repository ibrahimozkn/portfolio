import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-200 rounded-lg">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">ibrahimozkan.dev</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="text-ghost">
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary className="text-ghost">Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
