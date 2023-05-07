import React, {useState, useRef} from 'react'
import {TextField, Button} from "@mui/material";
import {logout} from '../../store/slices/authSlice';
import {useDispatch} from 'react-redux';
import { createImage } from '../../store/slices/imagesSlice';
import { createNewProject } from '../../store/slices/projectSlice';
import { getLocalStorageValue } from '../../utils/localStorage.util';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';




const AdminControl = () => {


  const projectNameRef = useRef();
  const categoryRef = useRef();
  const projectManagerRef = useRef();
  const urlRef = useRef();
  

const dispatch = useDispatch();



const logoutSubmit = (e) => {
  e.preventDefault();
  dispatch(logout(getLocalStorageValue("ac_token")));
}

const createProject = (e, index) => {
  e.preventDefault();
  console.log(urlRef);
  const values = {
    name_project: projectNameRef.current.value,
    project_manager: projectManagerRef.current.value,
    name_architect: null,
    name_photographer: null,
    category: categoryRef.current.value,
    img_url: inputRefs.current[index].current.value,

  }
  console.log(values);
  // dispatch(createImage(values.img_url, values.category, values.name_project));
  // dispatch(createNewProject(values));
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
   <div key={index} style={{display: "flex", alignItems: "center", width: "77%"}}>
        <RemoveCircleOutlineIcon onClick={minus}/>
        <TextField style={{margin: "8px 15px", width: "80%"}} inputRef={inputRefs.current[index]} type='text' variant='outlined' label='image url'/>
        <Button style={{backgroundColor: "#000"}} onClick={(e) => createProject(e, index)}  type='submit'  variant="contained">send</Button>
  </div>
));

  return (
    <div className='container'>
      <div>
      <form onSubmit={logoutSubmit}>
        <button type='submit'> logout</button>
      </form>
      </div>
      <div>
        <form  >
          <div style={{marginBottom: "10px"}}>
          <TextField  inputRef={projectNameRef} type='text' variant='outlined' label='project name'/>
          <TextField style={{margin: "0 15px"}} inputRef={categoryRef}  type='text' variant='outlined' label='category'/>
          <TextField inputRef={projectManagerRef} type='text' variant='outlined' label='project manager'/>
          </div>
         
        </form>
        <form onSubmit={createProject}>
        <div style={{display: "flex", alignItems: "center", width: "77%"}}>
          <AddCircleOutlineIcon onClick={plus}/>
          
          <TextField style={{margin: "0 15px", width: "80%"}} inputRef={inputRefs.current[inputRefs.current.length - 1]} type='text' variant='outlined' label='image url'/>
          <Button style={{backgroundColor: "#000"}} onClick={(e)=> createProject(e,inputRefs.current.length - 1)} type='submit'  variant="contained">send</Button>
          </div>
          {divElements}
        </form>
      </div>
      
    </div>
  )
}

export default AdminControl