import PageBlock from "@/components/PageBlock";
import NavMenu from "@/components/NavMenu";

const SupportSection = () => (
  <PageBlock id="support" frameType="bottom" showBottomDiamonds>
    <div className="flex flex-col items-center mt-4 mb-5">
      <h1
        className="text-primary font-normal text-3xl sm:text-[45px] leading-snug mb-1"
        style={{ fontFamily: "'BerkahiBlackletter', serif" }}
      >
        <a href="#home" className="no-underline text-inherit">Support</a>
      </h1>
      <NavMenu />
    </div>

    <div className="mt-20 sm:mt-[120px] w-full text-center">
      <p
        className="text-primary text-xl sm:text-[35px] leading-relaxed"
        style={{ fontFamily: "'Trebuchet MS', 'Lucida Grande', Arial, sans-serif" }}
      >
        "This page is in progress"
      </p>
    </div>
  </PageBlock>
);

export default SupportSection;
