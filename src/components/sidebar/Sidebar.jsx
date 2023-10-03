import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
 
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <NavLink to="/dashboard" className="active-link">
            <div style={{ display: "flex" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 21C4 17.134 7.13401 14 11 14C11.3395 14 11.6734 14.0242 12 14.0709M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5898 21L14.6148 20.595C14.7914 20.5597 14.8797 20.542 14.962 20.5097C15.0351 20.4811 15.1045 20.4439 15.1689 20.399C15.2414 20.3484 15.3051 20.2848 15.4324 20.1574L19.5898 16C20.1421 15.4477 20.1421 14.5523 19.5898 14C19.0376 13.4477 18.1421 13.4477 17.5898 14L13.4324 18.1574C13.3051 18.2848 13.2414 18.3484 13.1908 18.421C13.1459 18.4853 13.1088 18.5548 13.0801 18.6279C13.0478 18.7102 13.0302 18.7985 12.9948 18.975L12.5898 21Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span style={{ marginTop: "5px", marginLeft: "5px" }}>
                User Management
              </span>
            </div>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/table" cassName="active">
            <div style={{ display: "flex" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_230_17)">
                  <path
                    d="M23.246 12.082H6.60353C5.96607 12.082 5.21531 12.5486 4.93415 13.1201L0.459422 22.187C0.178262 22.7586 0.468684 23.2251 1.1041 23.2251H17.7476C18.3851 23.2251 19.1358 22.7585 19.417 22.187L23.8928 13.1202C24.1739 12.5486 23.8835 12.082 23.246 12.082Z"
                    fill="white"
                  />
                  <path
                    d="M6.60345 10.9223H18.9587V10.8791H20.5642V0.775146H5.73013V2.58461H2.98863V6.74418H1.46242C0.659094 6.74423 0 7.40433 0 8.2056V20.5L3.89699 12.6072C4.36864 11.6474 5.53443 10.9223 6.60345 10.9223ZM4.27907 3.87296C4.48814 3.87296 5.01131 3.87296 5.73013 3.87296V9.58867C5.01131 9.58867 4.48814 9.58867 4.27907 9.58867C4.27907 8.634 4.27907 4.83074 4.27907 3.87296ZM19.2758 2.06455C19.2758 3.08615 19.2758 8.56807 19.2758 9.58867C18.9545 9.58867 17.8783 9.58867 16.4962 9.58867C15.7042 9.58867 10.4056 9.58867 7.02154 9.58867C7.02154 8.56807 7.02154 3.08615 7.02154 2.06455C8.13175 2.06455 18.1636 2.06455 19.2758 2.06455Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_230_17">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span style={{ marginTop: "5px", marginLeft: "5px" }}>
                File Management{" "}
              </span>
            </div>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
