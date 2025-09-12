import { HeroSection } from "@/components/HeroSection";
import { CategoryCard } from "@/components/CategoryCard";
import { SoftwareCard } from "@/components/SoftwareCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Megaphone, 
  DollarSign, 
  Palette, 
  Zap, 
  Shield,
  Camera,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Star
} from "lucide-react";

const categories = [
  {
    title: "AI & Machine Learning",
    description: "Cutting-edge AI tools for automation, content creation, and intelligent workflows",
    icon: Bot,
    toolCount: 156,
    trending: true
  },
  {
    title: "Marketing & SEO",
    description: "Boost your online presence with powerful marketing and SEO optimization tools",
    icon: Megaphone,
    toolCount: 234,
    trending: true
  },
  {
    title: "Finance & Analytics",
    description: "Track, analyze, and optimize your business finances with professional tools",
    icon: DollarSign,
    toolCount: 89
  },
  {
    title: "Design & Creative",
    description: "Professional design tools for creating stunning visuals and user experiences",
    icon: Palette,
    toolCount: 178
  },
  {
    title: "Productivity",
    description: "Streamline workflows and boost team productivity with collaboration tools",
    icon: Zap,
    toolCount: 312
  },
  {
    title: "Security & Privacy",
    description: "Protect your data and maintain privacy with enterprise-grade security tools",
    icon: Shield,
    toolCount: 67
  },
  {
    title: "Media & Video",
    description: "Create, edit, and manage multimedia content with professional-grade tools",
    icon: Camera,
    toolCount: 143
  },
  {
    title: "Analytics & Data",
    description: "Transform raw data into actionable insights with powerful analytics platforms",
    icon: BarChart3,
    toolCount: 98
  }
];

const featuredSoftware = [
  {
    title: "Claude AI",
    description: "Advanced AI assistant for writing, analysis, coding, and complex reasoning tasks",
    category: "AI & Machine Learning",
    rating: 4.9,
    reviewCount: 2847,
    pricing: "freemium" as const,
    featured: true,
    trending: true
  },
  {
    title: "Figma",
    description: "Collaborative design platform for UI/UX design, prototyping, and team collaboration",
    category: "Design & Creative",
    rating: 4.8,
    reviewCount: 5234,
    pricing: "freemium" as const,
    featured: true
  },
  {
    title: "Ahrefs",
    description: "Comprehensive SEO toolset for keyword research, backlink analysis, and competitor insights",
    category: "Marketing & SEO",
    rating: 4.7,
    reviewCount: 3156,
    pricing: "paid" as const,
    trending: true
  },
  {
    title: "Notion",
    description: "All-in-one workspace for notes, docs, databases, and project management",
    category: "Productivity",
    rating: 4.6,
    reviewCount: 8932,
    pricing: "freemium" as const,
    featured: true
  },
  {
    title: "Canva Pro",
    description: "Easy-to-use design platform with templates, stock photos, and brand management",
    category: "Design & Creative",
    rating: 4.5,
    reviewCount: 12456,
    pricing: "freemium" as const
  },
  {
    title: "1Password",
    description: "Advanced password manager with secure vaults, team sharing, and breach monitoring",
    category: "Security & Privacy",
    rating: 4.8,
    reviewCount: 1876,
    pricing: "paid" as const
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Categories Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
            Browse by Category
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Find Tools by Category</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our curated categories to find the perfect software for your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </section>

      {/* Featured Software Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Star className="w-4 h-4 mr-2" />
                Featured & Trending
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Popular Software Tools</h2>
              <p className="text-xl text-muted-foreground">
                Discover the most loved and trending tools in the community
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSoftware.map((software, index) => (
              <SoftwareCard key={index} {...software} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="gradient" size="lg">
              <TrendingUp className="w-5 h-5 mr-2" />
              Explore All Software
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Can't find what you're looking for?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Submit a tool request or suggest a new category. Our team reviews submissions weekly and adds the best tools to our directory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Submit a Tool
            </Button>
            <Button variant="outline" size="lg">
              Request Category
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;