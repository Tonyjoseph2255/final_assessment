import React, { useEffect, useState } from "react";
import axios from "axios";
//import egg from '../images/egg.jpg'
//import Header from "./Header";
import PostList from "./PostList";
//import ResponsiveDrawer from "./ResponsiveDrawer";
const baseURL = " https://jsonplaceholder.typicode.com/posts";
function Post() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPostList(response.data);
    });
  }, []);
  return (
    <div className="contentWrap">
      
      {/* <ResponsiveDrawer /> */}
      <div className="listItems">
        
        <PostList list={postList} />
      </div>
    </div>
  );
}
export default Post;
