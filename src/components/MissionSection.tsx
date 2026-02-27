import PageBlock from "@/components/PageBlock";
import NavMenu from "@/components/NavMenu";
import preachingMen from "@/assets/preachingmen.png";

const MissionSection = () => (
  <PageBlock id="mission">
    <div className="flex flex-col items-center mt-4 mb-5">
      <h1
        className="text-primary font-normal text-3xl sm:text-[45px] leading-snug mb-1 max-w-[510px] break-words"
        style={{ fontFamily: "'BerkahiBlackletter', serif" }}
      >
        <a href="#home" className="no-underline text-inherit">Mission</a>
      </h1>
      <NavMenu />
    </div>

    <div className="my-8 sm:my-12">
      <img src={preachingMen} alt="Preaching Men" className="h-[150px] sm:h-[200px] w-auto" />
    </div>

    <div className="w-full text-center">
      <p
        className="text-primary font-normal text-sm sm:text-lg leading-relaxed mx-auto max-w-[510px] break-words"
        style={{ fontFamily: "'Trebuchet MS', 'Lucida Grande', Arial, sans-serif" }}
      >
        "Drawing souls to Jesus through ancient spirituality and prayerful
        contemplation of Gregorian Chant and Latin sacred music."
      </p>
    </div>
  </PageBlock>
);

export default MissionSection;
