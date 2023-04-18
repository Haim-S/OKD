import React, {useEffect, useState} from 'react'
import { Select, MenuItem} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {allPtojects} from "../../../store/slices/projectSlice";
import {allImagesByProjectName, deleteImage} from "../../../store/slices/imagesSlice";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';


// const NAMES_PAGES = [{value: "Select the project", label: "Select the project"}, {value: "Super play", label: "Super play"}, {value: "Gong", label: "Gong"}, {value: "fpfp", label: "fpfp"}];



const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Image id',
    },
    {
      id: 'Category',
      numeric: true,
      disablePadding: false,
      label: 'Category',
    },
    {
      id: 'create data',
      numeric: true,
      disablePadding: false,
      label: 'Create data',
    },
    {
      id: 'project name',
      numeric: true,
      disablePadding: false,
      label: 'Project name',
    },
    {
      id: 'Delete',
      numeric: true,
      disablePadding: false,
      label: 'Delete',
    },
  ]; 


const TableData =  () => {
  // const [selectedOption, setSelectedOption] = useState("BLA");
  const dispatch = useDispatch();
  const {names_projects} = useSelector((store) => store.projects);
  const {images} = useSelector((store) => store.images);



useEffect(()=>{

  dispatch(allPtojects());
  
},[]);


const handleOptionChange = (event) => {
  // setSelectedOption(event.target.value);
  console.log(event.target);
  dispatch(allImagesByProjectName(event.target.value))
};



const deleteOneImage = (id) => {
  
  dispatch(deleteImage(id))
}


  return (
    <div style={{marginTop: "70px"}}>
      <div style={{padding: "5%" ,width: "100%", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "rgba(255, 255, 255, 0.547)"}}>
      <h3>choose the name of the project and update</h3>
        
        <Select sx={{width: "200px"}} defaultValue="Project Name" name="Project Name" label="Project Name" required onChange={handleOptionChange}>
        {names_projects.map((option, index) =>(
           <MenuItem key={index} value={option}>{option}</MenuItem>
        ))}
        </Select>
        
      </div>
    <Table>
    <TableHead>
        <TableRow>
       

        {headCells.map((headCell, index)=>(
            <TableCell key={index}>
        {headCell.label}
 
         </TableCell>
        ))}
         
        </TableRow>
    </TableHead>

    <TableBody>
{images?.map((img, index) =>  (

    <TableRow key={index}>
      <TableCell >
          
          {img.id}
        </TableCell>
        <TableCell>
          
          {img.category}
        </TableCell>
       
        <TableCell >
          
          {img.create_at}
        </TableCell>
        <TableCell >
         
          {img.project_name}
        </TableCell>
        <TableCell >
          {/* <button style={{cursor: "pointer"}} onClick={() => deleteOneImage(img.id)}> */}
        <DeleteIcon  style={{cursor: "pointer"}} onClick={() => deleteOneImage(img.id)} />
          {/* </button> */}

        </TableCell>


        
    </TableRow>
))}

    </TableBody> 
    </Table>
    </div>
  )
}

export default TableData