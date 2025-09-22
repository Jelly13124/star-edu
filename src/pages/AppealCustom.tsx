import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Users, Clock, Star, MessageCircle, Headphones } from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import { useState } from "react";

const AppealCustom = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const commonSituations = [
    "特殊情况申诉需求",
    "多重问题组合申诉",
    "复杂案例处理",
    "特殊时间要求",
    "高难度申诉案件",
    "个性化申诉方案"
  ];

  const processSteps = [
    { step: "1", title: "深度咨询", description: "一对一深度咨询，了解具体情况" },
    { step: "2", title: "案例分析", description: "专业团队深入分析案例复杂度" },
    { step: "3", title: "定制方案", description: "制定完全个性化的申诉策略" },
    { step: "4", title: "资源配置", description: "配置最适合的专业团队资源" },
    { step: "5", title: "材料制作", description: "制作高质量的申诉材料文件" },
    { step: "6", title: "策略执行", description: "执行定制化申诉策略方案" },
    { step: "7", title: "全程跟踪", description: "专人全程跟踪申诉进展情况" }
  ];

  const guarantees = [
    { title: "个性定制", description: "100%个性化定制申诉解决方案", icon: Star },
    { title: "专家团队", description: "顶级申诉专家团队一对一服务", icon: Users },
    { title: "灵活服务", description: "根据紧急程度灵活调整服务", icon: Clock },
    { title: "全程陪伴", description: "专属顾问全程陪伴申诉过程", icon: MessageCircle },
    { title: "绝对保密", description: "最高级别的隐私保护措施", icon: Shield },
    { title: "无限支持", description: "提供无限次咨询和修改服务", icon: Headphones }
  ];

  const advantages = [
    {
      title: "完全个性化",
      description: "每个申诉方案都是根据学生的具体情况量身定制",
      icon: "🎯"
    },
    {
      title: "专家级团队",
      description: "配备多领域顶级专家，提供最专业的申诉服务",
      icon: "👥"
    },
    {
      title: "灵活时间",
      description: "根据案件紧急程度和客户需求灵活安排时间",
      icon: "⏰"
    },
    {
      title: "成功保障",
      description: "提供最高级别的申诉成功保障承诺",
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
            <h1 className="text-5xl font-bold text-white mb-6">定制申诉</h1>
            <p className="text-xl text-sky-100 mb-8">专属定制方案｜顶级专家团队｜最高成功保障</p>
            
            <Button 
              onClick={() => setDialogOpen(true)}
              className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 text-lg font-medium rounded-full transition-all shadow-lg"
            >
              点击获取定制申诉方案
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">定制申诉优势</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-200 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Situations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">定制申诉适用情况</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {commonSituations.map((situation, index) => (
              <Card key={index} className="bg-white border-2 border-sky-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{situation}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">标准服务 vs 定制服务</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gray-50 border-2 border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-600 mb-6 text-center">标准申诉服务</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                    固定流程和模板
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                    有限的个性化定制
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                    标准时间安排
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                    基础成功保障
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-sky-50 border-2 border-sky-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-sky-600 mb-6 text-center">定制申诉服务</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    完全个性化定制方案
                  </li>
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    顶级专家团队服务
                  </li>
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    灵活时间安排
                  </li>
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    最高级别成功保障
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">定制申诉流程</h2>
          <p className="text-xl text-center text-gray-600 mb-16">专属定制，精准高效</p>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-6 h-6 text-sky-500 mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">VIP服务保障</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <guarantee.icon className="h-8 w-8 text-sky-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{guarantee.title}</h3>
                  <p className="text-gray-600 text-sm">{guarantee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-sky-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">专属定制，专业保障</h2>
          <p className="text-xl text-sky-100 mb-8">顶级团队为您量身打造最适合的申诉方案</p>
          <Button 
            onClick={() => setDialogOpen(true)}
            className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 text-lg font-medium rounded-full transition-all shadow-lg"
          >
            立即咨询定制申诉服务
          </Button>
        </div>
      </section>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <Footer />
    </div>
  );
};

export default AppealCustom;