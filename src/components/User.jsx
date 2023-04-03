import React from 'react'
import DisplayUsers from './DisplayUsers'
import { useDispatch, useSelector } from "react-redux";
import { fakeUserData } from '../api';
import { addUser, clearAllUsers } from '../app/slices/UserSlice';



const User = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const data = useSelector((state) => state.users)
    console.log('data', data)
    const handleAddUser = (name) => {
        console.log('hit add user')
        dispatch(addUser(name))
    }
    const handleDeleteAllUser = () => {
        console.log('delete all users')
        dispatch(clearAllUsers())
    }
    return (
        <div className='container px-5'>
            <button type="button" className="btn btn-primary my-3" onClick={() => handleAddUser(fakeUserData())}>Add User</button>
            <ul className="list-group list-group-flush my-3">
                {
                    data.map((user, index) =>
                        <DisplayUsers user={user} index={index} key={index} />
                    )}
            </ul>
            <div className='d-flex'>

                <div type="button" className="btn btn-danger ms-auto" onClick={() => handleDeleteAllUser()}>Delete All user</div>
            </div>
            <div>
                    {
        posts && posts.map((post,i) => <p key={i}>{post}</p>)
        }


            </div>

        </div>
    )
}

export default User