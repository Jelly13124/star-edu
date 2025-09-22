import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Users, Clock, Star, MessageCircle, Headphones } from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import UniversityCoverageSection from "@/components/UniversityCoverageSection";
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
    { step: "2", title: "制定计划", description: "制定个性化复习计划" },
    { step: "3", title: "知识梳理", description: "系统梳理考试重点知识" },
    { step: "4", title: "强化训练", description: "针对性强化训练练习" },
    { step: "5", title: "模拟考试", description: "真实环境模拟考试" },
    { step: "6", title: "考前冲刺", description: "考前最后冲刺指导" }
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">考试辅导全流程</h2>
          <div className="max-w-7xl mx-auto">
            {/* Phase 1 */}
            <div className="relative mb-20">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-sky-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                阶段一: 评估准备
              </div>
              
              <div className="flex flex-wrap justify-center items-start mt-12 space-x-8 space-y-8">
                <div className="flex flex-col items-center relative animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <div className="bg-gradient-to-br from-blue-500 to-sky-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-4">1</div>
                  <Card className="bg-gradient-to-br from-blue-50 to-sky-50 hover:shadow-xl transition-all duration-300 w-64 hover-scale">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">能力评估</h3>
                      <p className="text-gray-600 text-sm">全面评估学生当前学习水平</p>
                    </CardContent>
                  </Card>
                  <div className="absolute -right-16 top-8 hidden lg:block">
                    <svg width="120" height="60" viewBox="0 0 120 60" className="text-blue-500">
                      <path d="M 10 30 Q 60 10 110 30" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.7" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col items-center relative animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <div className="bg-gradient-to-br from-blue-500 to-sky-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-4">2</div>
                  <Card className="bg-gradient-to-br from-blue-50 to-sky-50 hover:shadow-xl transition-all duration-300 w-64 hover-scale">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">制定计划</h3>
                      <p className="text-gray-600 text-sm">制定个性化复习计划</p>
                    </CardContent>
                  </Card>
                  <div className="absolute -right-16 top-8 hidden lg:block">
                    <svg width="120" height="60" viewBox="0 0 120 60" className="text-blue-500">
                      <path d="M 10 30 Q 60 50 110 30" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.7" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col items-center relative animate-fade-in" style={{animationDelay: '0.5s'}}>
                  <div className="bg-gradient-to-br from-blue-500 to-sky-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-4">3</div>
                  <Card className="bg-gradient-to-br from-blue-50 to-sky-50 hover:shadow-xl transition-all duration-300 w-64 hover-scale">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">知识梳理</h3>
                      <p className="text-gray-600 text-sm">系统梳理考试重点知识</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-12">
              <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                <span className="text-sm font-medium">进入冲刺阶段</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-0 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                阶段二: 冲刺应考
              </div>
              
              <div className="flex flex-wrap justify-center items-start mt-12 space-x-8 space-y-8">
                <div className="flex flex-col items-center relative animate-fade-in" style={{animationDelay: '0.7s'}}>
                  <div className="bg-gradient-to-br from-sky-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-4">4</div>
                  <Card className="bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-xl transition-all duration-300 w-64 hover-scale">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">强化训练</h3>
                      <p className="text-gray-600 text-sm">针对性强化训练练习</p>
                    </CardContent>
                  </Card>
                  <div className="absolute -right-16 top-8 hidden lg:block">
                    <svg width="120" height="60" viewBox="0 0 120 60" className="text-sky-500">
                      <path d="M 10 30 Q 60 10 110 30" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.7" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col items-center relative animate-fade-in" style={{animationDelay: '0.9s'}}>
                  <div className="bg-gradient-to-br from-sky-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-4">5</div>
                  <Card className="bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-xl transition-all duration-300 w-64 hover-scale">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">模拟考试</h3>
                      <p className="text-gray-600 text-sm">真实环境模拟考试</p>
                    </CardContent>
                  </Card>
                  <div className="absolute -right-16 top-8 hidden lg:block">
                    <svg width="120" height="60" viewBox="0 0 120 60" className="text-sky-500">
                      <path d="M 10 30 Q 60 50 110 30" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.7" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col items-center relative animate-fade-in" style={{animationDelay: '1.1s'}}>
                  <div className="bg-gradient-to-br from-sky-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-4">6</div>
                  <Card className="bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-xl transition-all duration-300 w-64 hover-scale">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">考前冲刺</h3>
                      <p className="text-gray-600 text-sm">考前最后冲刺指导</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <UniversityCoverageSection />
      <Footer />
    </div>
  );
};

export default TutoringExam;