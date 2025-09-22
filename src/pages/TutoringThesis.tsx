import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Users, Clock, Star, MessageCircle, Headphones } from "lucide-react";

const TutoringThesis = () => {
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
    { step: "2", title: "导师匹配", description: "匹配最适合的专业导师" },
    { step: "3", title: "制定方案", description: "制定个性化辅导计划" },
    { step: "4", title: "写作指导", description: "全程1v1论文写作指导" },
    { step: "5", title: "修改完善", description: "反复修改直至完美" },
    { step: "6", title: "答辩准备", description: "提供答辩技巧培训" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-100 to-sky-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">留学生论文辅导</h1>
            <p className="text-xl text-gray-600 mb-8">1v1论文写作指导，赶due不再慌，让你的论文脱颖而出！</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {thesisTypes.map((type, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="font-medium text-gray-700">{type.name}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg font-medium rounded-full">
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
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">论文稳Pass辅导全流程</h2>
          <div className="max-w-7xl mx-auto">
            {/* Phase 1 */}
            <div className="relative mb-20">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-sky-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                阶段一: 前期准备
              </div>
              
              <div className="flex flex-wrap justify-center items-start mt-12 space-x-8 space-y-8">
                <div className="flex flex-col items-center relative animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <div className="bg-gradient-to-br from-blue-500 to-sky-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-4">1</div>
                  <Card className="bg-gradient-to-br from-blue-50 to-sky-50 hover:shadow-xl transition-all duration-300 w-64 hover-scale">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">需求分析</h3>
                      <p className="text-gray-600 text-sm">深入了解论文要求和学生需求</p>
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
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">导师匹配</h3>
                      <p className="text-gray-600 text-sm">匹配最适合的专业导师</p>
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
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">制定方案</h3>
                      <p className="text-gray-600 text-sm">制定个性化辅导计划</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-12">
              <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                <span className="text-sm font-medium">进入写作阶段</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-0 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                阶段二: 论文写作
              </div>
              
              <div className="flex flex-wrap justify-center items-start mt-12 space-x-8 space-y-8">
                <div className="flex flex-col items-center relative animate-fade-in" style={{animationDelay: '0.7s'}}>
                  <div className="bg-gradient-to-br from-sky-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-4">4</div>
                  <Card className="bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-xl transition-all duration-300 w-64 hover-scale">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">写作指导</h3>
                      <p className="text-gray-600 text-sm">全程1v1论文写作指导</p>
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
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">修改完善</h3>
                      <p className="text-gray-600 text-sm">反复修改直至完美</p>
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
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">答辩准备</h3>
                      <p className="text-gray-600 text-sm">提供答辩技巧培训</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TutoringThesis;