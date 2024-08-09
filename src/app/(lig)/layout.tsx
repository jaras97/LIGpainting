import { SideBar, TopMenu } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white">
      <TopMenu />
      <div className="block md:hidden">
        <SideBar />
      </div>
      {children}
      {/* <Footer /> */}
    </main>
  );
}
