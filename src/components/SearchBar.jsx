export default function SearchBar({searchQuery,setSearchQuery}){
    function handleEnter(e){
        setSearchQuery(e.target.value)
        console.log(searchQuery)

    }

    return <div className="search-bar">
        <input type="text" placeholder="Search recipes by name...." onKeyDown={handleEnter} />
    </div>
}