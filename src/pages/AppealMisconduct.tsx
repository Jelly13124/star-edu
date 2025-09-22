import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Users, Clock, Star, MessageCircle, Headphones } from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import UniversityCoverageSection from "@/components/UniversityCoverageSection";
import TeacherTeamSection from "@/components/TeacherTeamSection";
import { useState } from "react";

const AppealMisconduct = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const commonSituations = [
    "论文抄袭被指控",
    "考试作弊指控",
    "作业雷同被质疑",
    "引用不当问题",
    "学术合作争议",
    "研究数据争议"
  ];

  const processSteps = [
    { step: "1", title: "紧急评估", description: "紧急评估学术不端指控的严重性" },
    { step: "2", title: "证据收集", description: "全面收集有利证据和相关材料" },
    { step: "3", title: "专业分析", description: "学术专家分析指控的合理性" },
    { step: "4", title: "辩护策略", description: "制定专业的学术申诉辩护策略" },
    { step: "5", title: "申诉文书", description: "撰写专业的学术申诉辩护文书" },
    { step: "6", title: "听证准备", description: "如需听证会，进行充分准备辅导" },
    { step: "7", title: "结果跟踪", description: "跟踪申诉结果和后续影响处理" }
  ];

  const guarantees = [
    { title: "专业律师", description: "学术法律专家提供专业指导", icon: Users },
    { title: "紧急响应", description: "24小时内响应紧急申诉需求", icon: Clock },
    { title: "保密处理", description: "严格保密，保护学生声誉", icon: Shield },
    { title: "专业辩护", description: "基于事实的专业学术辩护", icon: Star },
    { title: "全程陪同", description: "听证会全程专业人员陪同", icon: MessageCircle },
    { title: "后续跟进", description: "申诉后学术记录修复指导", icon: Headphones }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-400 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">学术不端申诉</h1>
            <p className="text-xl text-sky-100 mb-8">专业辩护｜证据收集｜学术权益维护｜声誉保护</p>
            
            <Button 
              onClick={() => setDialogOpen(true)}
              className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 text-lg font-medium rounded-full transition-all shadow-lg"
            >
              紧急申诉咨询
            </Button>
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="py-8 bg-red-50 border-l-4 border-red-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-red-700 font-medium">
                  学术不端指控时效性很重要！收到指控通知后请尽快联系我们，争取最佳申诉时机。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Situations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">学术不端常见情况</h2>
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
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">认罪认罚 vs 专业申诉</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-red-50 border-2 border-red-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">认罪认罚后果</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    永久学术不端记录
                  </li>
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    面临停学或开除处分
                  </li>
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    严重影响未来发展
                  </li>
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    个人声誉受损
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-sky-50 border-2 border-sky-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-sky-600 mb-6 text-center">专业申诉成功</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    撤销或减轻指控
                  </li>
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    保持良好学术记录
                  </li>
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    继续学业和发展
                  </li>
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    维护个人声誉
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
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">学术申诉流程</h2>
          <p className="text-xl text-center text-gray-600 mb-16">专业团队，为您的学术清白而战</p>
          
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
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">专业服务保障</h2>
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

      {/* Important Notice */}
      <section className="py-12 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">重要提醒</h3>
            <p className="text-gray-600 leading-relaxed">
              学术不端指控是非常严重的事件，可能影响您的整个学术和职业生涯。
              我们建议您在收到任何相关通知后立即寻求专业帮助，不要轻易承认或签署任何文件。
              我们的专业团队将为您提供全面的法律和学术支持，最大化您的申诉成功机会。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-sky-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">捍卫您的学术清白</h2>
          <p className="text-xl text-sky-100 mb-8">专业申诉团队，为您的权益而战</p>
          <Button 
            onClick={() => setDialogOpen(true)}
            className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 text-lg font-medium rounded-full transition-all shadow-lg"
          >
            立即申诉咨询
          </Button>
        </div>
      </section>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <TeacherTeamSection />
      <UniversityCoverageSection />
      <Footer />
    </div>
  );
};

export default AppealMisconduct;