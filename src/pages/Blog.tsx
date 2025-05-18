
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BlogPost from '@/components/BlogPost';
import { useBlogPosts } from '@/hooks/useBlogPosts';

const Blog = () => {
  const { blogPosts, loading } = useBlogPosts();

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
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 h-96 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPost 
                key={post.id} 
                post={post} 
                delayIndex={index}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
