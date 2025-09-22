import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Users, Clock, Star, MessageCircle, Headphones } from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import UniversityCoverageSection from "@/components/UniversityCoverageSection";
import { useState } from "react";

const AppealWithdrawal = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const commonSituations = [
    "因病休学被拒",
    "家庭紧急情况需退学",
    "学业压力导致退学",
    "签证问题被迫退学",
    "经济困难申请退学",
    "转校需要退学证明"
  ];

  const processSteps = [
    { step: "1", title: "案例评估", description: "专业团队评估退学申诉可行性" },
    { step: "2", title: "材料收集", description: "收集相关证明文件和支持材料" },
    { step: "3", title: "理由分析", description: "深入分析退学原因的合理性" },
    { step: "4", title: "申诉策略", description: "制定针对性申诉策略方案" },
    { step: "5", title: "文书撰写", description: "撰写专业申诉信和相关文件" },
    { step: "6", title: "提交申诉", description: "指导完成申诉材料提交流程" },
    { step: "7", title: "跟进处理", description: "全程跟进申诉结果和后续处理" }
  ];

  const guarantees = [
    { title: "专业指导", description: "资深申诉专家提供专业指导", icon: Users },
    { title: "成功案例", description: "丰富的退学申诉成功案例经验", icon: Star },
    { title: "快速处理", description: "紧急情况下加急处理申诉", icon: Clock },
    { title: "全程服务", description: "从申诉到结果全程专业服务", icon: MessageCircle },
    { title: "隐私保护", description: "严格保护学生个人隐私信息", icon: Shield },
    { title: "后续支持", description: "申诉后续手续办理指导服务", icon: Headphones }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-400 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">退学申诉</h1>
            <p className="text-xl text-sky-100 mb-8">合理退学申请｜保留学籍权利｜维护学生权益</p>
            
            <Button 
              onClick={() => setDialogOpen(true)}
              className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 text-lg font-medium rounded-full transition-all shadow-lg"
            >
              点击获取退学申诉方案
            </Button>
          </div>
        </div>
      </section>

      {/* Common Situations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">退学申诉常见情况</h2>
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
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">强制退学 vs 申诉成功</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-red-50 border-2 border-red-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">强制退学后果</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    失去继续学业的机会
                  </li>
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    学费损失无法挽回
                  </li>
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    留下不良学术记录
                  </li>
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    影响未来升学和就业
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-sky-50 border-2 border-sky-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-sky-600 mb-6 text-center">申诉成功</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    保留继续学习的权利
                  </li>
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    减少经济损失
                  </li>
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    维护良好学术记录
                  </li>
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    保障未来发展机会
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
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">退学申诉流程</h2>
          <p className="text-xl text-center text-gray-600 mb-16">专业团队助您合理维权</p>
          
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
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">申诉服务保障</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">维护您的学业权利</h2>
          <p className="text-xl text-sky-100 mb-8">专业申诉团队，为您争取最佳结果</p>
          <Button 
            onClick={() => setDialogOpen(true)}
            className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 text-lg font-medium rounded-full transition-all shadow-lg"
          >
            立即咨询申诉方案
          </Button>
        </div>
      </section>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <UniversityCoverageSection />
      <Footer />
    </div>
  );
};

export default AppealWithdrawal;