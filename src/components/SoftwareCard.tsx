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
    free: "accent-green",
    freemium: "accent-orange", 
    paid: "accent-purple"
  }[pricing];

  return (
    <Card className="group cursor-pointer transition-smooth hover:shadow-elevation border hover:border-primary/20">
      <CardContent className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
              {logo || title[0]}
            </div>
            <div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-smooth mb-1">{title}</h3>
              <Badge variant="outline" className="text-sm font-medium">
                {category}
              </Badge>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            {trending && (
              <Badge variant="outline" className="bg-accent-orange/10 text-accent-orange border-accent-orange/30 font-medium">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending
              </Badge>
            )}
            {featured && (
              <Badge variant="outline" className="bg-accent-purple/10 text-accent-purple border-accent-purple/30 font-medium">
                Featured
              </Badge>
            )}
          </div>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-accent-orange text-accent-orange" />
              <span className="font-bold">{rating}</span>
              <span className="text-sm text-muted-foreground">({reviewCount})</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">{Math.floor(reviewCount * 2.5)}+ users</span>
            </div>
          </div>
          <Badge 
            variant="outline" 
            className={`text-${pricingColor} border-${pricingColor}/30 bg-${pricingColor}/10 font-medium`}
          >
            {pricing === "freemium" ? "Free + Paid" : pricing.charAt(0).toUpperCase() + pricing.slice(1)}
          </Badge>
        </div>

        <Link to={`/tool/${toolSlug}`}>
          <Button variant="outline" className="w-full justify-between font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
            View Details
            <ExternalLink className="w-5 h-5" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}