import React from "react";
import PersonalLogo from "../assets/NailsByHelen_Window_Signage_r1_WHITE.png";
import PersonalLogo2 from "../assets/NailsByHelen_Window_Signage_r1_GOLD.png";
import "./Footer.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row__footer">
        <a href="#" className="footer__anchor">
          <figure className="footer__logo--img-wrapper">
            <img src={PersonalLogo} alt="" className="footer__logo--img" />
          </figure>
          <span class="footer__logo--popper">
            Top
            <ArrowUpwardIcon />
          </span>
        </a>
      </div>
    </div>
  );
}
