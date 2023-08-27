import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from '../Carousel/Carousel'
import BasicTabs from "../BasicTabs/BasicTabs";

  const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredData = selectedGenre === "All"
  ? data
  : data.filter(item => item.genre.label === selectedGenre);
  

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {type==="songs" ? null :
          <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "show All" : "collapse All"}
        </h4>}
        {type==="songs"? <BasicTabs onGenreChange={handleGenreChange}/> : null}

      </div>
      {filteredData?.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {filteredData.map((ele) => (
                <Card data={ele} type={type} key={ele.id} />
              ))}
            </div>
          ) : (
            <Carousel data ={filteredData} renderCardComponent = {(item)=> <Card data ={item} type={type} />}/>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
