/* eslint-disable jsx-a11y/heading-has-content */
import './App.css';
import React, { useState } from 'react';




function App() {
  const [value, setValue] = useState("")
  const [result, setResult] = useState([])



  const fetchimg = () => {


    fetch(`https://api.unsplash.com/search/photos/?client_id=dRshw_ZD_Oli6julM3MzcF0khnAydd9_RyJCc7pnhRU&query=${value}`)
      .then(res => res.json())
      .then(data => {


        setResult(data.results)
      })



  }
  return (
    <div className='App'>
      <div className='mydiv'>
        <span>search</span>
        <input
          style={{ width: "60%" }}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}></input>
        <button onClick={() => fetchimg()}>search</button>
      </div>
      <div className='gallery'>

        {
          result.map((item, i) => {
            return <img key={i} src={item.urls.regular} alt="img" />



          })
        }
      </div>


    </div>

  );

}



export default App;
