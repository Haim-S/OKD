import React, {useState, useRef, useCallback} from 'react'
import {logout} from '../../store/slices/authSlice';
import {useDispatch} from 'react-redux';

import { getLocalStorageValue } from '../../utils/localStorage.util';

import TableData from './tableData/TableData';
import UpProject from './upProject/UpProject';





const AdminControl = () => {

const [showUpload, setUpLoad ] = useState(true);
const dispatch = useDispatch();

const logoutSubmit = () => {
 
  dispatch(logout(getLocalStorageValue("ac_token")));
}

  return (
    <div className='container'>
      <div className='formAdmin'>
      <button onClick={logoutSubmit}> logout</button>
      <button onClick={useCallback(()=> setUpLoad(true))}>upload project</button>
      <button onClick={useCallback(()=>setUpLoad(false))}>update project</button>
      </div>
     
      {showUpload ? <UpProject/>  : <TableData/>}
    
    </div>
  )
}

export default AdminControl