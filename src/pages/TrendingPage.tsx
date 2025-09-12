import { Badge } from "@/components/ui/badge";
import { SoftwareCard } from "@/components/SoftwareCard";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp,
  Flame,
  Star,
  Clock,
  ArrowUp,
  Calendar
} from "lucide-react";

// Mock trending data - in a real app, this would come from an API
const trendingSoftware = [
  {
    title: "Claude AI",
    description: "Advanced AI assistant for writing, analysis, coding, and complex reasoning tasks",
    category: "AI & Machine Learning",
    rating: 4.9,
    reviewCount: 2847,
    pricing: "freemium" as const,
    featured: true,
    trending: true,
    rank: 1,
    change: "+3"
  },
  {
    title: "ChatGPT",
    description: "Conversational AI for writing, coding, analysis, and creative tasks",
    category: "AI & Machine Learning",
    rating: 4.8,
    reviewCount: 15432,
    pricing: "freemium" as const,
    trending: true,
    rank: 2,
    change: "0"
  },
  {
    title: "Ahrefs",
    description: "Comprehensive SEO toolset for keyword research, backlink analysis, and competitor insights",
    category: "Marketing & SEO",
    rating: 4.7,
    reviewCount: 3156,
    pricing: "paid" as const,
    trending: true,
    rank: 3,
    change: "+1"
  },
  {
    title: "Midjourney",
    description: "AI-powered image generation tool for creating stunning artwork and designs",
    category: "AI & Machine Learning",
    rating: 4.7,
    reviewCount: 8921,
    pricing: "paid" as const,
    trending: true,
    rank: 4,
    change: "+5"
  },
  {
    title: "Figma",
    description: "Collaborative design platform for UI/UX design, prototyping, and team collaboration",
    category: "Design & Creative",
    rating: 4.8,
    reviewCount: 5234,
    pricing: "freemium" as const,
    featured: true,
    trending: true,
    rank: 5,
    change: "-2"
  },
  {
    title: "Notion",
    description: "All-in-one workspace for notes, docs, databases, and project management",
    category: "Productivity",
    rating: 4.6,
    reviewCount: 8932,
    pricing: "freemium" as const,
    featured: true,
    trending: true,
    rank: 6,
    change: "+1"
  }
];

const newlyAdded = [
  {
    title: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster with autocomplete suggestions",
    category: "AI & Machine Learning",
    rating: 4.6,
    reviewCount: 3456,
    pricing: "paid" as const,
    addedDays: 2
  },
  {
    title: "Linear",
    description: "Modern issue tracking and project management for software teams",
    category: "Productivity",
    rating: 4.7,
    reviewCount: 1234,
    pricing: "freemium" as const,
    addedDays: 5
  },
  {
    title: "Framer",
    description: "Interactive design tool for creating responsive websites and prototypes",
    category: "Design & Creative",
    rating: 4.5,
    reviewCount: 987,
    pricing: "freemium" as const,
    addedDays: 7
  }
];

const TrendingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/20 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-xl bg-primary/10 text-primary">
                <TrendingUp className="w-12 h-12" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-4 bg-tech-orange/10 text-tech-orange border-tech-orange/20">
              <Flame className="w-4 h-4 mr-2" />
              Hot Right Now
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Trending Software</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover the hottest software tools that are gaining popularity in the community
            </p>
          </div>
        </div>
      </section>

      {/* Trending Stats */}
      <section className="py-8 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">{trendingSoftware.length}</div>
              <div className="text-sm text-muted-foreground">Trending Tools</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-tech-orange">{newlyAdded.length}</div>
              <div className="text-sm text-muted-foreground">Added This Week</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Live Updates</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">4.7★</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Rankings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">🔥 Trending Rankings</h2>
              <p className="text-muted-foreground">
                Based on user engagement, reviews, and search volume
              </p>
            </div>
            <Badge variant="outline" className="text-xs">
              <Clock className="w-3 h-3 mr-1" />
              Updated hourly
            </Badge>
          </div>

          <div className="space-y-6">
            {trendingSoftware.map((software, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-xl border border-border/50 bg-secondary/30 backdrop-blur-sm hover:shadow-elevation transition-smooth"
              >
                <div className="flex items-start gap-6">
                  {/* Rank */}
                  <div className="flex-shrink-0 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      #{software.rank}
                    </div>
                    <div className="flex items-center justify-center text-xs">
                      {software.change.startsWith('+') ? (
                        <ArrowUp className="w-3 h-3 text-green-500 mr-1" />
                      ) : software.change === '0' ? (
                        <div className="w-3 h-3 rounded-full bg-muted mr-1" />
                      ) : (
                        <ArrowUp className="w-3 h-3 text-red-500 mr-1 rotate-180" />
                      )}
                      <span className={`font-medium ${
                        software.change.startsWith('+') ? 'text-green-500' : 
                        software.change === '0' ? 'text-muted-foreground' : 'text-red-500'
                      }`}>
                        {software.change === '0' ? '—' : software.change}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="md:hidden mb-4">
                      <SoftwareCard {...software} />
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1 mr-6">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                              {software.title}
                            </h3>
                            {software.trending && (
                              <Badge variant="secondary" className="bg-tech-orange/20 text-tech-orange border-tech-orange/30">
                                <Flame className="w-3 h-3 mr-1" />
                                Hot
                              </Badge>
                            )}
                            {software.featured && (
                              <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-3 line-clamp-2">
                            {software.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm">
                            <Badge variant="outline" className="text-xs">
                              {software.category}
                            </Badge>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{software.rating}</span>
                              <span className="text-muted-foreground">
                                ({software.reviewCount.toLocaleString()})
                              </span>
                            </div>
                            <Badge 
                              variant={software.pricing === "freemium" ? "secondary" : "outline"}
                              className="text-xs capitalize"
                            >
                              {software.pricing}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="outline" className="flex-shrink-0">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newly Added */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                <Calendar className="w-8 h-8 inline mr-3 text-accent" />
                Newly Added
              </h2>
              <p className="text-muted-foreground">
                Fresh software tools added to our directory
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newlyAdded.map((software, index) => (
              <div key={index} className="relative">
                <SoftwareCard {...software} />
                <Badge 
                  variant="default" 
                  className="absolute -top-2 -right-2 bg-accent text-accent-foreground"
                >
                  {software.addedDays}d ago
                </Badge>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All New Additions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrendingPage;