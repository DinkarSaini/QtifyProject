import React from 'react';
import {Chip ,Tooltip} from '@mui/material';
import styles from './Card.module.css'

const Card = ({data,type}) => {
  const getCard = (type)=>{
    switch(type){
        case "album":{
            const {image,follows,title,songs}=data;
            return(
                < Tooltip title ={`${songs?.length} songs`} placement="top" arrow>
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <img src ={image} alt ='albums' />
                        <div className={styles.banner}>
                            <Chip label={`${follows} Follows` } className ={styles.chip} size="small" />
                        </div>
                    </div>
                    <div className={styles.titlewrapper}>
                        <p>{title}</p>
                    </div>
                </div>
                </Tooltip>
            )
        }
        case "songs":{
            const {image,likes,title} =data;
            return(
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <img src={image} alt="songs" loading="lazy" />
                        <div className={styles.banner}>
                        <Chip label={`${likes} Likes`} className={styles.chip} size="small" />

                        </div>
                    </div>
                    <div className={styles.titlewrapper}>
                        <p>{title}</p>
                    </div>
                </div>
            )
        }
        default:
            return <></>;
    }
  }
  return getCard(type)
}

export default Card