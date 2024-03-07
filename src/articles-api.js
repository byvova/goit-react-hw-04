import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com"
const accessKey = "d-390Tt5FKLSiqiJqBT5KwzZKa9mGOhmMo1TUmrzu8I"

export const fetchCollections = async (search) => {
    const promise = await axios.get("/search/collections", {
        headers: {
            Authorization: `Client-ID ${accessKey}`,
        },
        params: {
            query: search,
            per_page: 12,
            page: 1
        }
    })
    return promise.data.results
}

export const fetchPagination = async (search, loadMore) => {
    const promise = await axios.get("/search/collections", {
        headers: {
            Authorization: `Client-ID ${accessKey}`,
        },
        params: {
            query: search,
            per_page: 12,
            page: loadMore
        }
    })
    return promise.data.results
}