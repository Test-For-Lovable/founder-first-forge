
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CalendarIcon, Clock, User } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { formatDate } from '@/lib/utils';
import { BlogPostType } from '@/types/blog';

interface BlogPostProps {
  post: BlogPostType;
  delayIndex?: number;
}

const BlogPost = ({ post, delayIndex = 0 }: BlogPostProps) => {
  const animationDelay = `${200 + (delayIndex * 200)}ms`;
  
  return (
    <Card className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:shadow-glow transition-shadow duration-300 animate-fade-in" style={{ animationDelay }}>
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://placehold.co/800x400/152535/ffffff?text=AI+Technology';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-futuristic-dark to-transparent opacity-70"></div>
        </div>
      </Link>
      
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-4 text-sm text-white/70">
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} read</span>
          </div>
        </div>
        <Link to={`/blog/${post.slug}`} className="block group">
          <h3 className="text-xl font-bold text-white group-hover:text-futuristic-purple transition-colors duration-200">{post.title}</h3>
        </Link>
      </CardHeader>
      
      <CardContent>
        <p className="text-white/70 line-clamp-3">{post.excerpt}</p>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-futuristic-purple" />
          <span className="text-sm text-white/70">{post.author}</span>
        </div>
        <Button asChild variant="ghost" size="sm" className="text-futuristic-purple hover:text-futuristic-purple/90 hover:bg-futuristic-purple/10 p-0">
          <Link to={`/blog/${post.slug}`}>
            Read More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogPost;

