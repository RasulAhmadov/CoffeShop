// 🛠️ YALNIZ HERO KOMPONENTİNİ ÇAĞIRIRIQ
import { ExperienceGallery } from './components/experienceGallery';
import { Hero } from './components/Hero'; 

import { MenuItems } from './components/menuItems';
import { OurStory } from './components/ourStory';
import { LocationHours } from './components/locationHours';
import { BookTable } from './components/bookTable';

export const Main = () => {
  return (
    <div className="w-full min-h-screen text-black">
      
      {/* Səhifədə hələlik yalnız Hero section aktivdir */}
      <Hero />
    <OurStory/>
    <MenuItems/>
    <ExperienceGallery />
        <LocationHours />
        <BookTable />
    </div>
  );
};