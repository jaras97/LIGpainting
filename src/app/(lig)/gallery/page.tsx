import React from "react";

const page = () => {
  return (
    <div className="md:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">
              Our Work
            </p>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              We are proud of the work we do and the quality of the services we
              provide. Here is a selection of some of our latest projects.
            </p>
          </div>
        </div>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p className="text-[#111418] text-sm font-medium leading-normal">
              All
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p className="text-[#111418] text-sm font-medium leading-normal">
              Residential
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p className="text-[#111418] text-sm font-medium leading-normal">
              Commercial
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p className="text-[#111418] text-sm font-medium leading-normal">
              Exterior
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p className="text-[#111418] text-sm font-medium leading-normal">
              Interior
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  ' url("https://cdn.usegalileo.ai/sdxl10/562d43e5-c0ca-4362-9223-88ad3ae7e366.png")',
              }}
              //   style='background-image: url("https://cdn.usegalileo.ai/sdxl10/562d43e5-c0ca-4362-9223-88ad3ae7e366.png");'
            ></div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              Modern Residential House Painting
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  ' url("https://cdn.usegalileo.ai/sdxl10/32c0e20d-142a-49df-9a41-c30ad6952c90.png")',
              }}
              //   style='background-image: url("https://cdn.usegalileo.ai/sdxl10/32c0e20d-142a-49df-9a41-c30ad6952c90.png");'
            ></div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              Commercial Building Exterior Painting
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  ' url("https://cdn.usegalileo.ai/sdxl10/055b433c-71c3-4b01-b63a-4db3994e82ef.png")',
              }}
              //   style='background-image: url("https://cdn.usegalileo.ai/sdxl10/055b433c-71c3-4b01-b63a-4db3994e82ef.png");'
            ></div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              Interior House Painting
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  ' url("https://cdn.usegalileo.ai/sdxl10/588c4eb6-c977-4953-9cf9-9be78c43b7a2.png")',
              }}
              //   style='background-image: url("https://cdn.usegalileo.ai/sdxl10/588c4eb6-c977-4953-9cf9-9be78c43b7a2.png");'
            ></div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              Exterior House Painting
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  ' url("https://cdn.usegalileo.ai/sdxl10/43bd63e8-d47d-43e9-9dcb-a157bff7c365.png")',
              }}
              //   style='background-image: url("https://cdn.usegalileo.ai/sdxl10/43bd63e8-d47d-43e9-9dcb-a157bff7c365.png");'
            ></div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              Residential House Painting
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  ' url("https://cdn.usegalileo.ai/sdxl10/4ed4aaad-fee4-4d09-a9a2-4f0bb037dbdd.png")',
              }}
              //   style='background-image: url("https://cdn.usegalileo.ai/sdxl10/4ed4aaad-fee4-4d09-a9a2-4f0bb037dbdd.png");'
            ></div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              Commercial Building Interior Painting
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  ' url("https://cdn.usegalileo.ai/sdxl10/31f2a25b-573b-449b-b376-f5ed0386d3fb.png")',
              }}
              //   style='background-image: url("https://cdn.usegalileo.ai/sdxl10/31f2a25b-573b-449b-b376-f5ed0386d3fb.png");'
            ></div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              Exterior House Painting
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  ' url("https://cdn.usegalileo.ai/sdxl10/a3555083-7fbc-43bb-912f-90a1df1053af.png")',
              }}
              //   style='background-image: url("https://cdn.usegalileo.ai/sdxl10/a3555083-7fbc-43bb-912f-90a1df1053af.png");'
            ></div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              Residential House Painting
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  ' url("https://cdn.usegalileo.ai/stability/2474b1fe-6b1d-4352-a264-9fb43749f910.png")',
              }}
              //   style='background-image: url("https://cdn.usegalileo.ai/stability/2474b1fe-6b1d-4352-a264-9fb43749f910.png");'
            ></div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              Interior House Painting
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  ' url("https://cdn.usegalileo.ai/sdxl10/33bf74d4-fe2b-48e9-8512-3260b438f31b.png")',
              }}
              //   style='background-image: url("https://cdn.usegalileo.ai/sdxl10/33bf74d4-fe2b-48e9-8512-3260b438f31b.png");'
            ></div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              Modern Commercial Building Painting
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  ' url("https://cdn.usegalileo.ai/sdxl10/843f9a39-021c-4f9e-a11e-c11e708e3bcb.png")',
              }}
              //   style='background-image: url("https://cdn.usegalileo.ai/sdxl10/843f9a39-021c-4f9e-a11e-c11e708e3bcb.png");'
            ></div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              Residential House Painting
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  ' url("https://cdn.usegalileo.ai/sdxl10/0cfa34c8-fc3a-45f9-abde-c6bea1a8e731.png")',
              }}
              //   style='background-image: url("https://cdn.usegalileo.ai/sdxl10/0cfa34c8-fc3a-45f9-abde-c6bea1a8e731.png");'
            ></div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              Commercial Building Exterior Painting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
