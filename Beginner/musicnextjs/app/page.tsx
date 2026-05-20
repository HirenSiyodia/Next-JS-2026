import FeaturedCourses from "@/components/ui/FeaturedCourses";
import HeroSection from "@/components/ui/HeroSection";
import TestimonialCards from "@/components/ui/TestimonialCards";
import WhyChooseUs from "@/components/ui/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/0.96 antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedCourses/>
    <TestimonialCards/>
    <WhyChooseUs/>
    </main>
  );
}
