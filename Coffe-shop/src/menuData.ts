// src/menuData.ts

// 📸 Kartların şəkillərini və ikonunu xarici fayla import edirik
import menuImg1 from './assets/img/coffe.jpg'; // Öz qovluq yoluna görə düzəldə bilərsən
import menuImg2 from './assets/img/coffe.jpg'; 
import menuImg3 from './assets/img/coffe.jpg'; 
import menuImg4 from './assets/img/coffe.jpg'; 
import menuImg5 from './assets/img/coffe.jpg'; 
import menuImg6 from './assets/img/coffe.jpg'; 
import plusIcon from './assets/img/cofe_icon.png'; // "+ Add to order" yanındakı ikon

export interface MenuCardType {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: string;
  icon: string;
  actionText: string;
}

// Xaricdən çağırıla bilməsi üçün mütləq "export" edirik
export const MENU_DATA = [
  {
    id: 1,
    img: menuImg1,
    title: 'Cappuccino',
    desc: 'Rich espresso with velvety steamed milk and foam',
    price: '$4.50',
    icon: plusIcon,
    actionText: '+ Add to order'
  },
  {
    id: 2,
    img: menuImg2,
    title: 'Cold Brew',
    desc: 'Smooth, refreshing, perfectly balanced cold coffee',
    price: '$5.00',
    icon: plusIcon,
    actionText: '+ Add to order'
  },
  {
    id: 3,
    img: menuImg3,
    title: 'Caramel Latte',
    desc: 'Sweet caramel blended with espresso and milk',
    price: '$5.50',
    icon: plusIcon,
    actionText: '+ Add to order'
  },
  {
    id: 4,
    img: menuImg4,
    title: 'Butter Croissant',
    desc: 'Flaky, buttery, baked fresh daily',
    price: '$3.50',
    icon: plusIcon,
    actionText: '+ Add to order'
  },
  {
    id: 5,
    img: menuImg5,
    title: 'Avocado Toast',
    desc: 'Smashed avocado on sourdough with cherry tomatoes',
    price: '$7.00',
    icon: plusIcon,
    actionText: '+ Add to order'
  },
  {
    id: 6,
    img: menuImg6,
    title: 'Tiramisu',
    desc: 'Classic Italian dessert with espresso and mascarpone',
    price: '$6.00',
    icon: plusIcon,
    actionText: '+ Add to order'
  }
];