const TeacherTeamSection = () => {
  const teacherStats = [
    {
      title: "海外名校背景",
      subtitle: "TOP100名校毕业导师",
      percentage: "97.2%",
      description: "来自哈佛、耶鲁、牛津、剑桥等世界顶尖学府"
    },
    {
      title: "专业学科覆盖",
      subtitle: "涵盖主流专业领域",
      percentage: "32+",
      description: "商科、工科、理科、文科全方位学科支持"
    },
    {
      title: "教学经验丰富",
      subtitle: "平均教学经验",
      percentage: "5+年",
      description: "深谙海外教育体系，熟悉各类作业考试要求"
    },
    {
      title: "服务质量保证",
      subtitle: "学生满意度",
      percentage: "98.5%",
      description: "专业、耐心、负责的一对一定制化辅导"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">师资团队</h2>
          <p className="text-lg text-gray-600">
            汇聚全球顶尖名校毕业导师，为您提供专业的学术辅导服务
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teacherStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.percentage}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{stat.title}</h3>
                <p className="text-sm font-medium text-gray-600 mb-3">{stat.subtitle}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">我们的导师优势</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">🎓 学术背景优秀</h4>
                <p className="text-sm text-gray-600">毕业于世界顶尖大学，拥有深厚的学术功底和专业知识</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">🌍 海外学习经验</h4>
                <p className="text-sm text-gray-600">具有丰富的海外学习和生活经验，深度了解当地教育体系</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📚 教学方法专业</h4>
                <p className="text-sm text-gray-600">针对不同学生特点，制定个性化学习方案和辅导策略</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherTeamSection;