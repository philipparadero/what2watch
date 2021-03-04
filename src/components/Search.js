import React, {useState,useEffect}from 'react'
import { BiSearch } from "react-icons/bi";
import './Search.css'
import axios from 'axios'

const Search = (props) => {

    const [term, setTerm] = useState('')

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onFormSubmit(term)
    }
    

    // const [results, setResults] = useState([])
    // const [debouncedTerm, setDebouncedTerm] = useState(term);

    // useEffect(()=>{
    //     const timerId = setTimeout(()=>{
    //         setDebouncedTerm(term);
    //     }, 1000);
    
    //     return ()=>{
    //         clearTimeout(timerId);
    //     };
    // }, [term])

    // useEffect(()=>{
    //     const search = async () => {
    //         const data = await axios.get(`https://imdb8.p.rapidapi.com/title/find`, {
    //             params: 
    //             { 
    //                 'q' : term
    //             },
    //             headers: 
    //                 {
    //                     "x-rapidapi-key": "102044aa7cmshb5894034f7d3ac5p159303jsn6564d77be785",
    //                     "x-rapidapi-host": "imdb8.p.rapidapi.com",
    //                     "useQueryString": true
    //                 }
    //         })
    //         setResults(data.data.results)
    //     }
    //     search();
    // },[debouncedTerm]);

    // console.log(results)
    return (
        <div>
            <form onSubmit={onFormSubmit} className="form-container">
                <input  
                    value={term}
                    onChange={e=> setTerm(e.target.value)}
                    className="search-field" 
                    type="text" 
                    placeholder="Search what2watch" 
                    name="search" 
                />
                <button className="search-button" type="submit"><BiSearch className='search-icon'/></button>
            </form>
            {/* <Link to={`/searchreults/`}></Link> */}
        </div>
    )
}

export default Search
