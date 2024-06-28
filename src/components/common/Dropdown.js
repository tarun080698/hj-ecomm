import React, { useState, useRef, useEffect } from "react";
import "tailwindcss/tailwind.css";

const Dropdown = ({ items, sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleItemClick = (value) => {
    setSortBy(value)
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getSelectedItem = (value) => {
    return items.filter((item) => item.value === value)[0]?.name;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={handleToggleDropdown} className="focus:outline-none">
        <span className="text-sm text-gray font-extrabold">SORT BY </span>
        {getSelectedItem(sortBy)} <span>&#9662;</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-max bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <ul className="py-1">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(item.value)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
