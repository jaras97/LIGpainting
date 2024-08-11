import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton: React.FC<{ isFooterVisible: boolean }> = ({
  isFooterVisible,
}) => {
  const whatsappNumber = "14013594971";
  const whatsappMessage = "Hello, I would like more information.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div
      className={`fixed bottom-4 right-4 transition-transform ${
        isFooterVisible ? "translate-y-[-50px]" : ""
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
