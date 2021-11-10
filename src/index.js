import "../style.css";
import imageSrc from '../assets/I.jpg';


console.log('work rollup');

const myPhoto = document.createElement('img');
myPhoto.src = imageSrc;
myPhoto.classList = 'photo';
document.body.append(myPhoto);
