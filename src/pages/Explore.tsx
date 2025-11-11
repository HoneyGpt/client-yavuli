import { useState } from "react";
import Navbar from "@/components/Navbar";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { SlidersHorizontal, X } from "lucide-react";
import dummyListings from "@/data/dummyListings.json";

const Explore = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        {/* Hero Banner */}
        <div className="mb-6 rounded-xl bg-gradient-hero p-8 text-white animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Discover Student Marketplace</h1>
          <p className="text-white/90">Find amazing deals from verified students across India</p>
        </div>

        {/* Quick Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 animate-fade-in">
          <Badge variant="secondary" className="cursor-pointer hover:bg-accent hover:text-white whitespace-nowrap">
            🔥 Trending
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover:bg-accent hover:text-white whitespace-nowrap">
            👁️ Most Viewed
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover:bg-accent hover:text-white whitespace-nowrap">
            💰 Low Price
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover:bg-accent hover:text-white whitespace-nowrap">
            ✨ New Arrivals
          </Badge>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0 animate-fade-in">
            <div className="sticky top-20">
              <FilterSidebar />
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          {showFilters && (
            <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden">
              <div className="fixed left-0 top-0 h-full w-80 bg-card border-r border-border overflow-y-auto p-4 animate-fade-in">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 animate-fade-in">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(true)}
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <p className="text-sm text-muted-foreground">
                  {dummyListings.length} products found
                </p>
              </div>
              
              <Select defaultValue="relevance">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="views">Most Viewed</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fade-in">
              {dummyListings.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  images={product.images}
                  location_city={product.location_city}
                  college_name={product.college_name}
                  condition={product.condition}
                  views={product.views}
                  favorites={product.favorites}
                  verified={product.verified}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
