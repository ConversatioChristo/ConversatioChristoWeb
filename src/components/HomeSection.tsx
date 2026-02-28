import PageBlock from "@/components/PageBlock";
import NavMenu from "@/components/NavMenu";
import titleImage from "@/assets/Conversatio_Christo_Title.png";
import goldenArrow from "@/assets/Golden_Arrow.png";
import holyFace from "@/assets/Hi_Res_Holy_Face.png";

const HomeSection = () => (
  <PageBlock id="home" frameType="top" showTopDiamonds>
    <div className="flex flex-col items-center mt-4 mb-5">
      <a href="#home">
        <img src={titleImage} alt="Conversatio Christo Title" className="h-10 sm:h-[60px] w-auto" />
      </a>
      <NavMenu />
      
    </div>

    <div className="my-0">
      <img src={holyFace} alt="Holy Face" className="h-[200px] sm:h-[274px] w-auto mb-6" />
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

export default HomeSection;
