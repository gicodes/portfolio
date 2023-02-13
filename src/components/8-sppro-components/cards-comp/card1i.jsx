import ImageListKit from '../imgListKits';

import LoginPage from '../../../images/bale+factory+signin+page.png';
import SignupPage from '../../../images/bale+factory+signup+page.png';
import LandingPage from '../../../images/bale+factory+landing+page.png';
import CartsPage from '../../../images/bale+factory+carts+page+demo.png';


const BaleCard = () => {
  return (
    ImageListKit(itemData)
  )
}


const itemData = [
  {
    img: LandingPage,
    title: 'Landing Page',
  },
  {
    img: LoginPage,
    title: 'Login',
  },
  {
    img: SignupPage,
    title: 'Sign up',
  },
  {
    img: CartsPage,
    title: 'Cart',
  },
];


export default BaleCard;