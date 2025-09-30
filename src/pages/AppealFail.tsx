import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Users, Clock, Star, MessageCircle, Headphones } from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import UniversityCoverageSection from "@/components/UniversityCoverageSection";
import TeacherTeamSection from "@/components/TeacherTeamSection";
import SuccessCasesSection from "@/components/SuccessCasesSection";
import { useState } from "react";

const AppealFail = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const commonSituations = [
    "多门课程挂科",
    "课程/毕业论文挂科", 
    "补考再次挂科",
    "课程多次挂科",
    "差几分Pass",
    "必修课挂科"
  ];

  const processSteps = [
    { step: "1", title: "导师匹配", description: "匹配专业申诉导师，提供多对一申诉服务" },
    { step: "2", title: "收集信息", description: "收集详细信息，核查材料真实性" },
    { step: "3", title: "梳理材料", description: "专业导师梳理材料及申诉方案" },
    { step: "4", title: "方案产出", description: "整合申诉材料，出具方案初稿" },
    { step: "5", title: "撰写申诉信", description: "撰写申诉信，48h内出具申诉信" },
    { step: "6", title: "交付材料", description: "交付申诉信和最终材料沟通" },
    { step: "7", title: "定稿提交", description: "申诉老师指导线上申诉提交流程，确保按时提交成功" }
  ];

  const guarantees = [
    { title: "专业团队", description: "拥有丰富申诉经验的专业导师团队", icon: Users },
    { title: "成功率高", description: "历年申诉成功率达85%以上", icon: Star },
    { title: "快速响应", description: "48小时内出具申诉方案", icon: Clock },
    { title: "全程跟进", description: "专人跟进申诉全流程", icon: MessageCircle },
    { title: "保密安全", description: "严格保护学生隐私信息", icon: Shield },
    { title: "售后支持", description: "提供申诉后续跟踪服务", icon: Headphones }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-400 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">挂科申诉</h1>
            <p className="text-xl text-sky-100 mb-8">不放过每一分，argue改分｜无上限补考｜撤课消除记录</p>
            
            <Button 
              onClick={() => setDialogOpen(true)}
              className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 text-lg font-medium rounded-full transition-all shadow-lg"
            >
              点击领取免费申诉方案
            </Button>
          </div>
        </div>
      </section>

      {/* Common Situations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">挂科常见情况</h2>
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
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">不申诉 vs 申诉</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-red-50 border-2 border-red-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">不申诉后果</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    重修课程，浪费时间和金钱
                  </li>
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    影响学位等级和GPA
                  </li>
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    延迟毕业时间
                  </li>
                  <li className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    影响就业和升学机会
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
                    成功改分，提升成绩
                  </li>
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    保持良好的学术记录
                  </li>
                  <li className="flex items-center text-sky-700">
                    <Check className="w-5 h-5 text-sky-500 mr-3" />
                    按时毕业，节省成本
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
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">路觅申诉流程</h2>
          <p className="text-xl text-center text-gray-600 mb-16">获取你的定制申诉方案</p>
          
          <div className="max-w-7xl mx-auto">
            {/* Top Row - Steps 1-4 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {processSteps.slice(0, 4).map((step, index) => (
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
            
            {/* Bottom Row - Steps 5-7 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {processSteps.slice(4).map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-xl hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  {index < 2 && (
                    <ArrowRight className="hidden md:block absolute -right-4 top-8 w-8 h-8 text-blue-400" />
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
          <h2 className="text-3xl font-bold text-white mb-6">立即开始申诉流程</h2>
          <p className="text-xl text-sky-100 mb-8">专业团队助您成功申诉，挽回学术生涯</p>
          <Button 
            onClick={() => setDialogOpen(true)}
            className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 text-lg font-medium rounded-full transition-all shadow-lg"
          >
            立即咨询申诉方案
          </Button>
        </div>
      </section>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <SuccessCasesSection />
      <TeacherTeamSection />
      <UniversityCoverageSection />
      <Footer />
    </div>
  );
};

export default AppealFail;