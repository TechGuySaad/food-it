import SearchBar from "./SearchBar";
import Card from "./Card";
import '../styles/body.css'

export default function Body({data ,searchQuery,setSearchQuery}){
    // console.log(data)
    return <div className="body">
    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}></SearchBar>
    <div className="cards">

    {data.map((item)=> {
        return <Card key={item.id} title={item.title} image={item.image} time={item.readyInMinutes} servings={item.servings} sourceUrl={item.sourceUrl}></Card>


    })}
    </div>
    

    
    </div>
}