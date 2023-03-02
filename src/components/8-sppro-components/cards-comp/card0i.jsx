import ImageListKit from '../imgListKits';

import LoginPage from '../../../images/Screen 4.png';
import CartsPage from '../../../images/Screen 3.png';
import ShopPage from '../../../images/Screen 2.png';
import LandingPage from '../../../images/Screen 1.png';


const BaleCard = () => {
  return (
    ImageListKit(itemData)
  )
}


const itemData = [
  {
    img: LandingPage,
    title: 'Home Page',
  },
  {
    img: ShopPage,
    title: 'Shop Page',
  },
  {
    img: CartsPage,
    title: 'Checkout',
  },
  {
    img: LoginPage,
    title: 'Login',
  }
];


export default BaleCard;