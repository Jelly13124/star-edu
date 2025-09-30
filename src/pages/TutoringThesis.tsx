import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Users, Clock, Star, MessageCircle, Headphones } from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import UniversityCoverageSection from "@/components/UniversityCoverageSection";
import TeacherTeamSection from "@/components/TeacherTeamSection";
import { useState } from "react";

const TutoringThesis = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const thesisTypes = [
    { name: "Essay", checked: true },
    { name: "Report", checked: true },
    { name: "Project", checked: true },
    { name: "Proposal", checked: true },
    { name: "Dissertation", checked: true }
  ];

  const products = [
    {
      title: "论文辅导卡",
      description: "基础论文写作指导，适合初次接触学术写作的学生",
      features: ["写作指导", "结构梳理", "语法润色", "格式规范"],
      buttonText: "立即获取论文辅导方案"
    },
    {
      title: "论文稳Pass辅导 🔥",
      description: "全程1v1专业指导，确保论文质量达到通过标准",
      features: ["1v1专业指导", "全程跟进", "无限次修改", "通过保障"],
      buttonText: "立即获取论文稳Pass方案"
    }
  ];

  const guarantees = [
    { title: "课程结果保障", description: "未达目标分数按合同退款", icon: Shield },
    { title: "无限次批注修改", description: "论文修改至满意为止", icon: MessageCircle },
    { title: "协助对接教授", description: "帮助与导师有效沟通", icon: Users },
    { title: "进度专人跟进", description: "专属顾问全程跟踪", icon: Clock },
    { title: "答辩技巧模拟", description: "提供答辩培训指导", icon: Star },
    { title: "学术诚信保障", description: "严格遵守学术诚信原则", icon: Headphones }
  ];

  const process = [
    { step: "1", title: "需求分析", description: "深入了解论文要求和学生需求" },
    { step: "2", title: "匹配专业导师", description: "精准匹配相关专业TOP导师" },
    { step: "3", title: "制定方案", description: "制定个性化论文辅导计划" },
    { step: "4", title: "1v1专业辅导", description: "导师一对一深度辅导指导" },
    { step: "5", title: "写作执行", description: "分阶段完成论文各部分撰写" },
    { step: "6", title: "质量审核", description: "多轮质量检查和学术审核" },
    { step: "7", title: "修改完善", description: "根据反馈反复修改至完美" },
    { step: "8", title: "答辩准备", description: "专业答辩技巧培训和模拟" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-400 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">留学生论文辅导</h1>
            <p className="text-xl text-sky-100 mb-8">1v1论文写作指导，赶due不再慌，让你的论文脱颖而出！</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {thesisTypes.map((type, index) => (
                <div key={index} className="flex items-center space-x-2 text-white">
                  <div className="w-5 h-5 border-2 border-white rounded flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="font-medium">{type.name}</span>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={() => setDialogOpen(true)}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-800 px-8 py-3 text-lg font-medium rounded-full transition-all"
            >
              立即咨询论文辅导
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">论文辅导产品</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-sky-50 border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={() => setDialogOpen(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white w-full"
                  >
                    {product.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">论文稳Pass产品保障</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <guarantee.icon className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{guarantee.title}</h3>
                  <p className="text-gray-600 text-sm">{guarantee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">论文稳Pass辅导全流程</h2>
          <p className="text-xl text-center text-gray-600 mb-16">我们的专业团队将全程指导您完成高质量论文，确保每个环节都达到最佳标准</p>
          
          <div className="max-w-7xl mx-auto">
            {/* Top Row - Steps 1-4 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {process.slice(0, 4).map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-xl hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  {index < 3 && (
                    <ArrowRight className="hidden md:block absolute -right-4 top-8 w-8 h-8 text-blue-400" />
                  )}
                </div>
              ))}
            </div>
            
            {/* Bottom Row - Steps 5-8 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {process.slice(4).map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-xl hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  {index < 3 && (
                    <ArrowRight className="hidden md:block absolute -right-4 top-8 w-8 h-8 text-blue-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <TeacherTeamSection />
      <UniversityCoverageSection />
      <Footer />
    </div>
  );
};

export default TutoringThesis;