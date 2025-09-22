const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">学</span>
              </div>
              <span className="text-xl font-bold text-yellow-400">学佑星途</span>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>24小时热线：+86 400 680 0105</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>客服邮址：南京市栖霞区天穹路7号 紫金东郊小镇部5栋</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🏢</span>
                <span>京公网安备 11010502050010号 京ICP备2020036719号-2</span>
              </div>
              <div className="text-xs text-gray-400 mt-4">
                © 路觅（北京）教育科技有限公司
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">服务项目</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">课程辅导</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">作业辅导</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">考试辅导</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">论文辅导</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">学业申诉</a></li>
            </ul>
          </div>

          {/* Contact and Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">关注我们</h3>
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">小</span>
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">微</span>
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">微</span>
              </div>
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">抖</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>学佑星途 - 专业的留学生学术辅导平台</p>
            <p className="mt-2 md:mt-0">让每一位留学生都能学有所成</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;