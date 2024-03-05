import { useEffect, useState } from 'react'
import './App.module.css'
import { SearchBar } from '../SearchBar/SearchBar'
import axios from 'axios'
import { ImageGallery } from '../ImageGallery/ImageGallery'
import { ImageModule } from '../ImageModule/ImageModule'
import { DNA } from 'react-loader-spinner'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { LoadMoreBtn } from '../LoadMoreButton/LoadMoreButton'

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [active, setActive] = useState(false);
  const [clickedItem, setClickedItem] = useState(null)
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const KEY = 'd-390Tt5FKLSiqiJqBT5KwzZKa9mGOhmMo1TUmrzu8I'
        const url = `https://api.unsplash.com/search/collections?page=${loadMore}&per_page=12&query=${search}&client_id=${KEY}`
        setData([])
        const promise = await axios.get(url)
        const response = await promise.data.results

        setData(response);
        setLoading(false);
      } catch {
        console.log(console.error('error'));
      }
    }
    fetchData()

  }, [search, loadMore]);





  return (
    <>
      <SearchBar setSearch={setSearch}></SearchBar>
      {data.length > 0 ? <ImageGallery data={data} setActive={setActive} setClickedItem={setClickedItem} /> : <ErrorMessage />}

      {active ? <ImageModule dataItem={clickedItem} active={active} setActive={setActive} /> : null}
      {loading && <DNA
        visible={true}
        height="80"
        width="10000"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper" />}
      {loading == false ? <LoadMoreBtn loadMore={loadMore} setLoadMore={setLoadMore} /> : null}
    </>
  )
}

export default App
