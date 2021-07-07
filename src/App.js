import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")
  const [results, setResults] = useState([])
  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=KDeaNETVt-cvpFQLChomngW0vdhVMOZT4wcIAPhF-qc&query=${value}&orientation=squarish`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results)
      })
  }
  return (
    <div className="App">
      <div className="mydiv">
        <div className="gallery">
          {
            results.map((item) => {
              return <img className="item" key={item.id} src={item.urls.regular} />

            })
          }
        </div>
        <input
          className="input"
          style={{ width: "60%" }}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => fetchImages()} className="button" >SEARCH</button>

      </div>
    </div>
  );
}

export default App;
