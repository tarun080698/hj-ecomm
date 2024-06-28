import React, { useEffect, useRef, useState } from "react";

const Popover = ({ heading, content }) => {
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const popoverRef = useRef(null);

  const handleClick = () => {
    setPopoverVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setPopoverVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={popoverRef}>
      {/* Trigger element */}
      <button
        onClick={handleClick}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        className="text-base text-gray font-extrabold"
      >
        {heading}
      </button>

      {/* Popover content */}
      {isPopoverVisible && (
        <div
          //   onMouseEnter={handleMouseEnter}
          //   onMouseLeave={handleMouseLeave}
          className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
