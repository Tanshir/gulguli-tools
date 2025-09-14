import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface SoftwareCardProps {
  title: string;
  description: string;
  category: string;
  rating: number;
  reviewCount: number;
  pricing: "free" | "freemium" | "paid";
  trending?: boolean;
  featured?: boolean;
  logo?: string;
  slug?: string;
}

const getSlugFromTitle = (title: string) => {
  return title.toLowerCase().replace(/[&\s]+/g, '-').replace(/[^a-z0-9-]/g, '');
};

export function SoftwareCard({ 
  title, 
  description, 
  category, 
  rating, 
  reviewCount, 
  pricing, 
  trending, 
  featured,
  logo,
  slug
}: SoftwareCardProps) {
  const toolSlug = slug || getSlugFromTitle(title);
  const pricingColor = {
    free: "tech-green",
    freemium: "tech-orange", 
    paid: "tech-purple"
  }[pricing];

  return (
    <Card className="group cursor-pointer transition-smooth hover:shadow-elevation hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
              {logo || title[0]}
            </div>
            <div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-smooth">{title}</h3>
              <Badge variant="outline" className="text-xs mt-1">
                {category}
              </Badge>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            {trending && (
              <Badge variant="secondary" className="bg-tech-orange/20 text-tech-orange border-tech-orange/30">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending
              </Badge>
            )}
            {featured && (
              <Badge variant="secondary" className="bg-tech-purple/20 text-tech-purple border-tech-purple/30">
                Featured
              </Badge>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{rating}</span>
              <span className="text-xs text-muted-foreground">({reviewCount})</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span className="text-xs">{Math.floor(reviewCount * 2.5)}+ users</span>
            </div>
          </div>
          <Badge 
            variant="outline" 
            className={`text-${pricingColor} border-${pricingColor}/30 bg-${pricingColor}/10`}
          >
            {pricing === "freemium" ? "Free + Paid" : pricing.charAt(0).toUpperCase() + pricing.slice(1)}
          </Badge>
        </div>

        <Link to={`/tool/${toolSlug}`}>
          <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10 transition-smooth">
            View Details
            <ExternalLink className="w-4 h-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}