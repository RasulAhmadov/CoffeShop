// 🛠️ YALNIZ HERO KOMPONENTİNİ ÇAĞIRIRIQ
import { Hero } from './components/Hero'; 
import { MenuItems } from './components/menuItems';
import { OurStory } from './components/ourStory';

export const Main = () => {
  return (
    <div className="w-full min-h-screen text-black">
      
      {/* Səhifədə hələlik yalnız Hero section aktivdir */}
      <Hero />
    <OurStory/>
    <MenuItems/>
    </div>
  );
};