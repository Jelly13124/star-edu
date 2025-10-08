import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeacherTeamSection from "@/components/TeacherTeamSection";
import { Card, CardContent } from "@/components/ui/card";

const AboutJourney = () => {
  const milestones = [
    {
      year: "2016",
      title: "学佑星途创立",
      description: "在伦敦成立核心团队，聚焦英国高校留学生的学业辅导与申诉服务。"
    },
    {
      year: "2018",
      title: "服务区域扩展",
      description: "拓展至澳洲、美国与香港，团队导师覆盖全球 TOP100 名校。"
    },
    {
      year: "2020",
      title: "教研体系升级",
      description: "建立跨学科教研委员会，推出标准化课程体系与学习成功模型。"
    },
    {
      year: "2023",
      title: "全流程数字化",
      description: "引入数据化跟踪系统，实现学习进展、导师反馈、成果复盘的透明化管理。"
    }
  ];

  const values = [
    {
      title: "以学生为中心",
      description: "深入理解每位学生的背景、目标与挑战，提供高度个性化的全程服务方案。"
    },
    {
      title: "严选全球导师",
      description: "导师均来自世界名校，拥有丰富教学与科研经验，通过严格筛选与培训。"
    },
    {
      title: "诚信与保障",
      description: "遵循学术诚信与信息安全准则，以结果为导向提供透明、可追溯的服务流程。"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">走进学佑星途</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            学佑星途致力于为全球留学生提供专业的学业辅导与申诉支持，联合全球顶尖导师团队，帮助每一位学员稳步实现学术目标。
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">发展里程碑</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {milestones.map((item, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <span className="text-2xl font-semibold text-blue-500">{item.year}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">我们的价值观</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border border-blue-100 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
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

export default AboutJourney;
