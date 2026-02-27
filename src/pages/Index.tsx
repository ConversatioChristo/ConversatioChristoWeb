import { useState } from "react";
import titleImage from "@/assets/Conversatio_Christo_Title.png";
import goldenArrow from "@/assets/Golden_Arrow.png";
import backgroundPaper from "@/assets/Background_old_paper.png";

const Index = () => {
  const [showArrow, setShowArrow] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5"
      style={{
        backgroundImage: `url(${backgroundPaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Title Container */}
      <div className="flex flex-col items-center text-center -mt-8 md:-mt-16">
        <a
          href="/"
          className="block"
          onMouseEnter={() => setShowArrow(true)}
          onMouseLeave={() => setShowArrow(false)}
          onTouchStart={() => setShowArrow(true)}
        >
          <img
            src={titleImage}
            alt="Conversatio Christo Title"
            className="w-full max-w-[200px] sm:max-w-[260px] md:max-w-[300px] h-auto"
          />
          <img
            src={goldenArrow}
            alt="Golden Arrow"
            className="mx-auto mt-1 w-[50%] sm:w-[60%] md:w-[70%] max-w-[200px] max-h-[20px] h-auto transition-opacity duration-500"
            style={{ opacity: showArrow ? 1 : 0 }}
          />
        </a>
      </div>

      {/* Description */}
      <div className="mt-5 w-[90%] sm:w-[70%] md:w-[50%] text-center px-4">
        <p
          className="font-bold leading-relaxed"
          style={{
            fontFamily: "'UnifrakturCook', cursive",
            fontSize: "clamp(1rem, 4vw, 1.875rem)",
            color: "hsl(var(--primary))",
          }}
        >
          "Drawing souls to Jesus through ancient spirituality and prayerful
          contemplation of Gregorian Chant and Latin sacred music."
        </p>
      </div>
    </div>
  );
};

export default Index;
