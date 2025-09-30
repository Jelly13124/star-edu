import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Users, Clock, Star, MessageCircle, Headphones } from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import UniversityCoverageSection from "@/components/UniversityCoverageSection";
import TeacherTeamSection from "@/components/TeacherTeamSection";
import { useState } from "react";

const TutoringExam = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const examTypes = [
    { name: "期中考试", checked: true },
    { name: "期末考试", checked: true },
    { name: "Quiz", checked: true },
    { name: "Mock Exam", checked: true },
    { name: "Online Test", checked: true }
  ];

  const products = [
    {
      title: "考试辅导卡",
      description: "基础考试复习指导，帮助学生掌握考试技巧",
      features: ["知识点梳理", "考试技巧", "模拟练习", "答题策略"],
      buttonText: "立即获取考试辅导方案"
    },
    {
      title: "考试冲刺辅导 🔥",
      description: "考前集中冲刺，1v1专业指导确保考试通过",
      features: ["1v1冲刺指导", "重点突破", "真题练习", "通过保障"],
      buttonText: "立即获取考试冲刺方案"
    }
  ];

  const guarantees = [
    { title: "成绩保障", description: "未达目标分数按合同退款", icon: Shield },
    { title: "专业导师", description: "相关专业TOP100导师指导", icon: Users },
    { title: "个性化方案", description: "根据学生情况定制复习计划", icon: Star },
    { title: "全程跟进", description: "专属顾问全程跟踪进度", icon: Clock },
    { title: "真题练习", description: "提供历年真题和模拟试题", icon: MessageCircle },
    { title: "答题技巧", description: "传授专业答题技巧和策略", icon: Headphones }
  ];

  const process = [
    { step: "1", title: "能力评估", description: "全面评估学生当前学习水平" },
    { step: "2", title: "匹配专业导师", description: "精准匹配考试科目专业导师" },
    { step: "3", title: "制定计划", description: "制定个性化复习备考计划" },
    { step: "4", title: "1v1专业辅导", description: "导师一对一系统知识梳理" },
    { step: "5", title: "强化训练", description: "针对性强化训练和真题练习" },
    { step: "6", title: "模拟考试", description: "真实环境全真模拟考试" },
    { step: "7", title: "查漏补缺", description: "针对薄弱环节专项突破" },
    { step: "8", title: "考前冲刺", description: "考前最后冲刺和答题技巧" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-400 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">留学生考试辅导</h1>
            <p className="text-xl text-sky-100 mb-8">1v1考试冲刺指导，掌握答题技巧，轻松应对各类考试！</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {examTypes.map((type, index) => (
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
              立即咨询考试辅导
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">考试辅导产品</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:shadow-lg transition-shadow">
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
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">考试辅导服务保障</h2>
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
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">考试辅导全流程</h2>
          <p className="text-xl text-center text-gray-600 mb-16">系统化复习方案，助您轻松应考</p>
          
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

export default TutoringExam;