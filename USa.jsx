import React, { useState } from 'react';
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.png"
import img4 from "./img4.jpg"
import img5 from "./img5.jpg"
const Gallery = [{ id:1,pic:img1,category:"Samsung"},    { id:2,pic:img2,category:"Mi"},
    { id:3,pic:img3,category:"Oneplus"},    { id:4,pic:img4,category:"Mi"},
    { id:5,pic:img5,category:"Oneplus"},];
function Product () {
    const[images,setImage]=useState(Gallery);
    function handleproduct(Item){
        const finaldata=Gallery.filter((value)=>value.category===Item)
          if(Item !== "All"){ setImage(finaldata); }
        else{ setImage(Gallery) }
    }
  return (
    <div>
        <button onClick={() =>handleproduct('All')}>All</button>
        <button onClick={() =>handleproduct('Samsung')}>Samsung</button>
        <button onClick={() =>handleproduct('Mi')}>Mi</button>
        <button onClick={() =>handleproduct('Oneplus')}>Oneplus</button>                   
        <div>
            {
                images.map((val)=> {   
                    return(    
                    <>
                        <img src={val.pic} height="300" width="300"/>
                    </> 
                    ) 
                }) }
            </div> 
    </div>
  )}
export default Product
