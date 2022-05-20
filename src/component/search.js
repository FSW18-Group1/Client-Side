import './component.css';


const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
            style={{width:"25vw"}}
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;