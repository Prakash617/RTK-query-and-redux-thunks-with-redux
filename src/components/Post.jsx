import React from 'react'
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from '../services/post';


const Post = () => {
     // const responseInfo = useGetAllPostQuery()
  // const responseInfo = useGetPostByIdQuery(11)
  const responseInfo = useGetPostByLimitQuery(3)
  // const [deletePost, responseInfo] = useDeletePostMutation()
  // const [createPost, responseInfo] = useCreatePostMutation()
  // const [updatePost, responseInfo] = useUpdatePostMutation()

  const newPost = {
    title: 'This is New New Title',
    body: 'This is New New Body',
    userId: 1,
  }

  const updatePostData = {
    id: 1,
    title: 'This is Update Post Title',
    body: 'This is Update Post Body',
    userId: 1,
  }

  console.log("Response Information: ", responseInfo)
  console.log("Data: ", responseInfo.data)
  console.log("Success: ", responseInfo.isSuccess)

  if (responseInfo.isLoading) return <div>Loading....</div>
  if (responseInfo.isError) return <h1>An error occured {responseInfo.error.error}</h1>

  return (
    <div>
      {/* // Get All Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get All Data)</h1>
    //   {
    //     responseInfo.data.map((post, i) =>
    //       <div key={i}>
    //         <h2>{post.id} {post.title}</h2>
    //         <p>{post.body}</p>
    //         <hr />
    //       </div>
    //     )
    //   }
    // </div>

    // Get Single Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get Single Data)</h1>
    //   <h2>{responseInfo.data.id} {responseInfo.data.title}</h2>
    //   <p>{responseInfo.data.body}</p>
    // </div> */}

{/* // Delete Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Delete Data)</h1>
    //   <button onClick={() => { deletePost(2) }}>Delete Post</button>
    // </div>

    // Create Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Create Data)</h1>
    //   <button onClick={() => { createPost(newPost) }}>Add Post</button>
    // </div>

    // Update Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Update Data)</h1>
    //   <button onClick={() => { updatePost(updatePostData) }}>Update Post</button>
    // </div> */}
      
        <h1 className='text-center'>Redux Toolkit - RTK Query (Get Limited  Data)</h1>
        <div className="container my-4">
        
      {
        responseInfo.data.map((post, i) =>
        <div key={i}>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Post