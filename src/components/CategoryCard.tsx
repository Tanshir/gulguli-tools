import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  toolCount: number;
  trending?: boolean;
}

const getSlugFromTitle = (title: string) => {
  return title.toLowerCase().replace(/[&\s]+/g, '-').replace(/[^a-z0-9-]/g, '');
};

export function CategoryCard({ title, description, icon: Icon, toolCount, trending }: CategoryCardProps) {
  const slug = getSlugFromTitle(title);
  
  return (
    <Link 
      to={`/category/${slug}`}
      aria-label={`Browse ${title} software tools`}
    >
      <Card className="group cursor-pointer transition-smooth hover:shadow-elevation border hover:border-primary/20">
        <CardContent className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="p-4 rounded-xl bg-primary text-primary-foreground">
              <Icon className="h-8 w-8" />
            </div>
            {trending && (
              <Badge variant="outline" className="bg-accent-orange/10 text-accent-orange border-accent-orange/30 font-medium">
                Trending
              </Badge>
            )}
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">{title}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">{toolCount} tools</span>
            <div className="w-3 h-3 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-smooth" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}