
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { BlogPostType } from '@/types/blog';
import { blogPosts } from '@/data/blogPosts';
import BlogPost from '@/components/BlogPost';

const Blog = () => {
  return (
    <div className="min-h-screen bg-futuristic-dark text-white">
      <NavBar />
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Usama's <span className="text-gradient">Tech Insights</span>
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Expert analysis on the latest AI advancements, technology trends, and strategic implementation insights for forward-thinking businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post: BlogPostType, index: number) => (
            <BlogPost 
              key={post.id} 
              post={post} 
              delayIndex={index}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

