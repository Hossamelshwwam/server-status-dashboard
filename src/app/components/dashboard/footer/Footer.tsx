import React from "react";

const Footer = () => {
  return (
    <div className="bg-n-black border-t border-main absolute bottom-0 left-0 w-full py-5">
      <h6 className="text-center text-n-white text-sm">
        All rights reserved © {new Date().getFullYear()}{" "}
        <a
          href="https://my-portfolio-v2-hossam.netlify.app/"
          target="_blank"
          className="text-n-main capitalize"
          rel="noopener noreferrer"
        >
          HE
        </a>
      </h6>
    </div>
  );
};

export default Footer;
