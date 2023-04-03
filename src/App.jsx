
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from './services/post';
import NavBar from './components/NavBar'
import User from './components/User'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './components/Post';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

function App() {


  return (


    // Get Limited Data
    <div>
      <BrowserRouter  >
        <NavBar />
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/post" element={<Post />}></Route>
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;

// data - The returned result if present.
// error - The error result if present.
// isUninitialized - When true, indicates that the query has not started yet.
// isLoading - When true, indicates that the query is currently loading for the first time, and has no data yet. This will be true for the first request fired off, but not for subsequent requests.
// isFetching - When true, indicates that the query is currently fetching, but might have data from an earlier request. This will be true for both the first request fired off, as well as subsequent requests.
// isSuccess - When true, indicates that the query has data from a successful request.
// isError - When true, indicates that the query is in an error state.
// refetch - A function to force refetch the query