"use client";
import Banner from "@/components/Banner";
import ClientReviews from "@/components/ClientReview";
import Faqs from "@/components/Faqs";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import GetAnswer from "@/components/GetAnswer";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import ProcessSection from "@/components/ProcessSection";
import Services from "@/components/Services";
import TeamMember from "@/components/TeamMember";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Feature />
      <Portfolio />
      <ProcessSection />
      <ClientReviews />
      <TeamMember />
      <Faqs />
      <Footer />
    </>
  );
}
