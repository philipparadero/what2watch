import React from 'react'

const SearchResult = (props) => {

    console.log("here" + props.SearchResult)
    return (
        <div>
            {props.SearchResult}
        </div>
    )
}

export default SearchResult
