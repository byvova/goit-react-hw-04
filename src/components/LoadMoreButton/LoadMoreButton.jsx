import css from './LoadMoreButton.module.css'


export const LoadMoreBtn = ({ loadMore, setLoadMore }) => {

    const handleLoadMore = () => {
        setLoadMore(loadMore + 1)
    }

    return (
        <>
            <button className={css.loadMoreBtn} onClick={handleLoadMore}>Load more</button>
        </>
    )
}