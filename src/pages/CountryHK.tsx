import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hkHero from "@/assets/hk-hero.jpg";

const CountryHK = () => {
  const stats = [
    { number: "50+", label: "香港院校覆盖", description: "港三校及其他知名院校全覆盖" },
    { number: "300+", label: "香港导师团队", description: "港大、中大、科大等名校背景" },
    { number: "98.2%", label: "通过率", description: "专业课程辅导通过率" }
  ];

  const services = [
    { title: "课程辅导", description: "涵盖本科、硕士、博士各阶段" },
    { title: "论文辅导", description: "从选题到最终定稿的全程指导" },
    { title: "考试辅导", description: "期中期末考试冲刺辅导" },
    { title: "学术申诉", description: "处理挂科、抄袭等学术问题" }
  ];

  const guarantees = [
    { title: "合同保障", description: "未达目标分数，按合同极速退款" },
    { title: "更换导师", description: "对导师不满意，无条件更换" },
    { title: "课程试听", description: "首节课不满意，全额退款" },
    { title: "信息保密", description: "对学生所有信息，严格保密" },
    { title: "消费透明", description: "辅导费用清晰透明，无隐性消费" },
    { title: "成果反馈", description: "全程跟踪反馈，确保好成绩" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hkHero})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6">香港留学</h1>
          <p className="text-2xl mb-8">一站式学业辅导</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
            立即咨询
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">香港院校辅导服务</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-500 mb-4">{stat.number}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">香港留学辅导服务</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">为什么选择学佑星途</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CountryHK;