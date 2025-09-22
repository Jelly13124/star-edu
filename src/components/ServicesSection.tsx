import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const tutoringServices = [
    "课程辅导", "作业辅导", "考试辅导", "论文辅导", 
    "毕业论文", "课程预习", "同步辅导", "考前辅导"
  ];

  const appealServices = [
    "挂科被退学", "学术不端", "非常规撤课", "挂科申诉", 
    "学位申诉", "必修课挂科被退学", "学术不端教授meeting", 
    "涉嫌学术不端", "被指控学术不端", "ai学术不端", 
    "停学复学申诉", "EC/SC申请", "学位提档"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Tutoring Services */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">辅</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">课程辅导</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {tutoringServices.map((service, index) => (
                <Card key={index} className="bg-service-card hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <span className="text-sm font-medium">{service}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Appeal Services */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-destructive/10 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center">
                  <span className="text-destructive-foreground font-bold text-lg">申</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">学业申诉</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {appealServices.map((service, index) => (
                <Card key={index} className="bg-service-card hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <span className="text-sm font-medium">{service}</span>
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