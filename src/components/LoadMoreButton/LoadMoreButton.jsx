export const LoadMoreBtn = ({ loadMore, setLoadMore }) => {

    const handleLoadMore = () => {
        setLoadMore(loadMore + 1)
    }

    return (
        <>
            <button onClick={handleLoadMore}>Load more</button>
        </>
    )
}