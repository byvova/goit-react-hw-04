import { useEffect, useState } from 'react'
import './App.module.css'
import { SearchBar } from '../SearchBar/SearchBar'
import axios from 'axios'
import { ImageGallery } from '../ImageGallery/ImageGallery'
import { ImageCard } from '../ImageCard/ImageCard'

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const KEY = 'd-390Tt5FKLSiqiJqBT5KwzZKa9mGOhmMo1TUmrzu8I'
        const url = `https://api.unsplash.com/search/collections?page=1&per_page=12&query=${search}&client_id=${KEY}`
        setData([])
        const promise = await axios.get(url)
        const response = await promise.data
        setData(response);
      } catch {
        console.log(console.error('error'));
      }
    }
    fetchData()

  }, [search]);




  return (
    <>
      <SearchBar setSearch={setSearch}></SearchBar>
      <ImageGallery data={data} />
    </>
  )
}

export default App
