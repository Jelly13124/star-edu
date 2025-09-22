import { Card, CardContent } from "@/components/ui/card";
import { Star, Scale, Shield, TrendingUp, Users } from "lucide-react";

const AppealTeacherSection = () => {
  const teachers = [
    {
      name: "刘律师",
      title: "学术申诉专家",
      experience: "12年+申诉经验",
      speciality: "挂科申诉、学术争议",
      achievements: "成功申诉率90%+",
      rating: 5.0
    },
    {
      name: "赵顾问",
      title: "退学申诉导师",
      experience: "10年+专业经验",
      speciality: "退学申诉、学籍恢复",
      achievements: "帮助500+学生重返校园",
      rating: 4.9
    },
    {
      name: "周专家",
      title: "学术不端申诉师",
      experience: "15年+法律背景",
      speciality: "学术诚信、不端申诉",
      achievements: "处理300+复杂案例",
      rating: 5.0
    },
    {
      name: "孙导师",
      title: "专业变更申诉师",
      experience: "8年+教育咨询",
      speciality: "专业转换、申诉策略",
      achievements: "成功转专业200+案例",
      rating: 4.8
    }
  ];

  return (
    <section id="teacher-team-section" className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">金牌申诉导师</h2>
          <p className="text-xl text-gray-600">资深申诉专家，为您争取最佳结果</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-10 w-10 text-white" />
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
                    <Shield className="h-4 w-4 mr-2 text-sky-500" />
                    <span>{teacher.experience}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-sky-500" />
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
            <h3 className="text-xl font-bold text-gray-800 mb-4">申诉导师团队优势</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Scale className="h-6 w-6 text-sky-500" />
                </div>
                <p className="font-medium text-gray-800">专业权威</p>
                <p className="text-gray-600">具备法律教育背景</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6 text-sky-500" />
                </div>
                <p className="font-medium text-gray-800">成功率高</p>
                <p className="text-gray-600">申诉成功率90%+</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="h-6 w-6 text-sky-500" />
                </div>
                <p className="font-medium text-gray-800">经验丰富</p>
                <p className="text-gray-600">处理1000+申诉案例</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppealTeacherSection;