import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PublicitySection from "@/components/PublicitySection";
import SubjectCoverageSection from "@/components/SubjectCoverageSection";
import UniversityCoverageSection from "@/components/UniversityCoverageSection";
import TeacherTeamSection from "@/components/TeacherTeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <PublicitySection />
      <SubjectCoverageSection />
      <UniversityCoverageSection />
      <TeacherTeamSection />
      <Footer />
    </div>
  );
};

export default Index;