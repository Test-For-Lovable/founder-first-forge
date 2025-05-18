
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Compass, Flag, Camera, Mountain, Star } from "lucide-react";

// Travel destinations with experiences
const destinations = [
  {
    id: 1,
    country: 'Japan',
    cities: ['Tokyo', 'Kyoto', 'Osaka'],
    experience: 'Explored ancient temples and embraced the harmony of tradition and technology.',
    year: 2019,
    position: { top: '25%', left: '82%' },
    icon: <Mountain className="h-5 w-5 text-futuristic-neonGreen" />
  },
  {
    id: 2,
    country: 'Italy',
    cities: ['Rome', 'Florence', 'Venice'],
    experience: 'Savored authentic cuisine and marveled at Renaissance art and architecture.',
    year: 2018,
    position: { top: '32%', left: '48%' },
    icon: <Camera className="h-5 w-5 text-futuristic-cyan" />
  },
  {
    id: 3,
    country: 'Thailand',
    cities: ['Bangkok', 'Chiang Mai', 'Phuket'],
    experience: 'Immersed in vibrant street markets and serene beach getaways.',
    year: 2020,
    position: { top: '45%', left: '72%' },
    icon: <Flag className="h-5 w-5 text-futuristic-purple" />
  },
  {
    id: 4,
    country: 'Peru',
    cities: ['Lima', 'Cusco', 'Machu Picchu'],
    experience: 'Hiked the ancient Inca Trail and connected with indigenous cultures.',
    year: 2017,
    position: { top: '60%', left: '28%' },
    icon: <Compass className="h-5 w-5 text-futuristic-pink" />
  },
  {
    id: 5,
    country: 'Australia',
    cities: ['Sydney', 'Melbourne', 'Great Barrier Reef'],
    experience: 'Dove into the underwater wonders and enjoyed the laid-back coastal lifestyle.',
    year: 2016,
    position: { top: '70%', left: '85%' },
    icon: <Star className="h-5 w-5 text-futuristic-neonGreen" />
  }
];

const TravelMapSection = () => {
  const [activeDestination, setActiveDestination] = React.useState<number | null>(null);

  return (
    <section className="py-20 relative bg-futuristic-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-futuristic-purple/10 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
            <Globe className="h-4 w-4 text-futuristic-cyan" />
            <span className="text-sm text-white/90">Travel Adventures</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Global <span className="text-gradient">Journey</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-white/70">
            As a passionate traveler, I've explored diverse cultures and landscapes across continents.
            Each destination has shaped my perspective and fueled my creativity.
          </p>
        </div>
        
        <div className="relative mt-16 mb-28">
          {/* Interactive World Map */}
          <div className="relative aspect-[16/9] bg-futuristic-midnight/50 rounded-xl border border-white/20 overflow-hidden shadow-lg backdrop-blur-sm">
            {/* World Map SVG Background - simplified outlines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[90%] h-[90%] opacity-30">
                <div className="absolute inset-0 bg-[url('https://svgshare.com/i/zCK.svg')] bg-no-repeat bg-contain bg-center"></div>
              </div>
            </div>
            
            {/* Destination Markers */}
            {destinations.map((dest) => (
              <button
                key={dest.id}
                className={`absolute transition-all duration-300 ${
                  activeDestination === dest.id ? 'scale-125 z-10' : 'scale-100 z-0'
                }`}
                style={{ top: dest.position.top, left: dest.position.left }}
                onMouseEnter={() => setActiveDestination(dest.id)}
                onMouseLeave={() => setActiveDestination(null)}
                aria-label={`View details about ${dest.country}`}
              >
                <div className={`w-10 h-10 rounded-full bg-futuristic-dark/80 border-2 ${
                  activeDestination === dest.id 
                    ? 'border-futuristic-cyan shadow-glow' 
                    : 'border-white/30'
                  } flex items-center justify-center transition-all duration-300`}>
                  {dest.icon}
                </div>
              </button>
            ))}
            
            {/* Connection lines - simplified */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
              <path 
                d="M380,180 C450,240 550,180 650,200 C750,220 800,260 850,170" 
                stroke="url(#gradient)" 
                strokeWidth="1.5" 
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse-slow"
              />
              <path 
                d="M380,180 C300,300 250,350 320,400" 
                stroke="url(#gradient)" 
                strokeWidth="1.5" 
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse-slow"
              />
              <path 
                d="M850,170 C820,300 700,350 650,300" 
                stroke="url(#gradient)" 
                strokeWidth="1.5" 
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse-slow"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Travel Card */}
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-3xl">
            <Card className="bg-futuristic-dark/90 backdrop-blur-md border border-white/20 text-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Globe className="text-futuristic-cyan h-5 w-5" />
                  <h3 className="text-xl font-semibold">Travel Stats</h3>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <p className="text-3xl font-bold text-futuristic-purple">5+</p>
                    <p className="text-sm text-white/70">Continents</p>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <p className="text-3xl font-bold text-futuristic-neonGreen">15+</p>
                    <p className="text-sm text-white/70">Countries</p>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <p className="text-3xl font-bold text-futuristic-cyan">30+</p>
                    <p className="text-sm text-white/70">Cities</p>
                  </div>
                </div>
                
                <p className="text-white/70 italic">
                  "Traveling – it leaves you speechless, then turns you into a storyteller." – Ibn Battuta
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Featured Destinations */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.slice(0, 3).map((dest) => (
            <Card key={dest.id} className="bg-futuristic-dark/80 backdrop-blur-sm border border-white/10 text-white hover:border-futuristic-purple/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    {dest.icon}
                    <h3 className="font-bold text-lg">{dest.country}</h3>
                  </div>
                  <span className="text-futuristic-purple text-sm">{dest.year}</span>
                </div>
                <p className="text-white/70 mb-4">{dest.experience}</p>
                <div className="flex flex-wrap gap-2">
                  {dest.cities.map((city) => (
                    <span key={city} className="text-xs py-1 px-2 bg-white/10 rounded-full text-white/70">
                      {city}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelMapSection;
