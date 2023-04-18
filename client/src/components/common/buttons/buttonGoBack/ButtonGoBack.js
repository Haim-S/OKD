import React from 'react'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const ButtonGoBack = ({category}) => {
  
  return (
    <Link to={`/Project/${category}`}>
    <ArrowBackIcon/>
    </Link>
  )
}

export default ButtonGoBack