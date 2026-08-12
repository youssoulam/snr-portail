import { HeroSlider, AboutSection } from "@/components/sections/Hero";
import { ValuesSection } from "@/components/sections/Values";
import { ServicesSection } from "@/components/sections/Services";
import { CtaBand } from "@/components/sections/CtaBand";
import { NewsSection } from "@/components/sections/News";
import { PropertiesSection } from "@/components/sections/Properties";
import { DirectorSection } from "@/components/sections/Director";
import {
  DocumentsSection,
  MediaSection,
} from "@/components/sections/Documents";
import { ContactSection } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ValuesSection />
      <ServicesSection />
      <CtaBand />
      <NewsSection />
      <PropertiesSection />
      <DirectorSection />
      <DocumentsSection />
      <MediaSection />
      <ContactSection />
    </>
  );
}
