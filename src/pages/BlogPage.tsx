import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Claude AI vs ChatGPT: The Ultimate AI Assistant Comparison 2024",
    excerpt: "Deep dive comparison of two leading AI assistants. Which one should you choose for your business needs?",
    category: "Comparison",
    author: "Sarah Chen",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    featured: true,
    slug: "claude-ai-vs-chatgpt-comparison",
    image: "/api/placeholder/600/300"
  },
  {
    id: 2,
    title: "Figma Review: Is It Worth the Hype? Complete 2024 Analysis",
    excerpt: "Honest review of Figma's features, pricing, and performance. Everything you need to know before making the switch.",
    category: "Review",
    author: "Mike Johnson",
    publishDate: "2024-01-12",
    readTime: "6 min read",
    slug: "figma-review-2024-analysis",
    image: "/api/placeholder/600/300"
  },
  {
    id: 3,
    title: "Best Password Managers: 1Password vs Bitwarden vs LastPass",
    excerpt: "Comprehensive comparison of top password managers. Security features, pricing, and ease of use analyzed.",
    category: "Comparison",
    author: "Alex Rivera",
    publishDate: "2024-01-10",
    readTime: "10 min read",
    slug: "best-password-managers-comparison",
    image: "/api/placeholder/600/300"
  },
  {
    id: 4,
    title: "Notion Ultimate Guide: Features, Tips, and Templates for 2024",
    excerpt: "Master Notion with our comprehensive guide. Discover advanced features, productivity tips, and ready-to-use templates.",
    category: "Guide",
    author: "Emma Davis",
    publishDate: "2024-01-08",
    readTime: "12 min read",
    slug: "notion-ultimate-guide-2024",
    image: "/api/placeholder/600/300"
  },
  {
    id: 5,
    title: "Canva Pro vs Adobe Creative Suite: Which Design Tool Wins?",
    excerpt: "Battle of design platforms: ease-of-use vs professional features. Find out which tool suits your creative needs.",
    category: "Comparison",
    author: "David Kim",
    publishDate: "2024-01-05",
    readTime: "7 min read",
    slug: "canva-pro-vs-adobe-creative-suite",
    image: "/api/placeholder/600/300"
  }
];

const BlogPage = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      {/* JSON-LD for Blog */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "GulGuli Blog",
          "description": "Expert reviews, comparisons, and guides for software tools and productivity solutions.",
          "url": "https://gulguli.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "GulGuli",
            "url": "https://gulguli.com"
          }
        })}
      </script>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">GulGuli Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expert reviews, in-depth comparisons, and practical guides to help you choose the right software tools for your needs.
          </p>
        </header>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4 font-medium">Featured Article</Badge>
              <h2 className="text-2xl font-bold">Editor's Pick</h2>
            </div>
            
            <Card className="overflow-hidden border hover:border-primary/20 transition-smooth">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="bg-accent-blue/10 text-accent-blue border-accent-blue/30">
                      {featuredPost.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 leading-tight">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span className="text-sm font-medium">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${featuredPost.slug}`}>
                      <Button className="font-medium">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Regular Posts Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden border hover:border-primary/20 transition-smooth">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <Badge variant="outline" className={`font-medium ${
                      post.category === 'Comparison' ? 'bg-accent-purple/10 text-accent-purple border-accent-purple/30' :
                      post.category === 'Review' ? 'bg-accent-green/10 text-accent-green border-accent-green/30' :
                      'bg-accent-orange/10 text-accent-orange border-accent-orange/30'
                    }`}>
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl leading-tight group-hover:text-primary transition-smooth">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="outline" size="sm" className="font-medium">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;