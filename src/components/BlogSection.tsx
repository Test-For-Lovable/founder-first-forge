
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';
import { blogPosts } from '@/data/blogPosts';

const BlogSection = () => {
  // Show only the 2 most recent blog posts
  const recentPosts = blogPosts.slice(0, 2);
  
  return (
    <section id="blog" className="relative py-24 bg-futuristic-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-futuristic-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-futuristic-cyan/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Latest <span className="text-gradient">Tech Insights</span>
          </h2>
          <p className="text-white/70 text-lg animate-fade-in">
            Stay updated with Usama's analysis of cutting-edge technology trends and AI innovations that are reshaping the business landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {recentPosts.map((post, index) => (
            <BlogPost 
              key={post.id}
              post={post}
              delayIndex={index}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-6 py-6 text-lg rounded-xl inline-flex items-center gap-2 animate-fade-in" style={{animationDelay: "800ms"}}>
            <Link to="/blog">
              <BookOpen className="h-5 w-5" />
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

