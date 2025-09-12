import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SoftwareCard } from "@/components/SoftwareCard";
import { SearchInput } from "@/components/ui/search-input";
import { 
  Filter,
  SlidersHorizontal,
  Search,
  X
} from "lucide-react";

// Mock search results - in a real app, this would come from an API
const allSoftware = [
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
    title: "1Password",
    description: "Advanced password manager with secure vaults, team sharing, and breach monitoring",
    category: "Security & Privacy",
    rating: 4.8,
    reviewCount: 1876,
    pricing: "paid" as const
  },
  {
    title: "ChatGPT",
    description: "Conversational AI for writing, coding, analysis, and creative tasks",
    category: "AI & Machine Learning",
    rating: 4.8,
    reviewCount: 15432,
    pricing: "freemium" as const,
    trending: true
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
    title: "Slack",
    description: "Team communication platform with channels, direct messaging, and integrations",
    category: "Productivity",
    rating: 4.5,
    reviewCount: 15678,
    pricing: "freemium" as const
  }
];

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState(allSoftware);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Simulate search functionality
  useEffect(() => {
    if (query) {
      const filtered = allSoftware.filter(software =>
        software.title.toLowerCase().includes(query.toLowerCase()) ||
        software.description.toLowerCase().includes(query.toLowerCase()) ||
        software.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults(allSoftware);
    }
  }, [query]);

  const handleSearch = (newQuery: string) => {
    setSearchParams({ q: newQuery });
  };

  const handleFilterToggle = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="min-h-screen">
      {/* Search Header */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {query ? `Search Results for "${query}"` : "Search Software Tools"}
            </h1>
            <SearchInput 
              placeholder="Search software tools..."
              defaultValue={query}
              onSearch={handleSearch}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Results Summary & Filters */}
      <section className="py-6 border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {searchResults.length} results found
                {query && ` for "${query}"`}
              </span>
              
              {activeFilters.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Filters:</span>
                  {activeFilters.map(filter => (
                    <Badge 
                      key={filter} 
                      variant="secondary" 
                      className="text-xs cursor-pointer"
                      onClick={() => handleFilterToggle(filter)}
                    >
                      {filter}
                      <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="text-xs"
                  >
                    Clear all
                  </Button>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Sort by: Relevance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Filter Tags */}
      <section className="py-4 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground mr-4">Quick filters:</span>
            {["Free", "AI-Powered", "Trending", "Design Tools", "Productivity"].map(filter => (
              <Badge 
                key={filter}
                variant={activeFilters.includes(filter) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10"
                onClick={() => handleFilterToggle(filter)}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {searchResults.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((software, index) => (
                  <SoftwareCard key={index} {...software} />
                ))}
              </div>
              
              {searchResults.length >= 9 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Results
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">No results found</h2>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Suggestions:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["AI tools", "Design software", "Productivity apps", "Marketing tools"].map(suggestion => (
                    <Badge 
                      key={suggestion}
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary/10"
                      onClick={() => handleSearch(suggestion)}
                    >
                      {suggestion}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchPage;