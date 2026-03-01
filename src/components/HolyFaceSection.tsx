import PageBlock from "@/components/PageBlock";
import NavMenu from "@/components/NavMenu";
import goldenArrow from "@/assets/Golden_Arrow.png";
import rose from "@/assets/rose.png";

const HolyFaceSection = () => (
  <PageBlock>
    <div className="flex flex-col items-center mt-4 mb-5">
      <div className="flex items-center justify-center">
        <img src={rose} alt="rose" className="w-8 sm:w-[58px] h-auto mx-1 sm:mx-2 scale-y-[-1]" />
        <h1
          className="inline-block text-accent font-normal text-xl sm:text-[45px] leading-snug"
          style={{ fontFamily: "'BerkahiBlackletter', serif" }}
        >
          <a href="#home" className="no-underline text-inherit">Holy Face Devotion</a>
        </h1>
        <img src={rose} alt="rose" className="w-8 sm:w-[58px] h-auto mx-1 sm:mx-2 scale-x-[-1] scale-y-[-1]" />
      </div>
      <NavMenu />
    </div>

    <div className="w-full mt-5 px-2 overflow-visible max-h-none xl:max-h-[425px] xl:overflow-y-auto">
      <p
        className="text-primary text-xs sm:text-lg leading-relaxed mx-auto max-w-[510px] text-justify"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        In Tours, France during the 1840's a young Carmelite nun, Sister Marie of St. Peter, received a series of revelations from Our Lord about a powerful devotion He wished to be established worldwide - the devotion to His Holy Face that was imprinted on the veil of Veronica, in reparation for the sins of Communism - irreverence, blasphemy, and disregard of Sunday worship by Christians. This devotion is an instrument given to the individual devotee as a seemingly unfailing method of appealing to God in prayer - through adoration of His Holy Face and Name.
      </p>
      <br />
      <p
        className="text-primary text-xs sm:text-lg leading-relaxed mx-auto max-w-[510px] text-justify"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        Opening His Heart to Sister Marie, our Saviour complained of blasphemy, saying that this frightful sin wounds His Divine Heart more grievously than all other sins, like a "poisoned arrow". Our Saviour dictated "The Golden Arrow" prayer, promising that those who would recite this prayer would pierce Him delightfully, releasing torrents of graces from the Sacred Heart of Jesus for the conversion of sinners, and also healing other wounds inflicted on Him by the malice of sinners. This prayer is regarded as the very basis of the work of reparation.
      </p>

      <div className="flex justify-center my-4">
        <img src={goldenArrow} alt="Golden Arrow" className="h-[18px] w-[112px]" />
      </div>

      <p
        className="text-primary text-center text-lg sm:text-xl my-4"
        style={{ fontFamily: "'BerkahiBlackletter', serif" }}
      >
        The Golden Arrow Prayer
      </p>

      <p
        className="text-primary text-xs sm:text-lg leading-relaxed mx-auto max-w-[510px] text-justify"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        May the most holy, most sacred, most adorable, most incomprehensible, and unutterable Name of God be always praised, blessed, loved, adored, and glorified in Heaven, on Earth, and in the hells, by all the creatures of God and by the Sacred Heart of Our Lord Jesus Christ in the most Holy Sacrament of the Altar. Amen.
      </p>
      <br />
      <p
        className="text-primary text-xs sm:text-lg leading-relaxed mx-auto max-w-[510px] text-justify"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        Eternal Father, I offer Thee the adorable Face of Thy Beloved Son for the honor and glory of Thy Name, for the conversion of sinners, and for the salvation of the dying. Amen.
      </p>

      <div className="flex justify-center my-4">
        <img src={goldenArrow} alt="Golden Arrow" className="h-[18px] w-[112px]" />
      </div>

      <p
        className="text-primary text-xs sm:text-lg leading-relaxed mx-auto max-w-[510px] text-justify"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        Our Lord desires that His Holy Face be offered as the exterior object of adoration to all his children who would be associated with the work of reparation. "Offer It unceasingly to My Father for the salvation of your country." "The treasure of My Holy Face in Itself possesses such tremendous value that through It ALL the affairs of My household can readily be settled." His Holy Face is the very image of God. "Be careful to utilize this grace because I shall demand an account of it from you," Our Lord said to Sister Marie.
      </p>
    </div>
  </PageBlock>
);

export default HolyFaceSection;
