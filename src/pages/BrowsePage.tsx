import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SoftwareCard } from "@/components/SoftwareCard";
import { SearchInput } from "@/components/ui/search-input";
import { 
  Filter,
  SlidersHorizontal,
  Grid3X3,
  List,
  TrendingUp,
  Star,
  Clock
} from "lucide-react";

// Mock data - in a real app, this would come from an API
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
  },
  {
    title: "Adobe Creative Suite",
    description: "Professional creative applications for design, video, and digital content creation",
    category: "Design & Creative",
    rating: 4.7,
    reviewCount: 6789,
    pricing: "paid" as const
  },
  {
    title: "Trello",
    description: "Visual project management tool using boards, lists, and cards for team collaboration",
    category: "Productivity",
    rating: 4.4,
    reviewCount: 9876,
    pricing: "freemium" as const
  },
  {
    title: "NordVPN",
    description: "Premium VPN service for secure browsing, privacy protection, and geo-unblocking",
    category: "Security & Privacy",
    rating: 4.6,
    reviewCount: 3421,
    pricing: "paid" as const
  },
  {
    title: "Google Analytics",
    description: "Web analytics service for tracking website traffic and user behavior",
    category: "Analytics & Data",
    rating: 4.3,
    reviewCount: 8765,
    pricing: "free" as const
  }
];

const categories = [
  "All Categories",
  "AI & Machine Learning",
  "Design & Creative", 
  "Productivity",
  "Marketing & SEO",
  "Security & Privacy",
  "Analytics & Data",
  "Finance & Analytics",
  "Media & Video"
];

const pricingOptions = ["All Pricing", "Free", "Freemium", "Paid"];
const sortOptions = ["Popular", "Newest", "Rating", "Name A-Z"];

const BrowsePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPricing, setSelectedPricing] = useState("All Pricing");
  const [sortBy, setSortBy] = useState("Popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filter and search logic
  const filteredSoftware = allSoftware.filter(software => {
    const matchesSearch = searchQuery === "" || 
      software.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      software.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      software.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "All Categories" || 
      software.category === selectedCategory;

    const matchesPricing = selectedPricing === "All Pricing" || 
      (selectedPricing === "Free" && software.pricing === "free") ||
      (selectedPricing === "Freemium" && software.pricing === "freemium") ||
      (selectedPricing === "Paid" && software.pricing === "paid");

    return matchesSearch && matchesCategory && matchesPricing;
  });

  // Sort logic
  const sortedSoftware = [...filteredSoftware].sort((a, b) => {
    switch (sortBy) {
      case "Newest":
        return 0; // Mock - would sort by date added
      case "Rating":
        return b.rating - a.rating;
      case "Name A-Z":
        return a.title.localeCompare(b.title);
      default: // Popular
        return b.reviewCount - a.reviewCount;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedSoftware.length / itemsPerPage);
  const paginatedSoftware = sortedSoftware.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              {allSoftware.length}+ Software Tools
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Browse All Software</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover and compare the best software tools across all categories
            </p>
            <SearchInput 
              placeholder="Search all software tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-6 border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-4">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-border rounded-md bg-background text-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select 
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="px-3 py-2 border border-border rounded-md bg-background text-sm"
              >
                {pricingOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>

              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background text-sm"
                >
                  {sortOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="flex border border-border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-4 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>{filteredSoftware.filter(s => s.featured).length} Featured</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>{filteredSoftware.filter(s => s.trending).length} Trending</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{filteredSoftware.filter(s => s.pricing === "free").length} Free Tools</span>
            </div>
            <span className="ml-auto">
              Showing {paginatedSoftware.length} of {filteredSoftware.length} results
            </span>
          </div>
        </div>
      </section>

      {/* Software Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {paginatedSoftware.length > 0 ? (
            <>
              <div className={`grid gap-6 ${
                viewMode === "grid" 
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                  : "grid-cols-1"
              }`}>
                {paginatedSoftware.map((software, index) => (
                  <SoftwareCard key={index} {...software} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <Button
                    variant="outline"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  >
                    Previous
                  </Button>
                  
                  {[...Array(totalPages)].map((_, i) => (
                    <Button
                      key={i + 1}
                      variant={currentPage === i + 1 ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">No software found</h2>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search terms.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Categories");
                  setSelectedPricing("All Pricing");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BrowsePage;