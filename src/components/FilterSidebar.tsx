import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const categories = [
    "Electronics",
    "Books & Study Material",
    "Furniture",
    "Clothing",
    "Services",
    "Sports & Outdoors",
    "Music & Instruments",
  ];

  const conditions = ["New", "Like New", "Used"];

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" className="text-accent">
          Clear All
        </Button>
      </div>

      <Separator />

      <Accordion type="multiple" defaultValue={["category", "price", "condition"]} className="w-full">
        {/* Categories */}
        <AccordionItem value="category">
          <AccordionTrigger className="text-sm font-semibold">Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={category} />
                  <Label
                    htmlFor={category}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range */}
        <AccordionItem value="price">
          <AccordionTrigger className="text-sm font-semibold">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={100000}
                step={1000}
                className="w-full"
              />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">₹{priceRange[0].toLocaleString()}</span>
                <span className="text-muted-foreground">₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Condition */}
        <AccordionItem value="condition">
          <AccordionTrigger className="text-sm font-semibold">Condition</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {conditions.map((condition) => (
                <div key={condition} className="flex items-center space-x-2">
                  <Checkbox id={condition} />
                  <Label
                    htmlFor={condition}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {condition}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Verified Sellers */}
        <AccordionItem value="verified">
          <AccordionTrigger className="text-sm font-semibold">Seller Type</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="verified-only" />
              <Label htmlFor="verified-only" className="text-sm font-normal cursor-pointer">
                Only verified sellers
              </Label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full bg-gradient-hero text-white hover:opacity-90">
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterSidebar;
