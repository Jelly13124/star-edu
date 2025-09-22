import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Users, Clock, Star, MessageCircle, Headphones } from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import { useState } from "react";

const AppealMajorChange = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const commonSituations = [
    "专业不符合兴趣方向",
    "就业前景考虑换专业",
    "学习困难需要转专业",
    "家庭期望专业调整",
    "跨学院专业转换",
    "国际学生专业适应"
  ];

  const processSteps = [
    { step: "1", title: "需求分析", description: "深入了解转专业的具体需求和动机" },
    { step: "2", title: "可行性评估", description: "评估目标专业转换的可行性" },
    { step: "3", title: "材料准备", description: "准备转专业申请所需的各类材料" },
    { step: "4", title: "申请文书", description: "撰写专业的转专业申请文书" },
    { step: "5", title: "面试辅导", description: "如需面试，提供专业面试辅导" },
    { step: "6", title: "申请提交", description: "指导完成转专业申请提交" },
    { step: "7", title: "结果跟进", description: "跟进申请结果并协助后续手续" }
  ];

  const guarantees = [
    { title: "专业规划", description: "资深顾问提供专业的学业规划", icon: Users },
    { title: "成功经验", description: "丰富的转专业成功案例经验", icon: Star },
    { title: "及时服务", description: "把握申请时机，及时提供服务", icon: Clock },
    { title: "全程指导", description: "从申请准备到结果全程指导", icon: MessageCircle },
    { title: "信息安全", description: "严格保护学生申请信息安全", icon: Shield },
    { title: "后续支持", description: "转专业成功后的适应性指导", icon: Headphones }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-400 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">换改专业申诉</h1>
            <p className="text-xl text-sky-100 mb-8">专业规划指导｜转专业申请｜学业发展规划</p>
            
            <Button 
              onClick={() => setDialogOpen(true)}
              className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 text-lg font-medium rounded-full transition-all shadow-lg"
            >
              点击获取转专业方案
            </Button>
          </div>
        </div>
      </section>

      {/* Common Situations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">转专业常见情况</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {commonSituations.map((situation, index) => (
              <Card key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-200 hover:shadow-lg transition-shadow">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">盲目坚持 vs 理性转换</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-red-50 border-2 border-red-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">盲目坚持后果</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    学习兴趣低下，成绩不佳
                  </li>
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    就业竞争力不足
                  </li>
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    浪费时间和教育投资
                  </li>
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    职业发展受限
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-sky-50 border-2 border-sky-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-sky-600 mb-6 text-center">理性转换收益</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    找到真正适合的专业方向
                  </li>
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    提升学习积极性和成绩
                  </li>
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    增强就业竞争优势
                  </li>
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    实现更好的职业发展
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">转专业申请流程</h2>
          <p className="text-xl text-center text-gray-600 mb-16">科学规划，成功转换专业方向</p>
          
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">服务保障</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
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
          <h2 className="text-3xl font-bold text-white mb-6">规划您的专业未来</h2>
          <p className="text-xl text-sky-100 mb-8">专业顾问团队，助您找到最适合的专业方向</p>
          <Button 
            onClick={() => setDialogOpen(true)}
            className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 text-lg font-medium rounded-full transition-all shadow-lg"
          >
            立即咨询转专业方案
          </Button>
        </div>
      </section>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <Footer />
    </div>
  );
};

export default AppealMajorChange;