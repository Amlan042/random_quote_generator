import React from "react";

const Container = ({ children, color }) => {
  return (
    <div
      className="bgPage"
      style={{
        background: `linear-gradient(-45deg, ${color}, #1e1e2e, #2d3436, ${color})`,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
