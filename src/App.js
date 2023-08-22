import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums } from "./api/api";
import { useEffect , useState } from "react";
import Section from "./components/Section/Section";
import styles from './App.module.css'

function App() {
  const [topAlbum , setTopAlbum] = useState([]);
  const topAlbumData = async()=>{
    try{
      const data = await fetchTopAlbums();
      console.log(data)
      setTopAlbum(data);
      return data;
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
    <div className={styles.sectionWrapper}>
    <Section type="album" title ="Top Albums" data ={topAlbum}/>
    </div>
  </>
  );
}

export default App;
