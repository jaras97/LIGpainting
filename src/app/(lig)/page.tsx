import Image from "next/image";

export default function Home() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      // style='font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;'
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="bg-cover bg-center md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/b5202558-2934-4345-978d-3234fb195e82.png")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Trusted Residential &amp; Commercial Painting Services
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      PaintPro is a full-service painting company. We provide
                      all of your painting needs, from residential to
                      commercial. Our goal is to deliver the best service at the
                      best price.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Get a Quote</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Our Services
                </h1>
                <p className="text-[#0e141b] text-base font-normal leading-normal max-w-[720px]">
                  We offer a variety of painting services to meet the needs of
                  our customers. Whether you need residential or commercial
                  painting, interior or exterior painting, or cabinet painting,
                  we can help. Our team of professional painters will work with
                  you to create a beautiful, long-lasting finish that you ll
                  love.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        ' url("https://cdn.usegalileo.ai/stability/f7f837f7-e1b0-432c-834e-a91722e471ea.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#0e141b] text-base font-medium leading-normal">
                      Residential Painting
                    </p>
                    <p className="text-[#4e7397] text-sm font-normal leading-normal">
                      We offer interior and exterior painting services for
                      homeowners in the area. Whether you need a single room
                      painted or your entire home, our team of professionals can
                      handle any project.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/stability/1f934505-b981-41d5-80da-0416c11022b9.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#0e141b] text-base font-medium leading-normal">
                      Commercial Painting
                    </p>
                    <p className="text-[#4e7397] text-sm font-normal leading-normal">
                      Our commercial painting services are perfect for
                      businesses in the area. We offer high-quality painting
                      services at competitive prices, so you can give your
                      business a fresh, new look without breaking the bank.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/6935f8d0-9c72-409c-af38-88f24b8c9c77.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#0e141b] text-base font-medium leading-normal">
                      Interior Painting
                    </p>
                    <p className="text-[#4e7397] text-sm font-normal leading-normal">
                      We offer interior painting services for homeowners in the
                      area. Whether you need a single room painted or your
                      entire home, our team of professionals can handle any
                      project.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/38ef6bc3-ba79-41c3-a129-b604ff58084c.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#0e141b] text-base font-medium leading-normal">
                      Exterior Painting
                    </p>
                    <p className="text-[#4e7397] text-sm font-normal leading-normal">
                      We offer exterior painting services for homeowners in the
                      area. Whether you need a single room painted or your
                      entire home, our team of professionals can handle any
                      project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="@container">
              <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center items-center">
                  <h1 className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                    Ready to get started?
                  </h1>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                      <span className="truncate">Get a Quote</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
