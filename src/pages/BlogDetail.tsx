
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';
import { useBlogPosts } from '@/hooks/useBlogPosts';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getBlogPostBySlug, loading } = useBlogPosts();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (loading) {
    return (
      <div className="min-h-screen bg-futuristic-dark text-white">
        <NavBar />
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="max-w-3xl mx-auto">
            <div className="h-64 bg-white/5 backdrop-blur-sm rounded-lg animate-pulse mb-8"></div>
            <div className="h-12 bg-white/5 backdrop-blur-sm rounded-lg w-3/4 animate-pulse mb-4"></div>
            <div className="h-6 bg-white/5 backdrop-blur-sm rounded-lg w-1/2 animate-pulse mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-5 bg-white/5 backdrop-blur-sm rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>
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
          <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
          <p className="text-white/70 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Function to render markdown content
  const renderContent = (content: string) => {
    // Very simple markdown rendering for headings, paragraphs, and lists
    const html = content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold my-6">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold my-5">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold my-4">$1</h3>')
      .replace(/^(?!\s*#|\s*-|\s*\d+\.)(.*$)/gm, '<p class="my-3">$1</p>')
      .replace(/^- (.*$)/gm, '<li class="ml-5">$1</li>')
      .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-5">$2</li>')
      // Replace consecutive empty lines with a single paragraph break
      .replace(/(<\/p>\s*<p>)+/g, '</p><p>');

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <div className="min-h-screen bg-futuristic-dark text-white">
      <NavBar />
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button
              asChild
              variant="ghost"
              className="mb-4 hover:bg-white/5 -ml-2"
            >
              <Link to="/blog">
                <ChevronLeft className="mr-1 h-4 w-4" /> Back to Blogs
              </Link>
            </Button>
            
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg mb-8">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://placehold.co/800x400/152535/ffffff?text=AI+Technology';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-futuristic-dark opacity-70"></div>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/70 mb-6">
              <div className="flex items-center">
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center">
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center">
                <span>{post.readTime} read</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="bg-futuristic-purple/30 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="prose prose-invert max-w-none">
            {renderContent(post.content)}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <h3 className="text-xl font-semibold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                className="border-white/20 text-white"
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
              >
                Twitter
              </Button>
              <Button
                variant="outline" 
                className="border-white/20 text-white"
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
              >
                LinkedIn
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
