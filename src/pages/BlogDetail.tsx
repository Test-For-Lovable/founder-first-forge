
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';
import { BlogPostType } from '@/types/blog';
import { formatDate } from '@/lib/utils';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Find the post with the matching slug
    const foundPost = blogPosts.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
    }
    
    setLoading(false);
  }, [slug]);
  
  // Convert markdown-like content to HTML sections
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mb-6 mt-8">{paragraph.substring(2)}</h1>;
      } else if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mb-4 mt-8">{paragraph.substring(3)}</h2>;
      } else if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold mb-3 mt-6">{paragraph.substring(4)}</h3>;
      } else if (paragraph.startsWith('- ')) {
        return (
          <ul key={index} className="list-disc pl-6 mb-4">
            {paragraph.split('\n').map((item, i) => (
              <li key={i} className="mb-2">{item.substring(2)}</li>
            ))}
          </ul>
        );
      } else if (paragraph.trim() === '') {
        return null;
      } else {
        return <p key={index} className="mb-4 text-white/80 leading-relaxed">{paragraph}</p>;
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-futuristic-dark text-white">
        <NavBar />
        <div className="container mx-auto px-4 pt-32 pb-24 flex justify-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="min-h-screen bg-futuristic-dark text-white">
        <NavBar />
        <div className="container mx-auto px-4 pt-32 pb-24 text-center">
          <h1 className="text-3xl font-bold mb-6">Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild variant="outline" className="border-white/20 bg-white/5">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-futuristic-dark text-white">
      <NavBar />
      <div className="w-full h-96 relative">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://placehold.co/1200x400/152535/ffffff?text=AI+Technology';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-futuristic-dark to-transparent opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Button asChild variant="ghost" className="mb-8 hover:bg-white/5">
          <Link to="/blog" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Articles
          </Link>
        </Button>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-10 text-white/70">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime} read</span>
            </div>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none">
            {renderContent(post.content)}
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-wrap justify-between items-center">
              <div className="mb-4 md:mb-0">
                <span className="text-sm text-white/60">Tags:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Button variant="outline" className="border-white/20 bg-white/5 flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share Article
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;

