import ImageListKit from '../imgListKits';

import ExploreRyders from '../../../images/explore-ryders.png';
import RyderHistory from '../../../images/ryder-history.png';
import HomePage from '../../../images/home-page.png';
import MenuBar from '../../../images/menu-bar.png';


const FilmCard = () => {
  return (
    ImageListKit(itemData)
  )
}


const itemData = [
  {
    img: HomePage,
    title: 'Index Page',
  },
  {
    img: MenuBar,
    title: 'Show Menu',
  },
  {
    img: ExploreRyders,
    title: 'Explore Page',
  },
  {
    img: RyderHistory,
    title: 'Rider History',
  },
];


export default FilmCard;