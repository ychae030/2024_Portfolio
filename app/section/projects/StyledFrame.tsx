import React from "react";

const StyledFrame = () => {
  return (
    <>
      <div className="left-0 top-0 corner">
        <svg viewBox="0 0 50 50" className="corner-svg">
          <line x1="0" y1="10" x2="10" y2="0" className="diagonal-line" />
          <line x1="0" y1="30" x2="0" y2="10" className="vertical-line" />
          <line x1="30" y1="0" x2="10" y2="0" className="horizontal-line" />
        </svg>
      </div>

      <div className="right-0 top-0 rotate-90 corner">
        <svg viewBox="0 0 50 50" className="corner-svg">
          <line x1="0" y1="10" x2="10" y2="0" className="diagonal-line" />
          <line x1="0" y1="30" x2="0" y2="10" className="vertical-line" />
          <line x1="30" y1="0" x2="10" y2="0" className="horizontal-line" />
        </svg>
      </div>

      <div className="left-0 bottom-0 rotate-[270deg] corner">
        <svg viewBox="0 0 50 50" className="corner-svg">
          <line x1="0" y1="10" x2="10" y2="0" className="diagonal-line" />
          <line x1="0" y1="30" x2="0" y2="10" className="vertical-line" />
          <line x1="30" y1="0" x2="10" y2="0" className="horizontal-line" />
        </svg>
      </div>

      <div className="right-0 bottom-0 rotate-180 corner">
        <svg viewBox="0 0 50 50" className="corner-svg ">
          <line x1="0" y1="10" x2="10" y2="0" className="diagonal-line" />
          <line x1="0" y1="30" x2="0" y2="10" className="vertical-line" />
          <line x1="30" y1="0" x2="10" y2="0" className="horizontal-line" />
        </svg>
      </div>
    </>
  );
};

export default StyledFrame;
