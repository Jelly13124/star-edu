import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Users, Clock, Star, MessageCircle, Headphones } from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
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
    { step: "2", title: "导师匹配", description: "匹配相关专业的优秀导师" },
    { step: "3", title: "制定计划", description: "制定作业完成时间计划" },
    { step: "4", title: "指导完成", description: "全程指导作业完成过程" },
    { step: "5", title: "质量检查", description: "检查作业质量和格式规范" },
    { step: "6", title: "按时提交", description: "确保作业按时高质量提交" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-700 to-orange-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">留学生作业辅导</h1>
            <p className="text-xl text-amber-100 mb-8">1v1作业指导，掌握解题思路，轻松应对各类作业！</p>
            
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
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-800 px-8 py-3 text-lg font-medium rounded-full transition-all"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">作业辅导全流程</h2>
          <div className="max-w-7xl mx-auto">
            {/* Phase 1 */}
            <div className="relative mb-20">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-sky-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                阶段一: 需求分析
              </div>
              
              <div className="flex flex-wrap justify-center items-start mt-12 space-x-8 space-y-8">
                {/* Step 1 */}
                <div className="flex flex-col items-center relative animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <div className="bg-gradient-to-br from-blue-500 to-sky-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-4">
                    1
                  </div>
                  <Card className="bg-gradient-to-br from-blue-50 to-sky-50 hover:shadow-xl transition-all duration-300 w-64 hover-scale">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">需求分析</h3>
                      <p className="text-gray-600 text-sm">详细了解作业要求和难点</p>
                    </CardContent>
                  </Card>
                  {/* Curved connecting line */}
                  <div className="absolute -right-16 top-8 hidden lg:block">
                    <svg width="120" height="60" viewBox="0 0 120 60" className="text-blue-500">
                      <path d="M 10 30 Q 60 10 110 30" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.7" />
                    </svg>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center relative animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <div className="bg-gradient-to-br from-blue-500 to-sky-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-4">
                    2
                  </div>
                  <Card className="bg-gradient-to-br from-blue-50 to-sky-50 hover:shadow-xl transition-all duration-300 w-64 hover-scale">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">导师匹配</h3>
                      <p className="text-gray-600 text-sm">匹配相关专业的优秀导师</p>
                    </CardContent>
                  </Card>
                  <div className="absolute -right-16 top-8 hidden lg:block">
                    <svg width="120" height="60" viewBox="0 0 120 60" className="text-blue-500">
                      <path d="M 10 30 Q 60 50 110 30" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.7" />
                    </svg>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center relative animate-fade-in" style={{animationDelay: '0.5s'}}>
                  <div className="bg-gradient-to-br from-blue-500 to-sky-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-4">
                    3
                  </div>
                  <Card className="bg-gradient-to-br from-blue-50 to-sky-50 hover:shadow-xl transition-all duration-300 w-64 hover-scale">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">制定计划</h3>
                      <p className="text-gray-600 text-sm">制定作业完成时间计划</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Transition Arrow */}
            <div className="flex justify-center mb-12">
              <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                <span className="text-sm font-medium">进入执行阶段</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative">
              <div className="absolute top-0 left-0 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                阶段二: 执行完成
              </div>
              
              <div className="flex flex-wrap justify-center items-start mt-12 space-x-8 space-y-8">
                {/* Step 4 */}
                <div className="flex flex-col items-center relative animate-fade-in" style={{animationDelay: '0.7s'}}>
                  <div className="bg-gradient-to-br from-sky-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-4">
                    4
                  </div>
                  <Card className="bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-xl transition-all duration-300 w-64 hover-scale">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">指导完成</h3>
                      <p className="text-gray-600 text-sm">全程指导作业完成过程</p>
                    </CardContent>
                  </Card>
                  <div className="absolute -right-16 top-8 hidden lg:block">
                    <svg width="120" height="60" viewBox="0 0 120 60" className="text-sky-500">
                      <path d="M 10 30 Q 60 10 110 30" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.7" />
                    </svg>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col items-center relative animate-fade-in" style={{animationDelay: '0.9s'}}>
                  <div className="bg-gradient-to-br from-sky-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-4">
                    5
                  </div>
                  <Card className="bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-xl transition-all duration-300 w-64 hover-scale">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">质量检查</h3>
                      <p className="text-gray-600 text-sm">检查作业质量和格式规范</p>
                    </CardContent>
                  </Card>
                  <div className="absolute -right-16 top-8 hidden lg:block">
                    <svg width="120" height="60" viewBox="0 0 120 60" className="text-sky-500">
                      <path d="M 10 30 Q 60 50 110 30" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.7" />
                    </svg>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex flex-col items-center relative animate-fade-in" style={{animationDelay: '1.1s'}}>
                  <div className="bg-gradient-to-br from-sky-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-4">
                    6
                  </div>
                  <Card className="bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-xl transition-all duration-300 w-64 hover-scale">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">按时提交</h3>
                      <p className="text-gray-600 text-sm">确保作业按时高质量提交</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <Footer />
    </div>
  );
};

export default TutoringAssignment;