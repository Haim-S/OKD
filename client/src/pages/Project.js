import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { allProjectsByCategory} from '../store/slices/projectSlice';
import {Link} from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Project = () => {

  const dispatch = useDispatch();
  const {projects} = useSelector((state)=> state.projects);
  let params = useParams();
  // console.log(projects);

  useEffect(()=>{

dispatch(allProjectsByCategory(params.category));

  },[params])

  return (
    <div className='container'>
      <article>
    <div className='content grid3'>
      {projects.map((project, index)=> (
        <div key={index} className='box' data-aos='fade-up'>
            <div className='img'>
                 <img style={{width: "100%", height: "100%"}} src={project?.img_src} alt=''/>
            </div>
            <div className='overlay'>
                <Link to={`/Images/${params?.category}/${project?.name_project}`}  style={{
                            width: "50%",
                            height: "100%",
                            color: "black", 
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                           }}>
                            <p>{project.name_project}</p>
                            <VisibilityOutlinedIcon/>
                </Link>
                            
            </div>
                        
        </div>
      ))}
    </div>
      </article>
      </div>
    
  )
}

export default Project