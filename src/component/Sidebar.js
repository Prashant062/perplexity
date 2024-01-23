import React from "react";
import "./Sidebar.css";
import logoimg from "../Assets/logoimg.png";
import { Link } from "react-router-dom";

const Sidebar = ({ isIconClicked, onIconClick }) => {
  return (
    <>
      <div
        className={`sidebar-container ${isIconClicked ? "icon-clicked" : ""}`}
      >
        <div className={`sidebar ${isIconClicked ? "icon-clicked" : ""}`}>
          <div
            className={`logo-perplexity ${isIconClicked ? "icon-clicked" : ""}`}
          >
            <img src={logoimg} alt="perplexity" />
            <h2 style={{ display: isIconClicked ? "none" : "block" }}>
              perplexity
            </h2>
            <div className="collaps" style={{ display: isIconClicked ? "none" : "" }}>
            <i
              style={{ display: isIconClicked ? "none" : "block" }}
              className="fa-solid fa-right-to-bracket"
              onClick={onIconClick}
            ></i>
            </div>
          </div>

          <div
            className={`new-thread-container ${
              isIconClicked ? "icon-clicked" : ""
            }`}
          >
            <div
              className="new-thread-title"
              style={{ display: isIconClicked ? "none" : "block" }}
            >
              New Thread
            </div>
            <div
              className="New-thread-ctrl mx-1"
              style={{ display: isIconClicked ? "none" : "block" }}
            >
              Ctrl
            </div>
            <div
              className="new-thread-I"
              style={{ display: isIconClicked ? "none" : "block" }}
            >
              I
            </div>
            <div
              className="icon-thread"
              style={{ display: !isIconClicked ? "none" : "block" }}
            >
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>

          <div
            className={`component-section ${
              isIconClicked ? "icon-clicked" : ""
            }`}
          >
            <ul>
              <li>
                <Link to="/">
                  <i className="fa-solid fa-magnifying-glass mx-1"></i>{" "}
                  <span style={{ display: isIconClicked ? "none" : "" }}>
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/discover">
                  <i className="fa-regular fa-compass mx-1"></i>
                  <span style={{ display: isIconClicked ? "none" : "" }}>
                    Discover
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/library">
                  <i className="fas fa-book mx-1"></i>
                  <span style={{ display: isIconClicked ? "none" : "" }}>
                    Library
                  </span>
                </Link>
              </li>
              {/* <li>
                        <i className="fa-solid fa-right-to-bracket" onClick={onIconClick}></i>
                    </li> */}

              {/* <li>
                            <button>SignUp</button>
                        </li> */}
            </ul>
          </div>
             <div className='expand-icon'
             style={{ display: !isIconClicked ? "none" : "" }}>
            <i
              style={{ display: !isIconClicked ? "none" : "block" }}
              className="fa-solid fa-right-to-bracket"
              onClick={onIconClick}
            ></i>
             </div>
          <div
            className="trypro"
            style={{ display: isIconClicked ? "none" : "", color:'white' }}
          >
            <h4>Try Pro</h4>
            <p>
              Upgrade to Claude-2 or GPT-4, boost Copilot uses, and upload more
              files.
            </p>
            <Link to="">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>Learn
              More
            </Link>
          </div>
          <div
            className="sidenav-bottom"
            style={{ display: isIconClicked ? "none" : "" }}
          >
            <Link to="">
              <i className="fas fa-mobile-alt"></i>Download
            </Link>
            <Link to="">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link to="">
              <i className="fa-brands fa-discord"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
