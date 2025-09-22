import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const PublicitySection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const guarantees = [
    { title: "师资保障", description: "学历背景真实可查，从严筛选导师资质" },
    { title: "时效保障", description: "客服用规范高标准，响应及时，不过期" },
    { title: "个性化定制", description: "根据学生个体需求，定制提高培优方案" },
    { title: "审核保障", description: "自然流言第三方反馈，确认、联系等保证正确" },
    { title: "全职导师", description: "全职专业师资团队，保障授课和学习督导质量" },
    { title: "信息保障", description: "严格个人信息保护制度，保障隐私，不外露" },
    { title: "目标追踪", description: "学习进度全程跟踪，确保学习目标实现" },
    { title: "合同保障", description: "所有服务签订正式合同，维护双方合法权益" },
    { title: "独家导师", description: "专属一对一专业指导，全程教授学术性辅导及教学" },
    { title: "申诉保障", description: "全程协力、清楚，增加申诉材料及会议参与" },
    { title: "流程完善", description: "流程温馨完善，无死角，服务流程标准化管理" },
    { title: "退费保障", description: "不合教育目标，无条件实行退费，零风险" }
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

        {/* Country Coverage Dropdown */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">覆盖院校/地区</h2>
          <div className="flex justify-center">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg shadow-md inline-flex items-center font-medium transition-all hover:shadow-lg"
              >
                覆盖地区/院校
                <ChevronDown className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsDropdownOpen(false)}
                  ></div>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="py-2">
                      <Link
                        to="/coverage/uk"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        🇬🇧 英国
                      </Link>
                      <Link
                        to="/coverage/hk"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        🇭🇰 香港
                      </Link>
                      <Link
                        to="/coverage/aus"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        🇦🇺 澳洲
                      </Link>
                      <Link
                        to="/coverage/usa"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        🇺🇸 美国
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Service Guarantees - Compact */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">服务保障</h2>
          <p className="text-center text-gray-600 mb-6 text-sm">全方位服务保障，让您无后顾之忧</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center p-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
                <h3 className="font-medium text-gray-800 mb-1 text-sm">{guarantee.title}</h3>
                <p className="text-xs text-gray-600 leading-tight">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicitySection;