import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

export const SearchBar = ({ setSearch }) => {

    const notifyError = () => {
        toast.error('Please write something');
    }

    const notifySuccess = () => {
        toast.success('Success');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const search = e.target.elements[0].value
        setSearch(search);
        search == '' ? notifyError() : notifySuccess()
    }



    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
            <Toaster />
        </header>
    );
};
