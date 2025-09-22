import { Card, CardContent } from "@/components/ui/card";
import { Star, BookOpen, Award, Users } from "lucide-react";

const TutoringTeacherSection = () => {
  const teachers = [
    {
      name: "王教授",
      title: "论文写作专家",
      experience: "10年+辅导经验",
      speciality: "学术写作、研究方法",
      achievements: "指导1000+学生成功完成论文",
      rating: 5.0
    },
    {
      name: "李博士",
      title: "数学统计导师",
      experience: "8年+教学经验",
      speciality: "数学、统计学、数据分析",
      achievements: "帮助800+学生提升成绩",
      rating: 4.9
    },
    {
      name: "张导师",
      title: "商科辅导专家",
      experience: "12年+行业经验",
      speciality: "商务管理、金融、会计",
      achievements: "成功辅导600+商科学生",
      rating: 5.0
    },
    {
      name: "陈教授",
      title: "工程技术导师",
      experience: "15年+专业经验",
      speciality: "计算机科学、工程学",
      achievements: "指导500+理工科学生",
      rating: 4.8
    }
  ];

  return (
    <section id="teacher-team-section" className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">金牌辅导导师</h2>
          <p className="text-xl text-gray-600">专业导师团队，1v1个性化辅导</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{teacher.name}</h3>
                <p className="text-sky-600 font-medium mb-2">{teacher.title}</p>
                
                <div className="flex items-center justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(teacher.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{teacher.rating}</span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <BookOpen className="h-4 w-4 mr-2 text-sky-500" />
                    <span>{teacher.experience}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Award className="h-4 w-4 mr-2 text-sky-500" />
                    <span className="text-center">{teacher.speciality}</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mt-3">{teacher.achievements}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">专业导师团队优势</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-sky-500" />
                </div>
                <p className="font-medium text-gray-800">专业匹配</p>
                <p className="text-gray-600">精准匹配专业导师</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-sky-500" />
                </div>
                <p className="font-medium text-gray-800">经验丰富</p>
                <p className="text-gray-600">平均10年+教学经验</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-sky-500" />
                </div>
                <p className="font-medium text-gray-800">成果显著</p>
                <p className="text-gray-600">95%学生成绩提升</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutoringTeacherSection;