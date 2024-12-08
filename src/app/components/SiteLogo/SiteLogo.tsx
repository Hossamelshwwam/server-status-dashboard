import Image from "next/image";
import React from "react";
import logo from "@/../public/assets/images/logo.png";

const SiteLogo = ({
  width = 100,
  height = 100,
  className,
  classNameImage,
}: {
  width?: number;
  height?: number;
  className?: string;
  classNameImage?: string;
}) => {
  return (
    <div className={`${className}`}>
      <Image
        src={logo}
        alt="logo image"
        width={width}
        height={height}
        className={`${classNameImage}`}
        priority
      />
    </div>
  );
};

export default React.memo(SiteLogo);
