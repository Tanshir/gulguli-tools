import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  toolCount: number;
  trending?: boolean;
}

export function CategoryCard({ title, description, icon: Icon, toolCount, trending }: CategoryCardProps) {
  return (
    <Card className="group cursor-pointer transition-smooth hover:shadow-elevation hover:-translate-y-1 border-border/50 bg-secondary/30 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          {trending && (
            <Badge variant="secondary" className="bg-tech-orange/20 text-tech-orange border-tech-orange/30">
              Trending
            </Badge>
          )}
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{toolCount} tools</span>
          <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-smooth" />
        </div>
      </CardContent>
    </Card>
  );
}