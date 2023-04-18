import React, {useState, useRef} from 'react'
import {useDispatch} from 'react-redux';

import {TextField, Button} from "@mui/material";
import { createImage } from '../../../store/slices/imagesSlice';
import { createNewProject } from '../../../store/slices/projectSlice';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const UpProject = () => {


    
    const dispatch = useDispatch();
    
    
    
    const projectNameRef = useRef();
    const categoryRef = useRef();
    const projectManagerRef = useRef();
    //   const urlRef = useRef();
    const mainImageUrlRef = useRef();
    
    
    
      const createProject = (e, index) => {
          e.preventDefault();
         
          const values = {
            name_project: projectNameRef.current.value,
            category: categoryRef.current.value,
            img_url: inputRefs.current[index].current.value,
          }
        console.log(values);
          // dispatch(createImage(values));
          
        }
        
        const createImageToProject = (e) => {
          e.preventDefault();
          const values = {
            name_project: projectNameRef.current.value,
            project_manager: projectManagerRef.current.value,
            name_architect: null,
            name_photographer: null,
            category: categoryRef.current.value,
            img_url: mainImageUrlRef.current.value,
          }
        
        
        dispatch(createNewProject(values));
        }
        
        
        const [plusImage, setPlusImage] = useState(3);
        
        const plus = () => {
          setPlusImage((prevCount)=> prevCount + 1);
        };
        
        const minus = () => {
          setPlusImage((prevCount) => prevCount - 1);
        }
        
        
        const inputRefs = useRef(Array.from({ length: plusImage }, () => React.createRef()));
        
        const divElements = Array.from({ length: plusImage }, (_, index) => (
          <form style={{margin: "0"}} key={index} onSubmit={createProject}>
           <div key={index} style={{display: "flex", alignItems: "center", width: "77%"}}>
                <RemoveCircleOutlineIcon onClick={minus}/>
                <TextField style={{margin: "8px 15px", width: "80%"}} inputRef={inputRefs.current[index]} type='text' variant='outlined' label='project image url'/>
                <Button style={{backgroundColor: "#000"}} onClick={(e) => createProject(e, index)}  type='submit'  variant="contained">send</Button>
          </div>
          </form>
        ));
    


  return (
    <div>
    {/* <form > */}
     
    {/* </form> */}
    <form>
      <div style={{marginBottom: "10px", display: "flex"}}>
      <TextField  inputRef={projectNameRef} type='text' variant='outlined' label='project name'/>
      <TextField style={{margin: "0 15px"}} inputRef={categoryRef}  type='text' variant='outlined' label='category'/>
      <TextField inputRef={projectManagerRef} type='text' variant='outlined' label='project manager'/>
      </div>
    <div style={{display: "flex", alignItems: "center", width: "77%"}}>
      <AddCircleOutlineIcon onClick={plus}/>
      
      <TextField style={{margin: "50px 15px", width: "80%"}} inputRef={mainImageUrlRef} type='text' variant='outlined' label=' main image url'/>
      <Button style={{backgroundColor: "#000"}} onClick={createImageToProject} type='submit'  variant="contained">send</Button>
      </div>
    </form>
      {divElements}
  </div>
  )
}

export default UpProject