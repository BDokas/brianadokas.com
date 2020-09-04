import React from "react";
import LinkedinIcon from "react-ionicons/lib/LogoLinkedin";
import GithubIcon from "react-ionicons/lib/LogoGithub";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <LinkedinIcon
        name="logo-linkedin"
        onClick={() =>
          window.location.assign(
            "https://www.linkedin.com/in/brian-dokas-ba8aaa190/"
          )
        }
      ></LinkedinIcon>
      <GithubIcon
         name="logo-github"
         onClick={() =>
            window.location.assign(
               "https://github.com/BDokas"
            )
         }
      ></GithubIcon>
    </div>
  );
};

export default Navigation;
