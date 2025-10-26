import { Heart, MapPin, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  images: string[];
  location_city: string;
  college_name: string;
  condition: string;
  views: number;
  favorites: number;
  verified?: boolean;
}

const ProductCard = ({
  id,
  title,
  price,
  images,
  location_city,
  college_name,
  condition,
  views,
  favorites,
  verified,
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <Link to={`/product/${id}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={images[0]}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/90 hover:bg-white hover:text-destructive"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Badge className="absolute top-2 left-2 bg-accent text-white">
            {condition}
          </Badge>
        </div>
      </Link>

      <div className="p-3 space-y-2">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-sm line-clamp-1 text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-lg font-bold text-primary">₹{price.toLocaleString()}</p>
        
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span className="line-clamp-1">{location_city}</span>
          {verified && (
            <Badge variant="outline" className="ml-auto text-xs h-5 px-1 border-accent text-accent">
              ✓ Verified
            </Badge>
          )}
        </div>
        
        <p className="text-xs text-muted-foreground line-clamp-1">{college_name}</p>
        
        <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1">
          <div className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="h-3 w-3" />
            <span>{favorites}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
