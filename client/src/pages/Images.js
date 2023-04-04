import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {allImagesByProjectName} from "../store/slices/imagesSlice";


const Images = () => {

const dispatch = useDispatch();
const {images} = useSelector((state)=> state.images);
let params = useParams();

useEffect(()=>{
dispatch(allImagesByProjectName(params.project_name))

},[params])


  return (
    <div className='container_images'>
       <div className='content grid3'>
        {images.map((item)=> (
             <div className='box' data-aos='fade-up'>
              <div className='img'>
              <img style={{width: "300px", height: "310px"}} src={item.image_src} alt=''/>
              </div>
              </div>
        ))}

      </div>
    </div>
  )
}

export default Images