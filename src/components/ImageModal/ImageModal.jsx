import css from './ImageModal.module.css';

export const ImageModal = ({ dataItem, active, setActive }) => {
    return (

        <div className={`${css.modal} ${active ? css.active : ''}`} onClick={() => setActive(false)}>
            <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
                <img className={css.modalImg} src={dataItem.cover_photo.urls.regular} alt={dataItem.cover_photo.alt_description} />
                <div>
                    <p>Title: {dataItem.title}</p>
                    <p>Likes: <span>{dataItem.cover_photo.likes}</span></p>

                </div>
            </div>
        </div>
    );
};  
