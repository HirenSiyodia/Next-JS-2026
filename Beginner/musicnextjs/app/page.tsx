import FeaturedCourses from "@/components/ui/FeaturedCourses";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/HeroSection";
import Instructors from "@/components/ui/Instructors";
import TestimonialCards from "@/components/ui/TestimonialCards";
import UpcomingWebinars from "@/components/ui/UpcomingWebinars";
import WhyChooseUs from "@/components/ui/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/0.96 antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedCourses/>
    <TestimonialCards/>
    <WhyChooseUs/>
    <UpcomingWebinars/>
    <Instructors/>
    <Footer/>
    </main>
  );
}
