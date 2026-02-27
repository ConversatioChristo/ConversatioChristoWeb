import { useState } from "react";
import NavMenu from "@/components/NavMenu";
import HomeSection from "@/components/HomeSection";
import MissionSection from "@/components/MissionSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import HolyFaceSection from "@/components/HolyFaceSection";
import RecordingsSection from "@/components/RecordingsSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import SupportSection from "@/components/SupportSection";

const Index = () => (
  <div className="w-full overflow-x-hidden">
    <HomeSection />
    <MissionSection />
    <WhatWeDoSection />
    <HolyFaceSection />
    <RecordingsSection />
    <EventsSection />
    <ContactSection />
    <SupportSection />
  </div>
);

export default Index;
