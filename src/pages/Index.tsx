import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SubjectCoverageSection from "@/components/SubjectCoverageSection";
import TeacherTeamSection from "@/components/TeacherTeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <SubjectCoverageSection />
      <TeacherTeamSection />
      <Footer />
    </div>
  );
};

export default Index;