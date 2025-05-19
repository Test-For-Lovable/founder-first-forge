
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Award, Briefcase, FileCheck, PenSquare, Plus, Trash } from "lucide-react";
import usePortfolioItems from '@/hooks/usePortfolioItems';
import { useToast } from '@/hooks/use-toast';

const iconMap: Record<string, React.ElementType> = {
  "Award": Award,
  "Briefcase": Briefcase,
  "FileCheck": FileCheck
};

const PortfolioManagement = () => {
  const { portfolioItems, removePortfolioItem } = usePortfolioItems();
  const { toast } = useToast();

  const handleDelete = (id: string) => {
    removePortfolioItem(id);
    toast({
      title: "Portfolio item removed",
      description: "The portfolio item has been successfully removed.",
    });
  };

  return (
    <div className="min-h-screen bg-futuristic-dark text-white">
      <NavBar />
      <div className="container mx-auto px-4 py-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Portfolio Management</h1>
          <Button 
            className="bg-gradient-to-r from-futuristic-purple to-futuristic-blue text-white hover:shadow-neon transition-all flex items-center gap-2"
            onClick={() => window.location.href = '/portfolio-editor'}
          >
            <Plus className="h-4 w-4" />
            Add New Portfolio Item
          </Button>
        </div>
        
        <div className="bg-futuristic-midnight/60 rounded-xl border border-futuristic-purple/30 p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Icon</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="max-w-[200px]">Description</TableHead>
                <TableHead className="max-w-[200px]">Outcome</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {portfolioItems.map((item) => {
                const Icon = iconMap[item.icon] || Award;
                
                return (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell className="max-w-[200px] truncate" title={item.description}>
                      {item.description}
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate" title={item.outcome}>
                      {item.outcome}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30"
                          onClick={() => window.location.href = `/portfolio-editor/${item.id}`}
                        >
                          <PenSquare className="h-4 w-4 text-blue-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/30"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
              {portfolioItems.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No portfolio items found. Create your first one!
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioManagement;
