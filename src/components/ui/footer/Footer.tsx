import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">LIG painting</h2>
          <p className="text-sm">© 2023 LIG painting. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/contact" title="Contact LIG painting">
            Contact
          </Link>
          <a
            href="https://www.instagram.com/LIGPAINTINGINC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
            title="Follow LIG painting on Instagram"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
