"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ConfettiButton } from "@/components/ui/confetti";
import { AuroraText } from "@/components/ui/aurora-text";
import { WordRotate } from "@/components/ui/word-rotate";
import { CardContainer } from "@/components/ui/3d-card";
import { Github } from 'lucide-react';
import { Crown } from 'lucide-react';

const HeroSection = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
            Craft your <AuroraText>Future</AuroraText>
            <br />
            with{" "}
            <span className="inline-flex items-center  style={{ minWidth: '11ch' }}">
              <WordRotate
                className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient "
                words={["AI.", "Passion.", "Confidence.", "Strategy."]}
              />
            </span>
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance Your Career with AI-Powered Guidance, Interview Prep & Job
            Success!
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <ConfettiButton>
            <Crown classname="h-4 w-4"/>
              <span>Get Started</span>
              </ConfettiButton>
          </Link>
          <Link href="https://github.com/Preet121106/FuturEd.git">
            <Button size="lg" variant="outline" className="px-8">
            <Github classname="h-4 w-4" />
            <span>Give a Star</span>
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper flex justify-center items-center !m-0 !p-0 !h-auto !min-h-0 overflow-hidden">
          <div ref={imageRef} className="hero-image max-w-4xl w-full !m-0 !p-0">
            <CardContainer className="inter-var !m-0 !p-0 overflow-hidden">
              <Image
                src="/Webinar-pana.png"
                width={2000}
                height={1107}
                className="w-full h-auto rounded-xl shadow-xl !m-0 !p-0"
                alt="thumbnail"
              />
            </CardContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
