
import { useState } from 'react';
import { portfolioItems as initialItems, PortfolioItem } from '@/data/portfolioItems';

export const usePortfolioItems = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(initialItems);

  const addPortfolioItem = (item: PortfolioItem) => {
    setPortfolioItems([...portfolioItems, item]);
  };

  const removePortfolioItem = (id: string) => {
    setPortfolioItems(portfolioItems.filter(item => item.id !== id));
  };

  const updatePortfolioItem = (id: string, updatedItem: Partial<PortfolioItem>) => {
    setPortfolioItems(
      portfolioItems.map(item => 
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  return {
    portfolioItems,
    addPortfolioItem,
    removePortfolioItem,
    updatePortfolioItem
  };
};

export default usePortfolioItems;
