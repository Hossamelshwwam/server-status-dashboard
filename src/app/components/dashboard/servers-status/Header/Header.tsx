import React from "react";

const Header = ({ duration, title }: { duration: string; title: string }) => {
  return (
    <div className="flex items-center justify-between py-7 px-5 shadow rounded-lg mb-20">
      <h1 className="md:text-3xl text-xl font-bold capitalize text-n-main">
        {title}
      </h1>
      <p className="capitalize md:text-lg">{duration}</p>
    </div>
  );
};

export default React.memo(Header);
