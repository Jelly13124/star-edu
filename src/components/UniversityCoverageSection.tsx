import { useState } from "react";

const UniversityCoverageSection = () => {
  const [activeTab, setActiveTab] = useState("英国");

  const countries = [
    "英国", "美国", "澳大利亚", "加拿大", "新加坡", "中国香港", "中国澳门"
  ];

  const universities = {
    "英国": [
      { chinese: "剑桥大学", english: "University of Cambridge" },
      { chinese: "牛津大学", english: "University of Oxford" },
      { chinese: "帝国理工学院", english: "Imperial College London" },
      { chinese: "伦敦大学学院", english: "University College London" },
      { chinese: "曼彻斯特大学", english: "The University of Manchester" },
      { chinese: "伦敦国王学院", english: "King's College London" },
      { chinese: "伦敦政治经济学院", english: "The London School of Economics and Political Science" },
      { chinese: "华威大学", english: "University of Warwick" }
    ],
    "美国": [
      { chinese: "哈佛大学", english: "Harvard University" },
      { chinese: "斯坦福大学", english: "Stanford University" },
      { chinese: "麻省理工学院", english: "Massachusetts Institute of Technology" },
      { chinese: "耶鲁大学", english: "Yale University" },
      { chinese: "普林斯顿大学", english: "Princeton University" },
      { chinese: "哥伦比亚大学", english: "Columbia University" },
      { chinese: "芝加哥大学", english: "University of Chicago" },
      { chinese: "宾夕法尼亚大学", english: "University of Pennsylvania" }
    ],
    "澳大利亚": [
      { chinese: "墨尔本大学", english: "University of Melbourne" },
      { chinese: "悉尼大学", english: "University of Sydney" },
      { chinese: "澳大利亚国立大学", english: "Australian National University" },
      { chinese: "新南威尔士大学", english: "University of New South Wales" },
      { chinese: "昆士兰大学", english: "University of Queensland" },
      { chinese: "莫纳什大学", english: "Monash University" },
      { chinese: "西澳大学", english: "University of Western Australia" },
      { chinese: "阿德莱德大学", english: "University of Adelaide" }
    ],
    "加拿大": [
      { chinese: "多伦多大学", english: "University of Toronto" },
      { chinese: "麦吉尔大学", english: "McGill University" },
      { chinese: "英属哥伦比亚大学", english: "University of British Columbia" },
      { chinese: "阿尔伯塔大学", english: "University of Alberta" },
      { chinese: "蒙特利尔大学", english: "Université de Montréal" },
      { chinese: "麦克马斯特大学", english: "McMaster University" },
      { chinese: "滑铁卢大学", english: "University of Waterloo" },
      { chinese: "卡尔加里大学", english: "University of Calgary" }
    ],
    "新加坡": [
      { chinese: "新加坡国立大学", english: "National University of Singapore" },
      { chinese: "南洋理工大学", english: "Nanyang Technological University" },
      { chinese: "新加坡管理大学", english: "Singapore Management University" },
      { chinese: "新加坡科技设计大学", english: "Singapore University of Technology and Design" }
    ],
    "中国香港": [
      { chinese: "香港大学", english: "University of Hong Kong" },
      { chinese: "香港中文大学", english: "Chinese University of Hong Kong" },
      { chinese: "香港科技大学", english: "Hong Kong University of Science and Technology" },
      { chinese: "香港城市大学", english: "City University of Hong Kong" },
      { chinese: "香港理工大学", english: "Hong Kong Polytechnic University" },
      { chinese: "香港浸会大学", english: "Hong Kong Baptist University" },
      { chinese: "岭南大学", english: "Lingnan University" },
      { chinese: "香港教育大学", english: "Education University of Hong Kong" }
    ],
    "中国澳门": [
      { chinese: "澳门大学", english: "University of Macau" },
      { chinese: "澳门科技大学", english: "Macau University of Science and Technology" },
      { chinese: "澳门理工学院", english: "Macao Polytechnic Institute" },
      { chinese: "澳门城市大学", english: "City University of Macau" }
    ]
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            覆盖全球众多高校
          </h2>
        </div>

        {/* Country Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setActiveTab(country)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === country
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-500"
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        {/* Universities Grid */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{activeTab}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {universities[activeTab as keyof typeof universities]?.map((university, index) => (
              <div key={index} className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-800 mb-1">
                  {university.chinese}
                </h4>
                <p className="text-sm text-gray-500">
                  {university.english}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityCoverageSection;