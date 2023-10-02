import React, {useState} from 'react';

import Post from './Post';

function App() {
  const [postList, setPostList] = useState([
    {
      posstNumber: 0,
      text: 'The quick brown fox jumped over the lazy dog.',
    },
  ]);

  return (
    <div>
      <Post text={postList[0].text} id={postList[0].posstNumber} />
    </div>
  )
}

export default App;
