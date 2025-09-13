import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search-input";
import { Badge } from "@/components/ui/badge";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  Menu,
  X,
  Search,
  Bot,
  Megaphone,
  DollarSign,
  Palette,
  Zap,
  Shield,
  Camera,
  BarChart3
} from "lucide-react";

const categories = [
  { title: "AI & Machine Learning", icon: Bot, slug: "ai-machine-learning" },
  { title: "Marketing & SEO", icon: Megaphone, slug: "marketing-seo" },
  { title: "Finance & Analytics", icon: DollarSign, slug: "finance-analytics" },
  { title: "Design & Creative", icon: Palette, slug: "design-creative" },
  { title: "Productivity", icon: Zap, slug: "productivity" },
  { title: "Security & Privacy", icon: Shield, slug: "security-privacy" },
  { title: "Media & Video", icon: Camera, slug: "media-video" },
  { title: "Analytics & Data", icon: BarChart3, slug: "analytics-data" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">SoftHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 gap-3 p-6">
                      {categories.map((category) => (
                        <NavigationMenuLink
                          key={category.slug}
                          asChild
                        >
                          <Link
                            to={`/category/${category.slug}`}
                            className="group select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center space-x-2">
                              <category.icon className="w-4 h-4 text-primary" />
                              <div className="text-sm font-medium leading-none">
                                {category.title}
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/trending" className="text-sm font-medium transition-colors hover:text-primary">
                    Trending
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/browse" className="text-sm font-medium transition-colors hover:text-primary">
                    Browse All
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <SearchInput 
              placeholder="Search software tools..."
              onSearch={handleSearch}
            />
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/submit-tool">Submit Tool</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <div className="space-y-4">
              <SearchInput 
                placeholder="Search software tools..."
                onSearch={handleSearch}
              />
              <nav className="space-y-2">
                <Link
                  to="/trending"
                  className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trending
                </Link>
                <Link
                  to="/browse"
                  className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Browse All
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="px-3 py-2">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Categories</div>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/category/${category.slug}`}
                        className="flex items-center space-x-2 p-2 text-xs rounded-md hover:bg-accent"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <category.icon className="w-3 h-3 text-primary" />
                        <span>{category.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
              <Button asChild className="w-full">
                <Link to="/submit-tool" onClick={() => setIsMenuOpen(false)}>
                  Submit Tool
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}