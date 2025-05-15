
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Award, Briefcase, Code, FileCheck, Layers, Smartphone, Zap } from "lucide-react";

const portfolioItems = [
  {
    id: "healthtech",
    title: "HealthTech Startup Transformation",
    category: "Strategy Consulting",
    image: "/lovable-uploads/a2ed87e9-43bb-4bd0-8b31-6eba008b9cd2.png",
    description: "Guided a healthcare tech startup from concept to $2M seed funding by defining a clear technical roadmap and MVP strategy.",
    challenge: "The startup had an ambitious vision but lacked technical expertise to translate it into a viable product roadmap.",
    solution: "Developed a comprehensive technical strategy, prioritizing features for the MVP and creating a scalable architecture plan.",
    outcome: "Successful funding round and market launch 2 months ahead of schedule. Platform now serves over 50,000 users.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    icon: Award,
    color: "from-futuristic-purple to-futuristic-pink"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform Modernization",
    category: "Technical Due Diligence",
    image: "/lovable-uploads/a2ed87e9-43bb-4bd0-8b31-6eba008b9cd2.png",
    description: "Led the technical assessment and modernization strategy for a legacy e-commerce platform facing scalability issues.",
    challenge: "Aging infrastructure causing frequent outages during peak sales periods, resulting in lost revenue.",
    solution: "Performed comprehensive code audit and infrastructure assessment, then developed a phased migration plan to cloud architecture.",
    outcome: "70% reduction in page load time and 35% increase in conversion rates within 3 months. Zero downtime during Black Friday sales.",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Azure", "Kubernetes"],
    icon: Briefcase,
    color: "from-futuristic-cyan to-futuristic-blue"
  },
  {
    id: "fintech",
    title: "FinTech Product Scoping",
    category: "MVP Development",
    image: "/lovable-uploads/a2ed87e9-43bb-4bd0-8b31-6eba008b9cd2.png",
    description: "Defined the optimal scope for a financial analytics platform, balancing technical constraints with ambitious business goals.",
    challenge: "Complex regulatory requirements and data security concerns threatened to delay time-to-market.",
    solution: "Created a compliance-first architecture approach while maintaining agile development methodology.",
    outcome: "MVP delivered under budget with core features that attracted 3 major clients within first month. Full compliance with financial regulations.",
    technologies: ["Vue.js", "Python", "TensorFlow", "GCP", "Terraform"],
    icon: FileCheck,
    color: "from-futuristic-neonGreen to-futuristic-cyan"
  },
  {
    id: "saas",
    title: "SaaS Application Optimization",
    category: "Performance Tuning",
    image: "/lovable-uploads/a2ed87e9-43bb-4bd0-8b31-6eba008b9cd2.png",
    description: "Optimized a growing SaaS platform experiencing performance degradation and scaling issues.",
    challenge: "Rapidly growing user base caused database bottlenecks and slow response times during peak usage.",
    solution: "Implemented database sharding, query optimization, and server-side caching strategies.",
    outcome: "95% reduction in API response time and 60% lower infrastructure costs while supporting 3x user growth.",
    technologies: ["Angular", "Java Spring", "Redis", "MySQL", "Elasticsearch"],
    icon: Smartphone,
    color: "from-futuristic-blue to-futuristic-purple"
  },
  {
    id: "mobile",
    title: "Cross-Platform Mobile App",
    category: "Mobile Development",
    image: "/lovable-uploads/a2ed87e9-43bb-4bd0-8b31-6eba008b9cd2.png",
    description: "Developed a cross-platform mobile application for a retail client seeking to enhance customer engagement.",
    challenge: "Needed consistent experience across iOS and Android while maintaining native-like performance.",
    solution: "Utilized React Native with custom native modules for platform-specific functionality.",
    outcome: "Single codebase delivered apps to both platforms, reducing development time by 40% and increasing engagement metrics by 25%.",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux", "Jest"],
    icon: Smartphone,
    color: "from-futuristic-purple to-futuristic-neonGreen"
  },
  {
    id: "ai",
    title: "AI-Powered Recommendation Engine",
    category: "Machine Learning Implementation",
    image: "/lovable-uploads/a2ed87e9-43bb-4bd0-8b31-6eba008b9cd2.png",
    description: "Designed and implemented a personalized recommendation system for a content streaming service.",
    challenge: "Generic recommendations were leading to poor engagement and high customer churn.",
    solution: "Built a machine learning pipeline to analyze user behavior and content metadata for personalized suggestions.",
    outcome: "28% increase in average watch time and 15% reduction in subscription cancellations within first quarter.",
    technologies: ["Python", "TensorFlow", "AWS SageMaker", "Apache Kafka", "PostgreSQL"],
    icon: Layers,
    color: "from-futuristic-cyan to-futuristic-neonGreen"
  }
];

const PortfolioShowcase = () => {
  const [activeItemId, setActiveItemId] = useState(portfolioItems[0].id);
  const activeItem = portfolioItems.find(item => item.id === activeItemId);

  const categories = [...new Set(portfolioItems.map(item => item.category))];
  
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-futuristic-blue/10 filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-futuristic-purple/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10 mb-24">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Code className="h-4 w-4 text-futuristic-neonGreen" />
            <span className="text-sm text-white/90">Featured Projects</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-gradient">Portfolio</span> Showcase
          </h1>
          
          <p className="text-lg text-white/90 max-w-2xl mb-12">
            Explore our collection of innovative solutions that have transformed businesses
            across various industries. Each project represents our commitment to excellence
            and technical expertise.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/5 backdrop-blur-md border border-white/20 p-1">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-futuristic-purple data-[state=active]:to-futuristic-blue data-[state=active]:text-white px-6 py-2 transition-all"
              >
                All Projects
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-futuristic-purple data-[state=active]:to-futuristic-blue data-[state=active]:text-white px-6 py-2 transition-all"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <Card 
                  key={item.id}
                  className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-neon group cursor-pointer`}
                  onClick={() => setActiveItemId(item.id)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-30`}></div>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md rounded-full py-1 px-3 text-xs text-white/90">
                      {item.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors">{item.title}</h3>
                    <p className="text-white/90 mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index}
                          className="text-xs py-1 px-2 rounded-md bg-white/10 border border-white/20 text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="text-xs py-1 px-2 rounded-md bg-white/10 border border-white/20 text-white/80">
                          +{item.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group/btn bg-gradient-to-r from-transparent to-white/5 border border-white/10 hover:bg-white/10 text-white"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <Card 
                      key={item.id}
                      className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-neon group cursor-pointer`}
                      onClick={() => setActiveItemId(item.id)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-30`}></div>
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors">{item.title}</h3>
                        <p className="text-white/90 mb-4 line-clamp-2">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.slice(0, 3).map((tech, index) => (
                            <span 
                              key={index}
                              className="text-xs py-1 px-2 rounded-md bg-white/10 border border-white/20 text-white/80"
                            >
                              {tech}
                            </span>
                          ))}
                          {item.technologies.length > 3 && (
                            <span className="text-xs py-1 px-2 rounded-md bg-white/10 border border-white/20 text-white/80">
                              +{item.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button 
                          variant="ghost" 
                          className="w-full justify-between group/btn bg-gradient-to-r from-transparent to-white/5 border border-white/10 hover:bg-white/10 text-white"
                        >
                          View Details
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {activeItem && (
          <div className="mt-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 relative overflow-hidden animate-fade-in">
            <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br ${activeItem.color} opacity-20 blur-3xl`}></div>
            <div className={`absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-gradient-to-br ${activeItem.color} opacity-20 blur-3xl`}></div>
            
            <div className="flex flex-col md:flex-row gap-10 relative">
              <div className="w-full md:w-1/2">
                <div className="relative rounded-lg overflow-hidden mb-6 border border-white/20">
                  <div className={`absolute inset-0 bg-gradient-to-r ${activeItem.color} opacity-30`}></div>
                  <img 
                    src={activeItem.image} 
                    alt={activeItem.title}
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white/90 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeItem.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-sm py-1 px-3 rounded-md bg-white/10 border border-white/20 text-white/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-futuristic-purple to-futuristic-blue text-white hover:shadow-neon transition-all">
                    Request Similar Project
                  </Button>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {activeItem.title}
                </h2>
                <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <activeItem.icon className="h-4 w-4 text-futuristic-neonGreen" />
                  <span className="text-sm text-white/90">{activeItem.category}</span>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Overview</h4>
                    <p className="text-white/90">{activeItem.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-white/90">{activeItem.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-white/90">{activeItem.solution}</p>
                  </div>
                  
                  <div className="p-4 bg-futuristic-dark/50 border border-white/10 rounded-md">
                    <h4 className="text-lg font-semibold text-futuristic-neonGreen mb-2">Outcome</h4>
                    <p className="text-white/90">{activeItem.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-24 text-center">
          <Button size="lg" className="bg-gradient-to-r from-futuristic-purple to-futuristic-blue text-white hover:shadow-neon transition-all px-8 py-6 text-lg rounded-xl">
            Discuss Your Project
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
