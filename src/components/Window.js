import React from "react";

const Window = ({ title, children, className }) => {
  return (
    <div className={`window ${className || ""}`}>
      <div className="title-bar">
        <span>{title}</span>
        <div className="title-bar-buttons">
          <span>_</span>
          <span>☐</span>
          <span>X</span>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Window;
