import ImageListKit from '../imgListKits';

import FrontPage from '../../../images/film-farm-00.png';
import Compare from '../../../images/film-farm-03.png';
import Second from '../../../images/film-farm-01.png';
import First from '../../../images/film-farm-02.png';


const FilmCard = () => {
  return (
    ImageListKit(itemData)
  )
}


const itemData = [
  {
    img: FrontPage,
    title: 'Front Page',
  },
  {
    img: First,
    title: 'Primary Search',
  },
  {
    img: Second,
    title: 'Secondary Search',
  },
  {
    img: Compare,
    title: 'Compare Search',
  },
];


export default FilmCard;