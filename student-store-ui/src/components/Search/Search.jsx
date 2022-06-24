import "./Search.css"

export default function Search({ category, setCategory }) {
    return (
        < div id="Search">
            <h1>Search</h1>
            <SearchInput category={category} setCategory={setCategory} />
            <SearchCategories category={category} setCategory={setCategory} />
        </div >
    )
}

export function SearchInput({ category, setCategory }) {
    return (
        < div id="search">
            <label htmlFor="search-input"> Search </label>
            <input type="text" name="search-input" id="search-input" placeholder="search" value={category.word}
                onChange={
                    (e) => {
                        setCategory((prev) => { return { ...prev, word: e.target.value } })
                    }
                }
            />
        </div >
    )
}

export function SearchCategories({ category, setCategory }) {
    console.log(category);
    return (
        < div id="categories">
            <button className="toggle-categorires">toggle</button>
            <ul>
                <li className={category.category === '*' ? 'is-active': ''}><button onClick={e => {
                    setCategory(prev => {
                        return { ...prev, category: '*' }
                    })
                }}>
                    All categories
                </button> </li>
                <li className={category.category === 'clothing' ? 'is-active': ''} ><button onClick={e => {
                    setCategory(prev => {
                        return { ...prev, category: 'clothing' }
                    })
                }}>
                    Clothing
                </button> </li>
                <li className={category.category === 'food' ? 'is-active': ''}><button onClick={e => {
                    setCategory(prev => {
                        return { ...prev, category: 'food' }
                    })
                }}>
                    Food
                </button> </li>
                <li className={category.category === 'accessories' ? 'is-active': ''}><button onClick={e => {
                    setCategory(prev => {
                        return { ...prev, category: 'accessories' }
                    })
                }}>
                    Accessories
                </button> </li>
                <li className={category === 'tech' ? 'is-active': ''}><button onClick={e => {
                    setCategory(prev => {
                        return { ...prev, category: 'tech' }
                    })
                }}>
                    Tech
                </button> </li>
            </ul>
        </div >
    )
}
