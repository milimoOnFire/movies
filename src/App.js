import React, { useState } from 'react';
import { Slider, Switch } from 'antd';
import useFetch from './states/useFetch';
import './App.css';

function App() {
  const [reverse, setReverse] = useState(true)
  const handleReverseChange = () => {
    setReverse(reverse ? false : true)
  }
  const posts = useFetch('https://s-q7ckzt63ylj7.eu1.wpsandbox.org/wp-json/wp/v2/posts');
  console.table(posts)

  return (
    <div className="App">
      <div container spacing={2}>
        {posts?.map((post, index) => (
          <div item xs={4} key={index}>
            <div dangerouslySetInnerHTML={{ __html: post.title.rendered }}></div>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
          </div>
        ))}
      </div>
      <Slider defaultValue={30} reverse={true} />
      <Slider range defaultValue={[20, 50]} reverse={true} />
        Reversed: <Switch size="small" checked={reverse} onChange={handleReverseChange} />
    </div>
  );
}

export default App;
