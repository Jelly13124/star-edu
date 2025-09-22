const SubjectCoverageSection = () => {
  const subjects = [
    { name: "Linguistics", icon: "📝", color: "bg-orange-100 text-orange-600" },
    { name: "Business Administration", icon: "💼", color: "bg-blue-100 text-blue-600" },
    { name: "Architectural Studies", icon: "🏛️", color: "bg-yellow-100 text-yellow-600" },
    { name: "Media and Communication", icon: "👥", color: "bg-purple-100 text-purple-600" },
    { name: "Sociology", icon: "🌿", color: "bg-green-100 text-green-600" },
    { name: "Laws", icon: "⚖️", color: "bg-gray-100 text-gray-600" },
    { name: "Management", icon: "👨‍💼", color: "bg-amber-100 text-amber-600" },
    { name: "Mathematics", icon: "🧮", color: "bg-cyan-100 text-cyan-600" },
    { name: "Computer Science", icon: "💻", color: "bg-indigo-100 text-indigo-600" },
    { name: "Civil Engineering", icon: "🏗️", color: "bg-stone-100 text-stone-600" },
    { name: "Accounting", icon: "📊", color: "bg-pink-100 text-pink-600" },
    { name: "Economics", icon: "💰", color: "bg-yellow-100 text-yellow-600" },
    { name: "Finance", icon: "📈", color: "bg-emerald-100 text-emerald-600" },
    { name: "Engineering", icon: "🔧", color: "bg-slate-100 text-slate-600" },
    { name: "Information Technology", icon: "💡", color: "bg-blue-100 text-blue-600" },
    { name: "Mechanical Engineering", icon: "⚙️", color: "bg-gray-100 text-gray-600" },
    { name: "Statistics", icon: "📊", color: "bg-red-100 text-red-600" },
    { name: "Biology", icon: "🧬", color: "bg-green-100 text-green-600" },
    { name: "Electrical and Electronic Engineering", icon: "⚡", color: "bg-blue-100 text-blue-600" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">全科目覆盖</h2>
          <p className="text-lg text-gray-600">
            学佑星途教育辅导涵盖32+个专业领域 数万节课程内容
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className={`${subject.color} px-4 py-3 rounded-full flex items-center space-x-2 hover:shadow-md transition-all duration-200 cursor-pointer`}
            >
              <span className="text-xl">{subject.icon}</span>
              <span className="font-medium text-sm">{subject.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectCoverageSection;