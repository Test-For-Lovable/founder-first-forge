
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import usePortfolioItems from '@/hooks/usePortfolioItems';
import { PortfolioItem } from '@/data/portfolioItems';

const iconOptions = [
  { value: "Award", label: "Award" },
  { value: "Briefcase", label: "Briefcase" },
  { value: "FileCheck", label: "FileCheck" },
];

const colorOptions = [
  { value: "from-futuristic-purple to-futuristic-pink", label: "Purple to Pink" },
  { value: "from-futuristic-cyan to-futuristic-blue", label: "Cyan to Blue" },
  { value: "from-futuristic-neonGreen to-futuristic-cyan", label: "Neon Green to Cyan" },
];

const PortfolioEditor = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const { portfolioItems, addPortfolioItem, updatePortfolioItem } = usePortfolioItems();
  const { toast } = useToast();

  const [formData, setFormData] = useState<Partial<PortfolioItem>>({
    title: '',
    category: '',
    description: '',
    outcome: '',
    icon: 'Award',
    color: 'from-futuristic-purple to-futuristic-pink',
  });

  const isEditing = !!slug;

  useEffect(() => {
    if (isEditing) {
      const existingItem = portfolioItems.find((item) => item.id === slug);
      if (existingItem) {
        setFormData(existingItem);
      }
    }
  }, [isEditing, slug, portfolioItems]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.category || !formData.description || !formData.outcome) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (isEditing) {
      updatePortfolioItem(slug, formData);
      toast({
        title: "Portfolio item updated",
        description: "Your portfolio item has been successfully updated.",
      });
    } else {
      const newItem: PortfolioItem = {
        ...formData as PortfolioItem,
        id: Date.now().toString(),
      };
      addPortfolioItem(newItem);
      toast({
        title: "Portfolio item created",
        description: "Your new portfolio item has been successfully created.",
      });
    }

    navigate('/portfolio-management');
  };

  return (
    <div className="min-h-screen bg-futuristic-dark text-white">
      <NavBar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold mb-8">
          {isEditing ? 'Edit Portfolio Item' : 'Create New Portfolio Item'}
        </h1>
        
        <div className="bg-futuristic-midnight/60 rounded-xl border border-futuristic-purple/30 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Title
              </label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="bg-futuristic-dark/40 border-futuristic-purple/30"
                placeholder="Enter project title"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>
              <Input
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="bg-futuristic-dark/40 border-futuristic-purple/30"
                placeholder="Enter project category (e.g. Strategy Consulting)"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="bg-futuristic-dark/40 border-futuristic-purple/30"
                placeholder="Enter project description"
                rows={4}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="outcome" className="text-sm font-medium">
                Outcome
              </label>
              <Textarea
                id="outcome"
                name="outcome"
                value={formData.outcome}
                onChange={handleChange}
                className="bg-futuristic-dark/40 border-futuristic-purple/30"
                placeholder="Enter project outcome"
                rows={2}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="icon" className="text-sm font-medium">
                  Icon
                </label>
                <Select
                  value={formData.icon}
                  onValueChange={(value) => handleSelectChange('icon', value)}
                >
                  <SelectTrigger className="bg-futuristic-dark/40 border-futuristic-purple/30">
                    <SelectValue placeholder="Select an icon" />
                  </SelectTrigger>
                  <SelectContent>
                    {iconOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="color" className="text-sm font-medium">
                  Color Scheme
                </label>
                <Select
                  value={formData.color}
                  onValueChange={(value) => handleSelectChange('color', value)}
                >
                  <SelectTrigger className="bg-futuristic-dark/40 border-futuristic-purple/30">
                    <SelectValue placeholder="Select a color scheme" />
                  </SelectTrigger>
                  <SelectContent>
                    {colorOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => navigate('/portfolio-management')}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-futuristic-purple to-futuristic-blue text-white hover:shadow-neon transition-all"
              >
                {isEditing ? 'Update Portfolio Item' : 'Create Portfolio Item'}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioEditor;
