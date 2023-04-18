import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {allImagesByProjectName} from "../store/slices/imagesSlice";

import ButtonGoBack from '../components/common/buttons/buttonGoBack/ButtonGoBack';
import {FaTimesCircle} from "react-icons/fa";


const Images = () => {

const dispatch = useDispatch();
const {images} = useSelector((state)=> state.images);
let params = useParams();

const [imageModal, setImageModal] = useState(false);
const [imageSrc, setImageSrc] = useState("");

const setImageOnModal = (src) => {
  setImageSrc(src);
  setImageModal(true);
}

useEffect(()=>{
  
dispatch(allImagesByProjectName(params.project_name))

},[params])


  return (
  <div className='container_images'>


    <div className={imageModal ? "image__modal image__modal__show" : "image__modal"}>
        <div className="image__modal--content">
            <FaTimesCircle className="modal__close--btn text__light bg__blue" size = {30} onClick = {() => setImageModal(false)} />
            <img style={{width: "100%", height: "100%"}} src = {imageSrc} alt = "" />
        </div>
    </div>

      <div >
      <h1>{params.project_name}</h1>
      <ButtonGoBack category={params.category}/>
      </div>
      
    <div className='work__content grid3'>
        {images?.map((item, index)=> {
          return(
            <div className='work__content--item' data-aos='fade-up' key={index} onClick = {() => setImageOnModal(item.image_src)}>
              <img style={{width: "100%", height: "100%"}} src={item.image_src} alt='' className='img'/>
            </div>
        )
        })}
    </div>
  </div>
    
  )
}

export default Images