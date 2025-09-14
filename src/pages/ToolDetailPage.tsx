import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Star, 
  ExternalLink, 
  Heart, 
  Share, 
  Users, 
  Calendar,
  CheckCircle,
  XCircle,
  Globe,
  Smartphone,
  Monitor,
  Apple
} from "lucide-react";

// Comprehensive tool data for all tools mentioned on homepage
const toolData: Record<string, {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  rating: number;
  reviewCount: number;
  pricing: "free" | "freemium" | "paid";
  website: string;
  logo?: string;
  screenshots: string[];
  features: string[];
  pros: string[];
  cons: string[];
  platforms: string[];
  founded: string;
  teamSize: string;
  alternatives: string[];
}> = {
  "claude-ai": {
    id: "claude-ai",
    title: "Claude AI",
    description: "Advanced AI assistant for writing, analysis, coding, and complex reasoning tasks",
    longDescription: "Claude is an AI assistant created by Anthropic that excels at a wide variety of tasks involving language, reasoning, analysis, coding, and creative work. Built with a focus on safety and helpfulness, Claude can engage in nuanced conversations, help with complex analysis, write and debug code, and assist with creative projects.",
    category: "AI & Machine Learning",
    rating: 4.9,
    reviewCount: 2847,
    pricing: "freemium",
    website: "https://claude.ai",
    screenshots: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    features: ["Advanced text generation and analysis", "Code writing and debugging", "Document analysis and summarization", "Creative writing assistance", "Math and reasoning problems", "Multi-language support"],
    pros: ["Excellent reasoning capabilities", "Very safe and helpful responses", "Great for complex analysis tasks", "Strong coding abilities", "Large context window"],
    cons: ["Limited free tier usage", "Can be overly cautious sometimes", "No image generation capabilities", "Subscription required for heavy usage"],
    platforms: ["Web", "iOS", "Android"],
    founded: "2021",
    teamSize: "100-500",
    alternatives: ["ChatGPT", "Gemini", "Perplexity"]
  },
  "figma": {
    id: "figma",
    title: "Figma",
    description: "Collaborative design platform for UI/UX design, prototyping, and team collaboration",
    longDescription: "Figma is a web-based design tool that enables teams to collaborate in real-time on interface design projects. It combines the accessibility of web-based tools with the power of desktop applications, making it the go-to choice for UI/UX designers, product teams, and developers worldwide.",
    category: "Design & Creative",
    rating: 4.8,
    reviewCount: 5234,
    pricing: "freemium",
    website: "https://figma.com",
    screenshots: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    features: ["Real-time collaboration", "Vector graphics editing", "Prototyping and animations", "Design systems and components", "Developer handoff tools", "Version control and history"],
    pros: ["Excellent collaboration features", "Web-based accessibility", "Powerful design systems", "Great developer handoff", "Active community and plugins"],
    cons: ["Requires internet connection", "Limited offline capabilities", "Can be slow with large files", "Learning curve for advanced features"],
    platforms: ["Web", "Desktop", "iOS", "Android"],
    founded: "2016",
    teamSize: "500-1000",
    alternatives: ["Adobe XD", "Sketch", "InVision"]
  },
  "ahrefs": {
    id: "ahrefs",
    title: "Ahrefs",
    description: "Comprehensive SEO toolset for keyword research, backlink analysis, and competitor insights",
    longDescription: "Ahrefs is a comprehensive SEO toolset that helps marketers and website owners improve their search engine rankings. With one of the largest backlink databases and powerful keyword research tools, Ahrefs provides actionable insights for SEO strategy, content marketing, and competitive analysis.",
    category: "Marketing & SEO",
    rating: 4.7,
    reviewCount: 3156,
    pricing: "paid",
    website: "https://ahrefs.com",
    screenshots: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    features: ["Backlink analysis", "Keyword research", "Competitor analysis", "Site audit", "Rank tracking", "Content gap analysis"],
    pros: ["Largest backlink database", "Accurate keyword data", "Comprehensive competitor insights", "User-friendly interface", "Regular database updates"],
    cons: ["Expensive pricing", "Steep learning curve", "No free plan", "Limited social media features"],
    platforms: ["Web"],
    founded: "2010",
    teamSize: "100-500",
    alternatives: ["SEMrush", "Moz", "SpyFu"]
  },
  "notion": {
    id: "notion",
    title: "Notion",
    description: "All-in-one workspace for notes, docs, databases, and project management",
    longDescription: "Notion is an all-in-one workspace that combines notes, docs, databases, and project management tools. It's designed to be a single platform where teams and individuals can organize their work, collaborate on projects, and build custom workflows that fit their specific needs.",
    category: "Productivity",
    rating: 4.6,
    reviewCount: 8932,
    pricing: "freemium",
    website: "https://notion.so",
    screenshots: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    features: ["Block-based editing", "Database and spreadsheets", "Templates and automation", "Team collaboration", "API integrations", "Cross-platform sync"],
    pros: ["Highly customizable", "Great for team collaboration", "Powerful database features", "Excellent templates", "Strong community"],
    cons: ["Can be overwhelming for beginners", "Performance issues with large databases", "Limited offline capabilities", "Complex for simple note-taking"],
    platforms: ["Web", "Desktop", "iOS", "Android"],
    founded: "2016",
    teamSize: "100-500",
    alternatives: ["Obsidian", "Roam Research", "Coda"]
  },
  "canva-pro": {
    id: "canva-pro",
    title: "Canva Pro",
    description: "Easy-to-use design platform with templates, stock photos, and brand management",
    longDescription: "Canva Pro is the premium version of the popular design platform that makes graphic design accessible to everyone. With professional templates, stock photography, brand kits, and team collaboration features, it's perfect for businesses and individuals who need to create professional designs quickly.",
    category: "Design & Creative",
    rating: 4.5,
    reviewCount: 12456,
    pricing: "freemium",
    website: "https://canva.com",
    screenshots: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    features: ["Drag-and-drop design", "Professional templates", "Brand kit management", "Stock photo library", "Team collaboration", "Social media scheduling"],
    pros: ["User-friendly interface", "Extensive template library", "Great for social media", "Affordable pricing", "Regular feature updates"],
    cons: ["Limited advanced design features", "Can feel restrictive for pros", "Internet connection required", "Template-based approach"],
    platforms: ["Web", "iOS", "Android"],
    founded: "2013",
    teamSize: "1000+",
    alternatives: ["Adobe Creative Suite", "Figma", "Sketch"]
  },
  "1password": {
    id: "1password",
    title: "1Password",
    description: "Advanced password manager with secure vaults, team sharing, and breach monitoring",
    longDescription: "1Password is a comprehensive password manager that helps individuals and teams secure their digital lives. With advanced encryption, secure sharing, and breach monitoring, it provides enterprise-grade security while maintaining ease of use for everyday password management.",
    category: "Security & Privacy",
    rating: 4.8,
    reviewCount: 1876,
    pricing: "paid",
    website: "https://1password.com",
    screenshots: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    features: ["Password generation", "Secure vaults", "Team sharing", "Breach monitoring", "Two-factor authentication", "Cross-platform sync"],
    pros: ["Excellent security", "User-friendly interface", "Great team features", "Strong encryption", "Regular security audits"],
    cons: ["No free plan", "Subscription-based pricing", "Learning curve for teams", "Limited free features"],
    platforms: ["Web", "Desktop", "iOS", "Android"],
    founded: "2005",
    teamSize: "100-500",
    alternatives: ["LastPass", "Bitwarden", "Dashlane"]
  }
};

const ToolDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = slug ? toolData[slug] : null;

  if (!tool) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tool Not Found</h1>
          <p className="text-muted-foreground">The tool you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const pricingColor = {
    free: "tech-green",
    freemium: "tech-orange", 
    paid: "tech-purple"
  }[tool.pricing];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="lg:col-span-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                    {tool.logo || tool.title[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold">{tool.title}</h1>
                      <Badge variant="outline">{tool.category}</Badge>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">{tool.description}</p>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{tool.rating}</span>
                        <span className="text-muted-foreground">({tool.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{Math.floor(tool.reviewCount * 2.5)}+ users</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Panel */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <Badge 
                        variant="outline" 
                        className={`w-full justify-center text-${pricingColor} border-${pricingColor}/30 bg-${pricingColor}/10`}
                      >
                        {tool.pricing === "freemium" ? "Free + Paid Plans" : tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
                      </Badge>
                      
                      <Button className="w-full" size="lg">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </Button>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Heart className="w-4 h-4 mr-2" />
                          Save
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Share className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">About {tool.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{tool.longDescription}</p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-tech-green">Pros</h3>
                    <ul className="space-y-2">
                      {tool.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-tech-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-red-500">Cons</h3>
                    <ul className="space-y-2">
                      {tool.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Tool Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Tool Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Founded</span>
                      <span>{tool.founded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Team Size</span>
                      <span>{tool.teamSize}</span>
                    </div>
                    <Separator />
                    <div>
                      <span className="text-muted-foreground block mb-2">Platforms</span>
                      <div className="flex gap-2 flex-wrap">
                        {tool.platforms.map((platform) => (
                          <Badge key={platform} variant="secondary" className="text-xs">
                            {platform === "Web" && <Globe className="w-3 h-3 mr-1" />}
                            {platform === "iOS" && <Apple className="w-3 h-3 mr-1" />}
                            {platform === "Android" && <Smartphone className="w-3 h-3 mr-1" />}
                            {platform === "Desktop" && <Monitor className="w-3 h-3 mr-1" />}
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Alternatives */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Similar Tools</h3>
                  <div className="space-y-2">
                    {tool.alternatives.map((alt, index) => (
                      <div key={index} className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-smooth cursor-pointer">
                        <span className="text-sm font-medium">{alt}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailPage;