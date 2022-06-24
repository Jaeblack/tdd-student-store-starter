import "./Search.css"

export default function Search() {
    return (
        < div id="Search">
            <h1>Search</h1>
        </div >
    )
}

export function SearchInput() {
    return (
        < div id="search">
            <input type="text" name="search-input" id="search-input" />
        </div >
    )
}

export function SearchCategories() {
    return (
        < div id="categories">
            <h1>Categories</h1>
        </div >
    )
}
