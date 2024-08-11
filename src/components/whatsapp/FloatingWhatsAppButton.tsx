import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton: React.FC<{ isFooterVisible: boolean }> = ({
  isFooterVisible,
}) => {
  return (
    <div
      className={`fixed bottom-4 right-4 transition-transform ${
        isFooterVisible ? "translate-y-[-70px]" : ""
      }`}
    >
      <button className="bg-green-500 text-white p-4 rounded-full shadow-lg">
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
};

export default FloatingWhatsAppButton;
