import React from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

interface SectionTitleProps {
  title: string;
}

interface SectionTextProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center md:text-left">
    {title}
  </h2>
);

const SectionText: React.FC<SectionTextProps> = ({ children }) => (
  <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
    {children}
  </p>
);

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  imageUrl,
}) => (
  <div className="flex flex-col md:flex-row gap-4 items-center md:items-stretch">
    <div
      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
      style={backgroundImageStyle(imageUrl)}
    ></div>
    <div className="flex flex-col justify-center items-center md:items-start">
      <p className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em]">
        {name}
      </p>
      <p className="text-[#637588] text-base font-normal leading-normal">
        {role}
      </p>
      <p className="text-[#637588] text-base font-normal leading-normal">
        {description}
      </p>
    </div>
  </div>
);

const backgroundImageStyle = (url: string): React.CSSProperties => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("${url}")`,
});

const About: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="container">
              <div className="md:rounded-xl">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-10 md:gap-8 md:px-10"
                  style={backgroundImageStyle(
                    "https://cdn.usegalileo.ai/sdxl10/695bac98-5d79-40ec-b898-3f12517aa12b.png"
                  )}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                      About us
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal md:text-base">
                      We’re on a mission to deliver the best possible experience
                      in house painting. We know that a fresh coat of paint is
                      more than just a color, it’s a life-giving refresh that
                      makes your home feel new again. That’s why we go above and
                      beyond to make sure the entire process is easy, enjoyable,
                      and stress-free for you.
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <SectionTitle title="Our story" />
            <SectionText>
              We believe that every home has a story to tell. And we’re here to
              help you tell it. Our company was founded by two friends who
              shared a passion for painting and a commitment to quality. We
              started as a small team with big dreams, and over the years, we’ve
              grown into a thriving business with a reputation for excellence.
              Our mission is simple: to provide our customers with the highest
              quality paint job at the best price. We take pride in our work,
              and we’re not satisfied until you are. When you choose us, you’re
              choosing a team of experienced professionals who are dedicated to
              making your home beautiful.
            </SectionText>

            <SectionTitle title="Meet the team" />
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center p-4">
              <TeamMember
                name="Diego Morales"
                role="Co-founder"
                description="Diego is a master painter and a true craftsman. With over 10 years of experience, he has an eye for detail and a passion for perfection. He takes pride in every brushstroke and is committed to delivering the highest quality work. When he’s not painting, you can find him surfing or hiking in the great outdoors."
                imageUrl="https://cdn.usegalileo.ai/stability/65889451-fe21-4f20-bc2a-7dba99aef725.png"
              />
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center p-4">
              <TeamMember
                name="Jhonatan"
                role="Co-founder"
                description="Jhonatan is a design enthusiast and a color connoisseur. He loves helping clients find the perfect palette for their home and guiding them through the painting process. With a background in art and a keen sense of style, he brings a creative touch to every project. In her free time, he enjoys gardening and DIY decorating."
                imageUrl="https://cdn.usegalileo.ai/stability/f6ab0e45-dd15-4867-86e3-50a878f3ba96.png"
              />
            </div>

            <div className="flex justify-center px-4 py-3">
              <button className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
