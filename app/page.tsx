"use client";
import Hero from "./hero-section/Hero";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";
import { ScrollerMotion } from "scroller-motion";
import PreLoader from "./animations/PreLoader/PreLoader";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import NavBar from "./navbar/NavBar";
import Work from "./work-section/Work";
import About from "./about-section/About";
import Blog from "./blog-section/BlogGrid";
import Contact from "./contact-section/Contact";
import Footer from "./footer/Footer";
import Reviews from "./reviews-section/ReviewGrid";
import { useRouter } from 'next/navigation';
import { resetPageAnimations } from './utils/animationReset';

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);
  const router = useRouter();

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });

    // Reset animations on mount
    resetPageAnimations();
  }, []);

  const handleClose = () => {
    if (window.opener !== null) {
      window.close();
    } else {
      // Redirect to home page
    //  router.push('/');
    }
  };

  return (
    <>
      <PreLoader />
      <NavBar />
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <Work />
        <Reviews/>
        <About />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
