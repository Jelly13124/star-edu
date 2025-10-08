import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import ConsultationDialog from "@/components/ConsultationDialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import tutor images
import tutor1 from "@/assets/tutor/31CDFD30@03DDAD3B.CB92DC68.jpeg";
import tutor2 from "@/assets/tutor/5E663886@DB20ED5E.CB92DC68.png";
import tutor3 from "@/assets/tutor/C7D02A3D@BAD1F124.CB92DC68.jpeg";
import tutor4 from "@/assets/tutor/C8B309FA@1B1B8A1B.CB92DC68.png";
import tutor5 from "@/assets/tutor/D235BC2C@366F8761.CB92DC68.jpeg";
import tutor6 from "@/assets/tutor/F7010360@C60A6A7A.CB92DC68.jpeg";
import tutor7 from "@/assets/tutor/F7310263@229A9139.CB92DC68.jpeg";

const TeacherTeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= teachers.length - 6 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, teachers.length - 6) : prevIndex - 1
    );
  };
  const teachers = [
    {
      name: "Peter Chen",
      title: "本科曼大, 硕士UCL",
      university: "曼彻斯特大学 & UCL",
      specialty: "擅长科目: 经济类和金融类, 英文学术论文等",
      image: tutor1,
      flag: "🇺🇰"
    },
    {
      name: "Jerry",
      title: "硕士纽约大学",
      university: "New York University",
      specialty: "擅长科目: 基础编程等",
      image: tutor2,
      flag: "🇺🇸"
    },
    {
      name: "Yiming Li", 
      title: "本科UCLA 博士斯坦福",
      university: "UCLA & Stanford University",
      specialty: "擅长科目: 数理方面、心理学、商业分析",
      image: tutor3,
      flag: "🇺🇸"
    },
    {
      name: "Riko",
      title: "本科帝国理工",
      university: "Imperial College London",
      specialty: "擅长科目: 医学、数理科学、人工智能及数据分析",
      image: tutor4,
      flag: "🇺🇰"
    },
    {
      name: "Wesley",
      title: "本科对外经济贸易大学",
      university: "University of International Business and Economics",
      specialty: "擅长科目: 金融经济学类、法律经济学",
      image: tutor5,
      flag: "🇨🇳"
    },
    {
      name: "Vivian Chao",
      title: "本科及硕士东京大学",
      university: "University of Tokyo",
      specialty: "擅长科目: 医学、心理学、政治学、历史学",
      image: tutor6,
      flag: "🇯🇵"
    },
    {
      name: "Alex Chen",
      title: "本科MIT 硕士哈佛",
      university: "MIT & Harvard University",
      specialty: "擅长科目: 计算机科学、人工智能、数据科学",
      image: tutor7,
      flag: "🇺🇸"
    },
    {
      name: "Sarah Kim",
      title: "本科首尔大学 硕士东京大学",
      university: "Seoul National University & University of Tokyo",
      specialty: "擅长科目: 商学、经济学、管理学",
      image: tutor1,
      flag: "🇰🇷"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="teacher-team-section" 
      className={`py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">学佑星途导师团队</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            汇聚全球顶尖名校毕业导师，为您提供专业的学术辅导服务
          </p>
        </div>
        
        {/* Teachers Carousel */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border border-gray-200 rounded-full w-12 h-12 p-0"
            size="sm"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </Button>
          
          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border border-gray-200 rounded-full w-12 h-12 p-0"
            size="sm"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </Button>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 16.67}%)`,
                width: `${teachers.length * 16.67}%`
              }}
            >
              {teachers.map((teacher, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-3"
                  style={{ width: '16.67%' }}
                >
                  <div 
                    className={`group relative perspective-1000 ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-6'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                      transitionDuration: '600ms'
                    }}
                  >
                    {/* Flip Card Container */}
                    <div className="relative w-full h-64 preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                      {/* Front Side - Teacher Photo */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg">
                        <div className="relative h-full">
                          <img 
                            src={teacher.image} 
                            alt={teacher.name}
                            className="w-full h-full object-cover"
                          />
                          {/* Flag Badge */}
                          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-sm shadow-md">
                            {teacher.flag}
                          </div>
                          {/* Name Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <h3 className="text-lg font-bold text-white">{teacher.name}</h3>
                          </div>
                        </div>
                      </div>

                      {/* Back Side - Teacher Details */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-600 to-blue-800">
                        <div className="p-4 h-full flex flex-col justify-between text-white">
                          <div>
                            <h3 className="text-lg font-bold mb-2">{teacher.name}</h3>
                            <p className="text-blue-200 text-sm mb-2 font-medium">{teacher.title}</p>
                            <p className="text-blue-100 text-xs mb-3">{teacher.university}</p>
                          </div>
                          <div className="text-xs leading-relaxed text-blue-50">
                            {teacher.specialty}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.max(1, teachers.length - 5) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Stats and Features */}
        <div className="text-center">
          <div 
            className={`bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl p-16 shadow-2xl max-w-7xl mx-auto border border-blue-100 relative overflow-hidden transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: '800ms',
              transitionDuration: '800ms'
            }}
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-green-200/30 to-blue-200/30 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">我们的导师优势</h3>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                汇聚全球顶尖名校导师，为您的学术成功保驾护航
              </p>
              
              <div className="grid md:grid-cols-3 gap-10 mb-12">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                      </div>
                      <div className="w-2 h-2 bg-sky-500 rounded-full absolute -ml-2"></div>
                      <div className="w-2 h-2 bg-sky-500 rounded-full absolute ml-2"></div>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">专业匹配</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">精准匹配专业导师</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center">
                      <div className="w-8 h-6 bg-white rounded-sm flex flex-col justify-between p-1">
                        <div className="w-full h-1 bg-sky-500 rounded"></div>
                        <div className="w-full h-1 bg-sky-500 rounded"></div>
                        <div className="w-full h-1 bg-sky-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">经验丰富</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">平均10年+教学经验</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-sky-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">成果显著</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">95%学生成绩提升</p>
                </div>
              </div>

              {/* Contact Button */}
              <div className="flex justify-center">
                <Button 
                  onClick={() => setIsDialogOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  size="lg"
                >
                  联系导师
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Consultation Dialog */}
      <ConsultationDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </section>
  );
};

export default TeacherTeamSection;