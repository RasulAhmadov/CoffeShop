


import menuImg1 from './assets/img/cappucino.png'; 
import menuImg2 from './assets/img/coldbrew.png'; 
import menuImg3 from './assets/img/caramellatte.png'; 
import menuImg4 from './assets/img/butter.png'; 
import menuImg5 from './assets/img/avocado.png'; 
import menuImg6 from './assets/img/tiramisu.png'; 
import plusIcon from './assets/img/cofe_icon.png'; 

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