import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Made by Kevin Michael Hunt</h2>
      <p>
        <ul>
          <a href="https://github.com/KvnHunt">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/kevin-hunt-6752ab2ab/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="">
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;