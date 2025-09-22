import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, User, FileCheck, Award, Lock, Target, FileText, Users, RefreshCw, CheckCircle, AlertCircle } from "lucide-react";

const PublicitySection = () => {

  const stats = [
    {
      number: "1,278所",
      label: "服务覆盖全球校区数",
      description: "*数据来源：截至2025年3月31日历史用户数据"
    },
    {
      number: "8,276",
      label: "全球导师人数",
      description: "遍布世界各大知名学府"
    },
    {
      number: "97.20%",
      label: "全球TOP100高校导师占比",
      description: "确保最优质的教学质量"
    }
  ];

  const studyingServices = [
    { name: "课程指导", description: "课程规划合理安排，无压按课业" },
    { name: "专业课预习", description: "提前预习知识要点，轻松一学" },
    { name: "课业同步辅导", description: "课程进度保持学习，及时解决课堂疑点" },
    { name: "作业讲解辅导", description: "专项讲解深度解析，扎实基础理解要点" },
    { name: "考试冲刺辅导", description: "知识点训练提升，冲刺高分答题技巧配合" },
    { name: "安心学Max", description: "分数导向深度定制，好成绩有保障" }
  ];

  const appealServices = [
    "一对一不挂", "保学复学申请", "EC/SC申请", "学位提档", "挂科救援",
    "论文托科", "一考二升三学", "申诉顺利补考机会", "补考保过",
    "ECON", "review分数", "学术不端怎么办", "论文印刷错误DDL", "补考机会"
  ];

  const guarantees = [
    { icon: Shield, title: "师资保障", subtitle: "学历背景真实可查", description: "从严筛选导师资质" },
    { icon: Clock, title: "时效保障", subtitle: "客服用规范高标准", description: "响应及时，不过期" },
    { icon: User, title: "个性化定制", subtitle: "根据学生个体需求", description: "定制提高培优方案" },
    { icon: FileCheck, title: "审核保障", subtitle: "自然流言第三方反馈", description: "确认、联系等保证正确" },
    { icon: Award, title: "全职导师", subtitle: "全职专业师资团队", description: "保障授课和学习督导质量" },
    { icon: Lock, title: "信息保障", subtitle: "严格个人信息保护制度", description: "保障隐私，不外露" },
    { icon: Target, title: "目标追踪", subtitle: "学习进度全程跟踪", description: "确保学习目标实现" },
    { icon: FileText, title: "合同保障", subtitle: "所有服务签订正式合同", description: "维护双方合法权益" },
    { icon: Users, title: "独家导师", subtitle: "专属一对一专业指导", description: "全程教授学术性辅导及教学" },
    { icon: AlertCircle, title: "申诉保障", subtitle: "全程协力、清楚", description: "增加申诉材料及会议参与" },
    { icon: CheckCircle, title: "流程完善", subtitle: "流程温馨完善，无死角", description: "服务流程标准化管理" },
    { icon: RefreshCw, title: "退费保障", subtitle: "不合教育目标，无条件", description: "实行退费，零风险" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">{stat.number}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</h3>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Country Coverage Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">覆盖院校/地区</h2>
          <div className="flex justify-center space-x-4">
            <Link
              to="/coverage/uk"
              className="px-8 py-3 rounded-full font-medium transition-all bg-blue-500 text-white shadow-md hover:bg-blue-600"
            >
              🇬🇧 英国
            </Link>
            <Link
              to="/coverage/aus"
              className="px-8 py-3 rounded-full font-medium transition-all bg-blue-500 text-white shadow-md hover:bg-blue-600"
            >
              🇦🇺 澳洲
            </Link>
            <Link
              to="/coverage/hk"
              className="px-8 py-3 rounded-full font-medium transition-all bg-blue-500 text-white shadow-md hover:bg-blue-600"
            >
              🇭🇰 香港
            </Link>
            <Link
              to="/coverage/usa"
              className="px-8 py-3 rounded-full font-medium transition-all bg-blue-500 text-white shadow-md hover:bg-blue-600"
            >
              🇺🇸 美国
            </Link>
          </div>
        </div>

        {/* Service Guarantees */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">服务保障</h2>
            <p className="text-lg text-gray-600">全方位服务保障，让您无后顾之忧</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              return (
                <Card key={index} className="bg-white hover:shadow-lg transition-all duration-200 group">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">{guarantee.title}</h4>
                    <p className="text-sm font-medium text-gray-600 mb-2">{guarantee.subtitle}</p>
                    <p className="text-xs text-gray-500">{guarantee.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicitySection;