import { TopMenu } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white">
      <TopMenu />
      <div className="block md:hidden">{/* <SideBarResponsive /> */}</div>
      {children}
      {/* <Footer /> */}
    </main>
  );
}
