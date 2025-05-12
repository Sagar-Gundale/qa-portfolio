import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Hi, I'm Sagar Gundale",
  subtitle = "QA Professional blending manual testing with automation expertise in Java, Selenium, TestNG, and Eclipse for high-impact software delivery..",
  ctaText = "Download My Resume",
  onCtaClick = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1-PISA722XYl-WIkkrNKlyF5eLNueP8RI/view?usp=drive_link"; // Converted to direct download URL
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Sagar_Gundale_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
}: HeroSectionProps) => {
  return (
    <section className="min-h-[700px] w-full flex items-center justify-center bg-background px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button size="lg" onClick={onCtaClick} className="group">
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
