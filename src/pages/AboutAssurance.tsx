import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeacherTeamSection from "@/components/TeacherTeamSection";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Users, Clock3, FileCheck, Network, Award } from "lucide-react";

const AboutAssurance = () => {
  const assurances = [
    {
      title: "权威导师保障",
      description: "所有导师均来自全球 QS TOP100 高校，经过五轮面试、背景审查与教学试讲。",
      icon: Users
    },
    {
      title: "服务协议保障",
      description: "签署正式服务协议，明确辅导目标、时间节点与责任，确保权益清晰可追溯。",
      icon: FileCheck
    },
    {
      title: "进度透明保障",
      description: "建立专属学习档案，提供阶段性报告与实时沟通，学生可随时掌握学习进展。",
      icon: Network
    },
    {
      title: "时间响应保障",
      description: "7×24 小时顾问在线响应，紧急需求提供最快 2 小时内的导师对接与文稿反馈。",
      icon: Clock3
    },
    {
      title: "学术诚信保障",
      description: "严格遵守学术诚信原则，杜绝代写与任何违规操作，强调辅导与能力提升。",
      icon: ShieldCheck
    },
    {
      title: "效果评估保障",
      description: "提供阶段性成果评估与复盘，如未达成目标，可享受方案优化与增值补课服务。",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-emerald-50 via-white to-blue-100 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">学佑星途保障体系</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            我们以严谨的服务流程与完善的保障机制，为每一位留学生提供安心、透明且高效的学业支持体验。
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">六重保障体系</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {assurances.map((item, index) => (
              <Card key={index} className="border border-emerald-100 shadow-sm hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-50 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TeacherTeamSection />
      <Footer />
    </div>
  );
};

export default AboutAssurance;
