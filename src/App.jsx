import { useEffect,useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes, Link } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import './index.css'
import axios from 'axios';

function App() {
  const [searchQuery,setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/search', {
          params: {
            apiKey: '846983b6baae43af934c1c07ed4866cd',
            query: searchQuery
          }
        });
        setRecipes(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // console.log(recipes)
  }, [searchQuery]);
  // useEffect(() => {
  //   console.log(recipes);
  // }, [recipes]);
  

  return (
    <div className="App">
    <NavBar></NavBar>

    <Routes>
     <Route path='/' element={<Body data={recipes}searchQuery={searchQuery} setSearchQuery={setSearchQuery}></Body>}></Route>
      <Route path='/about' element={<About></About>} > </Route>
    </Routes>
    </div>
  )
}

export default App
