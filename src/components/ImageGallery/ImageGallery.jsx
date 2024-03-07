import css from './ImageGallery.module.css';
import { ImageCard } from '../ImageCard/ImageCard';


export const ImageGallery = ({ data, setActive, setClickedItem }) => {

    const handleItemClick = (item) => {
        setActive(true)
        setClickedItem(item);
    };

    return (
        <ul className={css.container}>
            {data.map((item, index) => (
                <ImageCard key={index} item={item} handleItemClick={handleItemClick} />
            ))}
        </ul>
    );
};
