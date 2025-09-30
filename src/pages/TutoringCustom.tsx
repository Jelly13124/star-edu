import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Users, Clock, Star, MessageCircle, Headphones } from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import UniversityCoverageSection from "@/components/UniversityCoverageSection";
import TeacherTeamSection from "@/components/TeacherTeamSection";
import { useState } from "react";

const TutoringCustom = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const customTypes = [
    { name: "个性化方案", checked: true },
    { name: "专业定制", checked: true },
    { name: "长期规划", checked: true },
    { name: "VIP服务", checked: true },
    { name: "一站式解决", checked: true }
  ];

  const products = [
    {
      title: "定制辅导方案",
      description: "根据学生具体需求定制个性化学习方案",
      features: ["需求分析", "方案定制", "专属导师", "灵活安排"],
      buttonText: "立即获取定制方案"
    },
    {
      title: "VIP定制服务 🔥",
      description: "全方位VIP定制服务，提供最高级别的学术支持",
      features: ["VIP专属服务", "24小时支持", "多导师团队", "全程保障"],
      buttonText: "立即获取VIP定制服务"
    }
  ];

  const guarantees = [
    { title: "个性化定制", description: "完全根据学生需求定制方案", icon: Star },
    { title: "专属导师团队", description: "配备专属的导师团队服务", icon: Users },
    { title: "灵活时间安排", description: "根据学生时间灵活安排课程", icon: Clock },
    { title: "全程跟踪服务", description: "提供全程学习跟踪和反馈", icon: MessageCircle },
    { title: "效果保障", description: "确保达到预期的学习效果", icon: Shield },
    { title: "VIP客服支持", description: "享受VIP级别的客服支持", icon: Headphones }
  ];

  const process = [
    { step: "1", title: "深度咨询", description: "深入了解学生具体需求和目标" },
    { step: "2", title: "方案设计", description: "设计完全个性化辅导方案" },
    { step: "3", title: "匹配专业导师", description: "精准匹配专业导师团队" },
    { step: "4", title: "团队配置", description: "配置最适合学生的导师组合" },
    { step: "5", title: "1v1专业辅导", description: "导师一对一深度个性化辅导" },
    { step: "6", title: "效果评估", description: "定期全面评估辅导效果" },
    { step: "7", title: "方案调整", description: "根据反馈及时调整优化" },
    { step: "8", title: "持续优化", description: "持续跟踪确保最佳效果" }
  ];

  const advantages = [
    {
      title: "完全个性化",
      description: "每个方案都是根据学生的具体情况和需求量身定制",
      icon: "🎯"
    },
    {
      title: "专业团队",
      description: "配备多领域专业导师，提供全方位的学术支持",
      icon: "👥"
    },
    {
      title: "灵活安排",
      description: "时间、地点、方式完全按照学生的需求灵活安排",
      icon: "⏰"
    },
    {
      title: "效果保障",
      description: "提供明确的效果保障，未达标准可调整或退款",
      icon: "✅"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-400 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">定制辅导服务</h1>
            <p className="text-xl text-sky-100 mb-8">完全个性化定制，专属导师团队，为您提供最适合的学术解决方案！</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {customTypes.map((type, index) => (
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
              立即咨询定制服务
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">定制辅导优势</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-sky-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">定制辅导产品</h2>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">定制服务保障</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow border border-gray-200">
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
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">定制服务流程</h2>
          <p className="text-xl text-center text-gray-600 mb-16">完全个性化定制，确保最佳学习效果</p>
          
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

export default TutoringCustom;