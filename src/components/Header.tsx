import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const Header = () => {

  const navItems = [
    { label: "学业辅导", hasDropdown: true },
    { label: "学业申诉", hasDropdown: true },
    { label: "师资团队", hasDropdown: false },
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-nav-text hover:text-primary">
                覆盖地区/院校
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
              <DropdownMenuItem asChild>
                <Link to="/coverage/uk" className="w-full">UK 英国</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/coverage/hk" className="w-full">HK 香港</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/coverage/aus" className="w-full">AUS 澳洲</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/coverage/usa" className="w-full">US 美国</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
                    ) : item.label === "学业申诉" ? (
                      <>
                        <DropdownMenuItem asChild>
                          <Link to="/appeal/fail" className="w-full">挂科申诉</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/appeal/withdrawal" className="w-full">退学申诉</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/appeal/major-change" className="w-full">换改专业申诉</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/appeal/custom" className="w-full">定制申诉</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/appeal/misconduct" className="w-full">学术不端申诉</Link>
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <>
                        <DropdownMenuItem>走进学佑星途</DropdownMenuItem>
                        <DropdownMenuItem>学佑星途保障</DropdownMenuItem>
                        <DropdownMenuItem>联系我们</DropdownMenuItem>
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