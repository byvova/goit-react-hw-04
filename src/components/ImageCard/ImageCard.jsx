import css from './ImageCard.module.css';

export const ImageCard = ({ item, handleItemClick }) => {

    return (
        <>
            <li onClick={() => handleItemClick(item)} className={css.listItem}>
                <div>
                    <img className={css.listImage} src={item.cover_photo.urls.small} alt={item.alt_description} />
                </div>
            </li>
        </>
    );
};
