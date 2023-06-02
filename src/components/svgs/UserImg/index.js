import * as React from "react";
const SVGComponent = (props) => (
  <svg
    fill="#000000"
    width="80px"
    height="80px"
    viewBox="0 0 1.2 1.2"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M0.302 0.937A0.448 0.448 0 0 0 0.6 1.05a0.448 0.448 0 0 0 0.298 -0.113C0.884 0.884 0.778 0.85 0.6 0.85c-0.178 0 -0.284 0.034 -0.298 0.087Zm-0.072 -0.081C0.286 0.782 0.418 0.75 0.6 0.75c0.181 0 0.314 0.032 0.37 0.106a0.45 0.45 0 1 0 -0.74 0ZM0.6 1.15C0.296 1.15 0.05 0.904 0.05 0.6S0.296 0.05 0.6 0.05s0.55 0.246 0.55 0.55 -0.246 0.55 -0.55 0.55ZM0.4 0.5c0 -0.112 0.079 -0.2 0.2 -0.2 0.121 0 0.2 0.096 0.2 0.21 0 0.164 -0.089 0.24 -0.2 0.24 -0.112 0 -0.2 -0.079 -0.2 -0.25Zm0.1 0c0 0.114 0.041 0.15 0.1 0.15 0.059 0 0.1 -0.035 0.1 -0.14 0 -0.063 -0.039 -0.11 -0.1 -0.11 -0.063 0 -0.1 0.041 -0.1 0.1Z"
    />
  </svg>
);
export default SVGComponent;
