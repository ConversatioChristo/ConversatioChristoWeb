import { useState } from "react";
import PageBlock from "@/components/PageBlock";
import NavMenu from "@/components/NavMenu";

const videos = [
  { type: "youtube" as const, src: "https://www.youtube.com/embed/U-bO-2Pm9ks" },
  { type: "local" as const, src: "" },
  { type: "local" as const, src: "" },
];

const RecordingsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i - 1 + videos.length) % videos.length);
  const next = () => setCurrentIndex((i) => (i + 1) % videos.length);

  return (
    <PageBlock id="recordings">
      <div className="flex flex-col items-center mt-4 mb-5">
        <h1
          className="text-primary font-normal text-3xl sm:text-[45px] leading-snug mb-1"
          style={{ fontFamily: "'BerkahiBlackletter', serif" }}
        >
          <a href="#home" className="no-underline text-inherit">Recordings</a>
        </h1>
        <NavMenu />
      </div>

      {/* Video carousel */}
      <div className="relative w-full max-w-[400px] mb-5 flex flex-col items-center mt-4">
        <div className="w-full border-[5px] border-accent shadow-[inset_0_0_12px_rgba(0,0,0,0.7),0_0_8px_rgba(0,0,0,0.5)] bg-primary/10 relative">
          {videos[currentIndex].type === "youtube" ? (
            <iframe
              width="100%"
              height="220"
              src={videos[currentIndex].src}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-[220px] flex items-center justify-center text-primary/50 text-sm">
              Video coming soon
            </div>
          )}
        </div>

        {/* Arrows */}
        <span
          onClick={prev}
          className="absolute top-[100px] -left-8 sm:-left-11 text-primary text-2xl sm:text-3xl cursor-pointer select-none z-10"
          style={{ fontFamily: "'BerkahiBlackletter', serif" }}
        >
          &lt;
        </span>
        <span
          onClick={next}
          className="absolute top-[100px] -right-8 sm:-right-11 text-primary text-2xl sm:text-3xl cursor-pointer select-none z-10"
          style={{ fontFamily: "'BerkahiBlackletter', serif" }}
        >
          &gt;
        </span>

        {/* Dots */}
        <div className="flex gap-3 mt-3">
          {videos.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full bg-primary cursor-pointer ${i === currentIndex ? "opacity-100" : "opacity-30"}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full text-center mt-2">
        <p
          className="text-primary text-sm sm:text-lg leading-relaxed mx-auto max-w-[510px]"
          style={{ fontFamily: "'Trebuchet MS', 'Lucida Grande', Arial, sans-serif" }}
        >
          "Witness the beauty of worship through recorded performances of Gregorian Chant and sacred Latin polyphony."
        </p>
      </div>
    </PageBlock>
  );
};

export default RecordingsSection;
