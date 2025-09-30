import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Users, Clock, Star, MessageCircle, Headphones } from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import UniversityCoverageSection from "@/components/UniversityCoverageSection";
import TeacherTeamSection from "@/components/TeacherTeamSection";
import { useState } from "react";

const TutoringAssignment = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const assignmentTypes = [
    { name: "Individual Assignment", checked: true },
    { name: "Group Project", checked: true },
    { name: "Case Study", checked: true },
    { name: "Lab Report", checked: true },
    { name: "Presentation", checked: true }
  ];

  const products = [
    {
      title: "作业辅导卡",
      description: "基础作业指导，help学生掌握作业完成技巧",
      features: ["作业理解", "解题思路", "格式规范", "提交指导"],
      buttonText: "立即获取作业辅导方案"
    },
    {
      title: "作业稳Pass辅导 🔥",
      description: "全程1v1作业指导，确保作业质量和按时提交",
      features: ["1v1专业指导", "全程跟进", "质量保障", "按时完成"],
      buttonText: "立即获取作业稳Pass方案"
    }
  ];

  const guarantees = [
    { title: "质量保障", description: "确保作业质量达到要求标准", icon: Shield },
    { title: "按时完成", description: "严格按照截止时间完成作业", icon: Clock },
    { title: "原创保障", description: "确保作业原创性和学术诚信", icon: Star },
    { title: "专业指导", description: "相关专业导师一对一指导", icon: Users },
    { title: "修改服务", description: "提供作业修改和完善服务", icon: MessageCircle },
    { title: "24小时支持", description: "提供24小时在线答疑支持", icon: Headphones }
  ];

  const process = [
    { step: "1", title: "需求分析", description: "详细了解作业要求和难点" },
    { step: "2", title: "匹配专业导师", description: "精准匹配相关专业优秀导师" },
    { step: "3", title: "制定计划", description: "制定详细作业完成计划" },
    { step: "4", title: "1v1专业辅导", description: "导师一对一全程辅导指导" },
    { step: "5", title: "分步完成", description: "分阶段逐步完成作业内容" },
    { step: "6", title: "质量审核", description: "多维度质量检查和审核" },
    { step: "7", title: "格式规范", description: "确保格式规范符合要求" },
    { step: "8", title: "按时提交", description: "确保作业按时高质量提交" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-400 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">留学生作业辅导</h1>
            <p className="text-xl text-sky-100 mb-8">1v1作业指导，掌握解题思路，轻松应对各类作业！</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {assignmentTypes.map((type, index) => (
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
              立即咨询作业辅导
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">作业辅导产品</h2>
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
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">作业辅导服务保障</h2>
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
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">作业辅导全流程</h2>
          <p className="text-xl text-center text-gray-600 mb-16">从需求分析到按时提交，全程专业指导</p>
          
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

export default TutoringAssignment;