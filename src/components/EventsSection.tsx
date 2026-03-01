import PageBlock from "@/components/PageBlock";
import NavMenu from "@/components/NavMenu";
import event1 from "@/assets/Sep2025_CCgroup.jpg";
import event2 from "@/assets/Nov2025_CCsinging.png";
import event3 from "@/assets/Sep2025_CCsinging.png";

const events = [
  { src: event1, alt: "September 2025 CC Group" },
  { src: event2, alt: "November 2025 CC Singing" },
];

const EventsSection = () => (
  <PageBlock id="events">
    <div className="flex flex-col items-center mt-4 mb-5">
      <h1
        className="text-primary font-normal text-3xl sm:text-[45px] leading-snug mb-1"
        style={{ fontFamily: "'BerkahiBlackletter', serif" }}
      >
        <a href="#home" className="no-underline text-inherit">Events</a>
      </h1>
      <NavMenu />
    </div>

    {/* Scrollable gallery */}
    <div className="mt-6 sm:mt-10 flex flex-col gap-6 sm:gap-8">
      {events.map((event, i) => (
        <div key={i} className="snap-start flex justify-center items-center">
          <img
            src={event.src}
            alt={event.alt}
            className="w-[250px] sm:w-[325px] h-[260px] sm:h-[360px] object-cover border-4 border-accent shadow-lg transition-transform hover:scale-[1.02]"
          />
        </div>
      ))}
    </div>
  </PageBlock>
);

export default EventsSection;
