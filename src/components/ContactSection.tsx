import PageBlock from "@/components/PageBlock";
import NavMenu from "@/components/NavMenu";

const ContactSection = () => (
  <PageBlock id="contact">
    <div className="flex flex-col items-center mt-4 mb-5">
      <h1
        className="text-primary font-normal text-3xl sm:text-[45px] leading-snug mb-1"
        style={{ fontFamily: "'BerkahiBlackletter', serif" }}
      >
        <a href="#home" className="no-underline text-inherit">Contact</a>
      </h1>
      <NavMenu />
    </div>

    <div className="mt-20 sm:mt-[120px] w-full text-center">
      <p
        className="text-primary text-xl sm:text-[35px] leading-relaxed break-words"
        style={{ fontFamily: "'Trebuchet MS', 'Lucida Grande', Arial, sans-serif" }}
      >
        Contact us at: <a href="mailto:conversatiochristo@gmail.com" className="text-inherit underline">conversatiochristo@gmail.com</a>
      </p>
    </div>
  </PageBlock>
);

export default ContactSection;
