import React, { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return <div className="bg-black min-h-screen">{children}</div>;
};

export default Background;
