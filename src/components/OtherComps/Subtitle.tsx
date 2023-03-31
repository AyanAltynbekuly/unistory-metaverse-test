import React, { FC, PropsWithChildren } from "react";
const Subtitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <span className="font-bold text-2xl text-white leading-5">{children}</span>
  );
};

export default Subtitle;
