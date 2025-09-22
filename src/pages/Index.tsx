import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SubjectCoverageSection from "@/components/SubjectCoverageSection";
import TeacherTeamSection from "@/components/TeacherTeamSection";
import PublicitySection from "@/components/PublicitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <SubjectCoverageSection />
      <TeacherTeamSection />
      <PublicitySection />
      <Footer />
    </div>
  );
};

export default Index;