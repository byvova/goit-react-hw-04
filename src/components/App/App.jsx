import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.module.css'
import { SearchBar } from '../SearchBar/SearchBar'

import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn'
import { ImageGallery } from '../ImageGallery/ImageGallery'
import { Loader } from '../Loader/Loader'
import { fetchCollections, fetchPagination } from '../../articles-api'
import { ImageModal } from '../ImageModal/ImageModal'



function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [active, setActive] = useState(false);
  const [clickedItem, setClickedItem] = useState(null)
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(1);



  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setData([])
        const response = await fetchCollections(search)
        setData(response);
        setLoading(false);
      } catch {
        console.log(console.error(Error));
      }
    }
    fetchData()

  }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchPagination(search, loadMore);
        setData(prevData => [...prevData, ...response]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [loadMore]);






  return (
    <>
      <SearchBar setSearch={setSearch}></SearchBar>
      {data.length > 0 ? <ImageGallery data={data} setActive={setActive} setClickedItem={setClickedItem} /> : <ErrorMessage />}

      {active ? <ImageModal dataItem={clickedItem} active={active} setActive={setActive} /> : null}
      {loading && <Loader />}
      {loading || data.length === 0 ? null : <LoadMoreBtn loadMore={loadMore} setLoadMore={setLoadMore} />}

    </>
  )
}

export default App