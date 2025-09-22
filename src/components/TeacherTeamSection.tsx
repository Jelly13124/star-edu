const TeacherTeamSection = () => {
  const teachers = [
    {
      name: "Amy Qian",
      title: "本科编桥",
      university: "剑桥大学",
      specialty: "数学物理、法律、商业经济学",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Yiming Li", 
      title: "本科UCLA 博士斯坦福",
      university: "斯坦福大学",
      specialty: "数理方面、心理学、商业分析",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Riko",
      title: "本科帝国理工",
      university: "帝国理工学院",
      specialty: "医学、数理科学、人工智能及数据分析",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Zhao Shunan",
      title: "本科牛津",
      university: "牛津大学",
      specialty: "生物医、法律经济学及社会科学等",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Wesley",
      title: "本科对外经济贸易比较大学",
      university: "对外经济贸易大学",
      specialty: "金融经济学类、法律经济学",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Vivian Chao",
      title: "本科及硕士东京大学、博士研大学",
      university: "东京大学",
      specialty: "医学、心理、政务、历史学",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Jessie",
      title: "本科威威威威大学 硕士斯坦福",
      university: "斯坦福大学",
      specialty: "密码学、历史、心理学、哲学",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Peter Chen",
      title: "本科案宗、硕士UCL",
      university: "伦敦大学学院",
      specialty: "经济统金融法、天体文献大学",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">路觅导师团队</h2>
          <p className="text-lg text-gray-600">
            汇聚全球顶尖名校毕业导师，为您提供专业的学术辅导服务
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-1">{teacher.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{teacher.title}</p>
                <p className="text-sm font-medium text-blue-600 mb-2">{teacher.university}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{teacher.specialty}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
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