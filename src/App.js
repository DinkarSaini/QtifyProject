import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums,fetchNewAlbums, fetchSongs } from "./api/api";
import { useEffect , useState } from "react";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import styles from './App.module.css'

function App() {
  const [topAlbum , setTopAlbum] = useState([]);
  const [newAlbumData , setNewAlbumData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [allAlbumData, setAllAlbumData] = useState([]);
  const topAlbumData = async()=>{
    try{
      const data = await fetchTopAlbums();
      setTopAlbum(data);
      return data;
    }catch(err){
      console.error(err)
    }
   
  }
  useEffect(()=>{
  topAlbumData();
  },[])
  const generateNewAlbum = async() =>{
    try{
      const data = await fetchNewAlbums();
      setNewAlbumData(data);
      return data
    }catch(err){
      console.error(err)
    }
  }
  useEffect(()=>{
    generateNewAlbum();
  },[])

  const generateSongs = async() =>{
    try{
      const data = await fetchSongs();
      setSongsData(data);
      return data
    }catch(err){
      console.error(err)
    }
  }
  useEffect(()=>{
    generateSongs();
  },[])

  useEffect(() => {
    const combinedAlbums=[...topAlbum, ...newAlbumData];
    setAllAlbumData(combinedAlbums)
  }, [topAlbum, newAlbumData]);

  
  return (
  <>
    <Navbar albums={allAlbumData} />
    <Hero />
    <div className={styles.sectionWrapper}>
    <Section type="album" title ="Top Albums" data ={topAlbum}/>
    <Section type ="album" title = "New Albums" data ={newAlbumData} />
    <Section type ="songs" title = "Songs" data ={songsData} />
    <Footer />                                                                         
    </div>
  </>
  );
}

export default App;
