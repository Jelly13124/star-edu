import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const navItems = [
    { label: "覆盖地区/院校", hasDropdown: true },
    { label: "学业辅导", hasDropdown: true },
    { label: "学业申诉", hasDropdown: true },
    { label: "师资团队", hasDropdown: false },
    { label: "学佑星途公开课", hasDropdown: false },
    { label: "资讯问答", hasDropdown: true },
    { label: "关于学佑星途", hasDropdown: true },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-lumiclass-yellow px-3 py-1 rounded font-bold text-white text-lg">
            学佑星途
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
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
                  <DropdownMenuContent className="bg-background border border-border">
                    <DropdownMenuItem>选项 1</DropdownMenuItem>
                    <DropdownMenuItem>选项 2</DropdownMenuItem>
                    <DropdownMenuItem>选项 3</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="ghost" className="text-nav-text hover:text-primary">
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