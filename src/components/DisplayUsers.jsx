import React from 'react'
import { useDispatch } from 'react-redux';
import {BsFillTrashFill} from 'react-icons/bs';
import { removeUser } from '../app/slices/UserSlice';


const DisplayUsers = ({user ,index}) => {
    const dispatch = useDispatch();
   const handleDeleteUser = (index) => {
        console.log('delete user', index);
        dispatch(removeUser(index))
    };

  return (
    <div>
        <li className="list-group-item d-flex justify-content-evenly">
            <div>
            {user}
            </div>
            <button className='text-danger btn fs-5' onClick={()=>handleDeleteUser(index)}>
            <BsFillTrashFill/>
            </button>
        </li>
    </div>
  )
}

export default DisplayUsers