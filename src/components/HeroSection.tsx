import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-hero-text text-6xl md:text-8xl font-bold leading-tight mb-8">
          留学生辅导
          <br />
          <span className="text-primary">学佑星途</span>
          <br />
          就是我们的专长
        </h1>
      </div>

      {/* Fixed sidebar with contact options */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-20 bg-lumiclass-yellow rounded-l-lg shadow-lg">
        <div className="flex flex-col p-2 space-y-2">
          <div className="bg-white rounded p-2 text-center text-xs font-medium">
            在线咨询
          </div>
          <div className="bg-white rounded p-2 text-center text-xs font-medium">
            课程预习
          </div>
          <div className="bg-white rounded p-2 text-center text-xs font-medium">
            同步辅导
          </div>
          <div className="bg-white rounded p-2 text-center text-xs font-medium">
            论文辅导
          </div>
          <div className="bg-white rounded p-2 text-center text-xs font-medium">
            申诉咨询
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;