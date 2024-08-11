"use client";

import { SideBar, TopMenu } from "@/components";
import Footer from "@/components/ui/footer/Footer";
import FloatingWhatsAppButton from "@/components/whatsapp/FloatingWhatsAppButton";

import { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsFooterVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="min-h-screen bg-white">
      <TopMenu />
      <div className="block md:hidden">
        <SideBar />
      </div>
      {children}
      <Footer />

      <FloatingWhatsAppButton isFooterVisible={isFooterVisible} />
    </main>
  );
}
