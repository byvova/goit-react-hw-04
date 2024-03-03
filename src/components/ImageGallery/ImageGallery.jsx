import { useState } from 'react';
import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ data }) => {
    const [active, setActive] = useState(false);
    const [clickedItem, setClickedItem] = useState(null)

    const handleItemClick = (item) => {
        setActive(true)
        setClickedItem(item);
    };

    return (
        <>
            <ul className={css.container}>
                {data.map(item => (
                    <li onClick={() => handleItemClick(item)} key={item.id} className={css.listItem}>
                        <div>
                            <img className={css.listImage} src={item.urls.small} alt={item.alt_description} />
                        </div>
                    </li>
                ))}
            </ul>

            {active ? <ImageCard dataItem={clickedItem} active={active} setActive={setActive} /> : null}
        </>
    );
};
