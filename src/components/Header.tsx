import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);

  const navItems = [
    { label: "学业辅导", hasDropdown: true },
    { label: "学业申诉", hasDropdown: true },
    { label: "师资团队", hasDropdown: false },
    { label: "资讯问答", hasDropdown: true },
    { label: "关于学佑星途", hasDropdown: true },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="学佑星途 - SCHOLARGUARD" 
              className="h-10 w-auto hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Region Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
              className="text-nav-text hover:text-primary inline-flex items-center font-medium transition-all"
            >
              覆盖地区/院校
              <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isRegionDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isRegionDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsRegionDropdownOpen(false)}
                ></div>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="py-2">
                    <Link
                      to="/coverage/uk"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                      onClick={() => setIsRegionDropdownOpen(false)}
                    >
                      🇬🇧 英国
                    </Link>
                    <Link
                      to="/coverage/hk"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                      onClick={() => setIsRegionDropdownOpen(false)}
                    >
                      🇭🇰 香港
                    </Link>
                    <Link
                      to="/coverage/aus"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                      onClick={() => setIsRegionDropdownOpen(false)}
                    >
                      🇦🇺 澳洲
                    </Link>
                    <Link
                      to="/coverage/usa"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsRegionDropdownOpen(false)}
                    >
                      🇺🇸 美国
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>

          {navItems.map((item, index) => (
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-nav-text hover:text-primary">
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                    {item.label === "学业辅导" ? (
                      <>
                        <DropdownMenuItem asChild>
                          <Link to="/tutoring/thesis" className="w-full">论文辅导</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/tutoring/exam" className="w-full">考试辅导</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/tutoring/assignment" className="w-full">作业辅导</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/tutoring/custom" className="w-full">定制辅导</Link>
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <>
                        <DropdownMenuItem>选项 1</DropdownMenuItem>
                        <DropdownMenuItem>选项 2</DropdownMenuItem>
                        <DropdownMenuItem>选项 3</DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button 
                  variant="ghost" 
                  className="text-nav-text hover:text-primary"
                  onClick={() => {
                    if (item.label === "师资团队") {
                      const section = document.getElementById("teacher-team-section");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.label}
                </Button>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <Button variant="ghost" className="md:hidden">
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;