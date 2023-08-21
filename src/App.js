import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums } from "./api/api";
import { useEffect , useState } from "react";
import Card from "./components/Card/Card";
import { data } from "./mockData/topAlbum"

function App() {
  const [topAlbum , setTopAlbum] = useState(data);
  const topAlbumData = async()=>{
    try{
      const data = await fetchTopAlbums();
      setTopAlbum(data);
    }catch(err){
      console.error(err)
    }
   
  }
  useEffect(()=>{
  topAlbumData();
  },[])
  return (
  <>
    <Navbar />
    <Hero />
    <Card data = {topAlbum[0]} type="album"/>
  </>
  );
}

export default App;
