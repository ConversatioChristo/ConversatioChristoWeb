import PageBlock from "@/components/PageBlock";
import NavMenu from "@/components/NavMenu";
import jesusface from "@/assets/jesusface.png";
import rose from "@/assets/rose.png";

const WhatWeDoSection = () => (
  <PageBlock>
    <div className="flex flex-col items-center mt-4 mb-5">
      <div className="flex items-center justify-center">
        <img src={rose} alt="rose" className="w-8 sm:w-[58px] h-auto mx-1 sm:mx-2 scale-y-[-1]" />
        <h1
          className="inline-block text-accent font-normal text-2xl sm:text-[45px] leading-snug"
          style={{ fontFamily: "'BerkahiBlackletter', serif" }}
        >
          <a href="#home" className="no-underline text-inherit">What We Do</a>
        </h1>
        <img src={rose} alt="rose" className="w-8 sm:w-[58px] h-auto mx-1 sm:mx-2 scale-x-[-1] scale-y-[-1]" />
      </div>
      <NavMenu />
    </div>

    <div className="mt-6 sm:mt-9">
      <img src={jesusface} alt="Jesus Face" className="h-[150px] sm:h-[200px] w-auto" />
    </div>

    <div className="w-full text-left mt-4">
      <ul className="list-none p-0 max-w-[510px] mx-auto space-y-3">
        {[
          "Multimedia/Live Sacred Music: Engage communities in praise and worship of God through ancient spirituality and prayerful contemplation of Gregorian Chant and Latin sacred music.",
          "Musical Revival: Bring to our contemporary world the rediscovery of Medieval, Gregorian, and Renaissance Latin sacred music artistry and polyphonic brilliance.",
          "Schola: Teach and guide willing hearts to encounter and experience the Catholic Church's rich musical heritage.",
        ].map((text, i) => (
          <li
            key={i}
            className="text-primary text-xs sm:text-base leading-relaxed flex items-start"
            style={{ fontFamily: "'Trebuchet MS', 'Lucida Grande', Arial, sans-serif" }}
          >
            <img src={rose} alt="" className="w-4 h-4 mr-2 mt-1 flex-shrink-0 scale-y-[-1]" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  </PageBlock>
);

export default WhatWeDoSection;
