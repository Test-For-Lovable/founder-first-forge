
import { Award, Briefcase, FileCheck } from "lucide-react";

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  outcome: string;
  icon: string;
  color: string;
}

export const portfolioItems = [
  {
    id: "1",
    title: "Healthcare Tech Platform Transformation",
    category: "Strategy Consulting",
    description: "Usama guided a healthcare tech startup from concept to $2M seed funding by defining a clear technical roadmap and MVP strategy.",
    outcome: "Successful funding round and market launch 2 months ahead of schedule.",
    icon: "Award",
    color: "from-futuristic-purple to-futuristic-pink"
  },
  {
    id: "2",
    title: "E-Commerce Platform Modernization",
    category: "Technical Due Diligence",
    description: "Usama led the technical assessment and modernization strategy for a legacy e-commerce platform facing scalability issues.",
    outcome: "70% reduction in page load time and 35% increase in conversion rates within 3 months.",
    icon: "Briefcase",
    color: "from-futuristic-cyan to-futuristic-blue"
  },
  {
    id: "3",
    title: "FinTech Product Development",
    category: "MVP Development",
    description: "Usama defined the optimal scope for a financial analytics platform, balancing technical constraints with ambitious business goals.",
    outcome: "MVP delivered under budget with core features that attracted 3 major clients within first month.",
    icon: "FileCheck",
    color: "from-futuristic-neonGreen to-futuristic-cyan"
  }
];
