import backgroundPaper from "@/assets/Background_old_paper.png";

interface PageBlockProps {
  id?: string;
  children: React.ReactNode;
  frameType?: "top" | "bottom" | "none";
  showTopDiamonds?: boolean;
  showBottomDiamonds?: boolean;
  showDivider?: boolean;
}

const PageBlock = ({
  id,
  children,
  frameType = "none",
  showTopDiamonds = false,
  showBottomDiamonds = false,
  showDivider = true,
}: PageBlockProps) => (
  <section
    id={id}
    className="relative w-full min-h-screen flex justify-center items-start"
    style={{
      backgroundImage: `url(${backgroundPaper})`,
      backgroundSize: "100% 100%",
      backgroundPosition: "top center",
    }}
  >
    {/* Frame line */}
    {frameType === "top" && (
      <div className="absolute top-[30px] bottom-[30px] w-full left-1/2 -translate-x-1/2 pointer-events-none z-[1] border-t-[3px] border-accent shadow-[inset_0_10px_12px_-10px_rgba(0,0,0,0.75)]" />
    )}
    {frameType === "bottom" && (
      <div className="absolute top-[30px] bottom-[30px] w-full left-1/2 -translate-x-1/2 pointer-events-none z-[1] border-b-[3px] border-accent shadow-[inset_0_-10px_12px_-10px_rgba(0,0,0,0.75)]" />
    )}

    {/* Top diamonds */}
    {showTopDiamonds && (
      <>
        <div className="absolute w-4 h-4 bg-accent rotate-45 pointer-events-none z-[2] top-[23.5px] left-0" />
        <div className="absolute w-4 h-4 bg-accent rotate-45 pointer-events-none z-[2] top-[23.5px] right-0" />
      </>
    )}

    {/* Bottom diamonds */}
    {showBottomDiamonds && (
      <>
        <div className="absolute w-4 h-4 bg-accent rotate-45 pointer-events-none z-[2] bottom-[23.5px] left-0" />
        <div className="absolute w-4 h-4 bg-accent rotate-45 pointer-events-none z-[2] bottom-[23.5px] right-0" />
      </>
    )}

    {/* Section divider diamonds */}
    {showDivider && (
      <>
        <div className="absolute w-4 h-4 bg-accent rotate-45 pointer-events-none z-10 bottom-[-1%] left-[27%]" />
        <div className="absolute w-4 h-4 bg-accent rotate-45 pointer-events-none z-10 bottom-[-1%] left-[72%]" />
      </>
    )}

    {/* Divider line */}
    {showDivider && (
      <div className="absolute bottom-0 left-1/2 w-[45%] h-[3px] bg-accent -translate-x-1/2" />
    )}

    {/* Latin motto */}
    <div
      className="absolute top-10 right-4 sm:right-[30px] text-accent opacity-55 z-[15] pointer-events-none text-sm sm:text-lg tracking-wide"
      style={{ fontFamily: "'BerkahiBlackletter', serif" }}
    >
      Domine Ostende Faciem Tuam
    </div>

    {/* Copyright */}
    <div className="absolute bottom-[2%] left-4 sm:left-[30px] text-primary opacity-55 z-[15] pointer-events-none text-xs tracking-wide font-sans">
      © Conversatio Christo 2026
    </div>

    {/* Page content */}
    <div className="relative w-full max-w-[600px] px-4 sm:px-[30px] pt-[70px] pb-[30px] flex flex-col items-center text-center z-[5] box-border">
      {children}
    </div>
  </section>
);

export default PageBlock;
