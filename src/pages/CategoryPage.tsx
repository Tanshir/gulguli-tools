import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { SoftwareCard } from "@/components/SoftwareCard";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Megaphone, 
  DollarSign, 
  Palette, 
  Zap, 
  Shield,
  Camera,
  BarChart3,
  Filter,
  SlidersHorizontal
} from "lucide-react";

const categoryData: Record<string, {
  title: string;
  description: string;
  icon: any;
  toolCount: number;
  software: Array<{
    title: string;
    description: string;
    category: string;
    rating: number;
    reviewCount: number;
    pricing: "free" | "freemium" | "paid";
    featured?: boolean;
    trending?: boolean;
  }>;
}> = {
  "ai-machine-learning": {
    title: "AI & Machine Learning",
    description: "Cutting-edge AI tools for automation, content creation, and intelligent workflows",
    icon: Bot,
    toolCount: 156,
    software: [
      {
        title: "Claude AI",
        description: "Advanced AI assistant for writing, analysis, coding, and complex reasoning tasks",
        category: "AI & Machine Learning",
        rating: 4.9,
        reviewCount: 2847,
        pricing: "freemium",
        featured: true,
        trending: true
      },
      {
        title: "ChatGPT",
        description: "Conversational AI for writing, coding, analysis, and creative tasks",
        category: "AI & Machine Learning",
        rating: 4.8,
        reviewCount: 15432,
        pricing: "freemium",
        trending: true
      },
      {
        title: "Midjourney",
        description: "AI-powered image generation tool for creating stunning artwork and designs",
        category: "AI & Machine Learning",
        rating: 4.7,
        reviewCount: 8921,
        pricing: "paid"
      },
      {
        title: "GitHub Copilot",
        description: "AI pair programmer that helps you write code faster with autocomplete suggestions",
        category: "AI & Machine Learning",
        rating: 4.6,
        reviewCount: 3456,
        pricing: "paid",
        featured: true
      },
      {
        title: "Jasper AI",
        description: "AI content creation platform for marketing copy, blog posts, and social media",
        category: "AI & Machine Learning",
        rating: 4.5,
        reviewCount: 2134,
        pricing: "paid"
      },
      {
        title: "Copy.ai",
        description: "AI writing assistant for marketing copy, product descriptions, and content creation",
        category: "AI & Machine Learning",
        rating: 4.4,
        reviewCount: 1876,
        pricing: "freemium"
      }
    ]
  },
  "marketing-seo": {
    title: "Marketing & SEO",
    description: "Boost your online presence with powerful marketing and SEO optimization tools",
    icon: Megaphone,
    toolCount: 234,
    software: [
      {
        title: "Ahrefs",
        description: "Comprehensive SEO toolset for keyword research, backlink analysis, and competitor insights",
        category: "Marketing & SEO",
        rating: 4.7,
        reviewCount: 3156,
        pricing: "paid",
        trending: true
      },
      {
        title: "SEMrush",
        description: "All-in-one digital marketing toolkit for SEO, PPC, content, and social media",
        category: "Marketing & SEO",
        rating: 4.6,
        reviewCount: 2987,
        pricing: "paid",
        featured: true
      },
      {
        title: "Mailchimp",
        description: "Email marketing platform with automation, analytics, and audience management",
        category: "Marketing & SEO",
        rating: 4.5,
        reviewCount: 8432,
        pricing: "freemium"
      }
    ]
  },
  "design-creative": {
    title: "Design & Creative",
    description: "Professional design tools for creating stunning visuals and user experiences",
    icon: Palette,
    toolCount: 178,
    software: [
      {
        title: "Figma",
        description: "Collaborative design platform for UI/UX design, prototyping, and team collaboration",
        category: "Design & Creative",
        rating: 4.8,
        reviewCount: 5234,
        pricing: "freemium",
        featured: true
      },
      {
        title: "Canva Pro",
        description: "Easy-to-use design platform with templates, stock photos, and brand management",
        category: "Design & Creative",
        rating: 4.5,
        reviewCount: 12456,
        pricing: "freemium"
      },
      {
        title: "Adobe Creative Suite",
        description: "Professional creative applications for design, video, and digital content creation",
        category: "Design & Creative",
        rating: 4.7,
        reviewCount: 6789,
        pricing: "paid",
        trending: true
      }
    ]
  },
  "productivity": {
    title: "Productivity",
    description: "Streamline workflows and boost team productivity with collaboration tools",
    icon: Zap,
    toolCount: 312,
    software: [
      {
        title: "Notion",
        description: "All-in-one workspace for notes, docs, databases, and project management",
        category: "Productivity",
        rating: 4.6,
        reviewCount: 8932,
        pricing: "freemium",
        featured: true
      },
      {
        title: "Slack",
        description: "Team communication platform with channels, direct messaging, and integrations",
        category: "Productivity",
        rating: 4.5,
        reviewCount: 15678,
        pricing: "freemium"
      },
      {
        title: "Trello",
        description: "Visual project management tool using boards, lists, and cards for team collaboration",
        category: "Productivity",
        rating: 4.4,
        reviewCount: 9876,
        pricing: "freemium"
      }
    ]
  },
  "security-privacy": {
    title: "Security & Privacy",
    description: "Protect your data and maintain privacy with enterprise-grade security tools",
    icon: Shield,
    toolCount: 67,
    software: [
      {
        title: "1Password",
        description: "Advanced password manager with secure vaults, team sharing, and breach monitoring",
        category: "Security & Privacy",
        rating: 4.8,
        reviewCount: 1876,
        pricing: "paid"
      },
      {
        title: "NordVPN",
        description: "Premium VPN service for secure browsing, privacy protection, and geo-unblocking",
        category: "Security & Privacy",
        rating: 4.6,
        reviewCount: 3421,
        pricing: "paid",
        trending: true
      }
    ]
  },
  "finance-analytics": {
    title: "Finance & Analytics",
    description: "Track, analyze, and optimize your business finances with professional tools",
    icon: DollarSign,
    toolCount: 89,
    software: [
      {
        title: "QuickBooks",
        description: "Comprehensive accounting software for small and medium businesses",
        category: "Finance & Analytics",
        rating: 4.4,
        reviewCount: 5432,
        pricing: "paid"
      },
      {
        title: "Stripe",
        description: "Payment processing platform for online businesses and e-commerce",
        category: "Finance & Analytics",
        rating: 4.7,
        reviewCount: 2987,
        pricing: "paid",
        featured: true
      }
    ]
  },
  "media-video": {
    title: "Media & Video",
    description: "Create, edit, and manage multimedia content with professional-grade tools",
    icon: Camera,
    toolCount: 143,
    software: [
      {
        title: "Adobe Premiere Pro",
        description: "Professional video editing software for film, TV, and web content creation",
        category: "Media & Video",
        rating: 4.6,
        reviewCount: 3456,
        pricing: "paid"
      },
      {
        title: "Loom",
        description: "Screen recording tool for creating quick video messages and tutorials",
        category: "Media & Video",
        rating: 4.5,
        reviewCount: 2134,
        pricing: "freemium",
        trending: true
      }
    ]
  },
  "analytics-data": {
    title: "Analytics & Data",
    description: "Transform raw data into actionable insights with powerful analytics platforms",
    icon: BarChart3,
    toolCount: 98,
    software: [
      {
        title: "Google Analytics",
        description: "Web analytics service for tracking website traffic and user behavior",
        category: "Analytics & Data",
        rating: 4.3,
        reviewCount: 8765,
        pricing: "free"
      },
      {
        title: "Tableau",
        description: "Data visualization and business intelligence platform for analytics",
        category: "Analytics & Data",
        rating: 4.6,
        reviewCount: 1987,
        pricing: "paid",
        featured: true
      }
    ]
  }
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? categoryData[slug] : null;

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-xl bg-primary/10 text-primary">
                <Icon className="w-12 h-12" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              {category.toolCount} Tools Available
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{category.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Sort by: Popular
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Showing {category.software.length} of {category.toolCount} tools
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Software Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.software.map((software, index) => (
              <SoftwareCard key={index} {...software} />
            ))}
          </div>
          
          {category.software.length < category.toolCount && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Tools
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;