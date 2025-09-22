import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const TutoringCustom = () => {
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
    { title: "个性化定制", description: "完全根据学生需求定制方案" },
    { title: "专属导师团队", description: "配备专属的导师团队服务" },
    { title: "灵活时间安排", description: "根据学生时间灵活安排课程" },
    { title: "全程跟踪服务", description: "提供全程学习跟踪和反馈" },
    { title: "效果保障", description: "确保达到预期的学习效果" },
    { title: "VIP客服支持", description: "享受VIP级别的客服支持" }
  ];

  const process = [
    { step: "1", title: "深度咨询", description: "深入了解学生具体需求和目标" },
    { step: "2", title: "方案设计", description: "设计完全个性化的辅导方案" },
    { step: "3", title: "团队配置", description: "配置最适合的导师团队" },
    { step: "4", title: "实施辅导", description: "按照定制方案实施辅导" },
    { step: "5", title: "效果评估", description: "定期评估辅导效果并调整" },
    { step: "6", title: "持续优化", description: "持续优化方案确保最佳效果" }
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
      <section className="relative py-20 bg-gradient-to-br from-blue-100 to-sky-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">定制辅导服务</h1>
            <p className="text-xl text-gray-600 mb-8">完全个性化定制，专属导师团队，为您提供最适合的学术解决方案！</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {customTypes.map((type, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="font-medium text-gray-700">{type.name}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg font-medium rounded-full">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">定制服务保障</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">定制服务流程</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-sky-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TutoringCustom;