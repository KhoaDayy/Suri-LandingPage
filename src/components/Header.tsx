import React from 'react';
import { Navbar } from './layout/Navbar';

export interface HeaderProps {
  onExploreStory?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  return <Navbar />;
};

export default Header;
