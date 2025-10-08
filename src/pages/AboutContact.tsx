import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import contactHero from "@/assets/tutor/F7010360@C60A6A7A.CB92DC68.jpeg";

const AboutContact = () => {
  const contactInfo = [
    {
      label: "官方微信",
      value: "ScholarGuardKoda",
      description: "添加时请备注“导师应聘 + 学校 + 专业”，我们会在 24 小时内与您联系。",
      icon: MessageCircle
    },
    {
      label: "邮箱",
      value: "mentor@scholarguard.com",
      description: "欢迎投递个人简历、教学经验与科研成果，审核通过后我们会安排面试。",
      icon: Mail
    },
    {
      label: "联系电话",
      value: "+44 20 1234 5678",
      description: "工作日 10:00-19:00 (GMT+0)，可提供导师招募与合作咨询服务。",
      icon: Phone
    }
  ];

  const steps = [
    {
      title: "提交资料",
      description: "发送简历、导师经历及可辅导科目，我们将进行背景审核。"
    },
    {
      title: "在线面试",
      description: "教研团队会根据学科安排试讲与面试，评估教学能力。"
    },
    {
      title: "签署合作",
      description: "通过审核后，签署导师合作协议与保密协议，正式加入团队。"
    },
    {
      title: "开始辅导",
      description: "匹配适合的学生需求，提供 1v1 专业辅导与阶段反馈。"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative bg-gradient-to-br from-amber-50 via-white to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">联系我们 · 加入导师团队</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              学佑星途欢迎全球优秀导师加入。我们提供完善的教研支持、透明的服务流程与丰厚的合作回报，携手为留学生提供高质量的学术辅导体验。
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full"
              onClick={() => window.open("https://weixin.qq.com/", "_blank")}
            >
              立即添加微信：ScholarGuardKoda
            </Button>
            <div className="mt-6 flex items-center text-sm text-gray-500 space-x-2">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>请务必通过官方渠道联系，保障个人信息与合作安全。</span>
            </div>
          </div>
          <div>
            <img
              src={contactHero}
              alt="联系我们"
              className="w-full rounded-3xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">联系我们</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border border-blue-100 shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-3">{item.value}</p>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">导师合作流程</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="border border-amber-100 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
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

export default AboutContact;
