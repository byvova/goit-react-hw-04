import css from './ImageCard.module.css';

export const ImageCard = ({ dataItem, active, setActive }) => {
    return (
        <div className={`${css.modal} ${active ? css.active : ''}`} onClick={() => setActive(false)}>
            <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
                <img className={css.modalImg} src={dataItem.urls.regular} alt="" />
            </div>
        </div>
    );
};
