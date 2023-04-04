import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { allProjectsByCategory } from '../store/slices/projectSlice';
import {Link} from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Project = () => {

  const dispatch = useDispatch();
  const {projects} = useSelector((state)=> state.projects);
  let params = useParams();
  console.log(projects);

  useEffect(()=>{
dispatch(allProjectsByCategory(params.category));
  },[params])

  return (
    <div className='container'>
      <article>
    <div className='content grid3'>
      {projects.map((project)=> (
        <div className='box' data-aos='fade-up'>
            <div className='img'>
                 <img style={{width: "300px", height: "310px"}} src={project.img_src} alt=''/>
            </div>
            <div className='overlay'>
                            <Link to={`/Images/${project.name_project}`}>
                            {project.name_project}
                            </Link>
              
                        {/* <Link to={`/Project/${item.category_url}`}> */}
                            <VisibilityOutlinedIcon/>
                        {/* </Link> */}
                            
            </div>
                        
        </div>
      ))}
    </div>
      </article>
      </div>
    
  )
}

export default Project