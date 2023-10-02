import React, {useEffect, useState} from 'react';

import Post from './Post';
import AddPost from './AddPost';

function App() {
  const [nextPostIndex, setNextPostIndex] = useState(2);
  const [posts, setPosts] = useState(<></>);
  const [postList, setPostList] = useState([
    {
      id: 0,
      text: 'The quick brown fox jumped over the lazy dog.',
    },
    {
      id: 1,
      text: 'lorem ipsum',
    },
  ]);

  const handleDeletePost = function(id) {
    let updatedPostList = postList.filter(post => post.id !== id);
    setPostList(updatedPostList);
  }

  const handleAddPost = function(newText) {
    let newPost = {
      id: nextPostIndex,
      text: newText
    };
    setPostList([...postList, newPost]);
    setNextPostIndex(nextPostIndex+1);
  }

  useEffect(() => {
    setPosts (
      postList.map( function(post) {
        return(
            <Post text={post.text} id={post.id} onDelete={handleDeletePost} key={post.id} />
        );
      })
    );
  }, [postList]);

  return (
    <div>
      {posts}
      <AddPost onAdd={handleAddPost} />
    </div>
  )
}

export default App;
