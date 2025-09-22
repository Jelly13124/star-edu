import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const tutoringServices = [
    "课程辅导", "作业辅导", "考试辅导", "论文辅导", 
    "毕业论文", "课程预习", "同步辅导", "考前辅导"
  ];

  const appealServices = [
    "挂科被退学", "学术不端", "非常规撤课", "挂科申诉",
    "学位申诉", "必修课挂科被退学", "学术不端教授meeting", "涉嫌学术不端",
    "被指控学术不端", "ai学术不端", "停学复学申诉", "EC/SC申请",
    "学位提档"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {/* Tutoring Services */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">课程辅导</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {tutoringServices.map((service, index) => (
                <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <span className="text-base font-medium text-gray-700">{service}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Appeal Services */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">学业申诉</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {appealServices.map((service, index) => (
                <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <span className="text-base font-medium text-gray-700">{service}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;