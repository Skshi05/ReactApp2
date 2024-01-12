import React, { useState } from 'react';

export default function Robotsearch() {
  const [searchText, setSearchText] = useState("");
  const [roboImg, setRoboImg] = useState([]);

  const onSearch = async () => {
    if (searchText) {
      try {
        const imgUrl = `https://robohash.org/${searchText}.png`;
        if (!roboImg.includes(imgUrl)) {
        const newImg = await fetch(imgUrl);
        if (newImg) {
          setRoboImg((prevImg) => [...prevImg, imgUrl]);
        } else {
          console.error('Failed to load image');
        }}
        else{
          alert("Change text")
        }
      } catch (error) {
        console.error('Error fetching robot image:', error);
      }
    } else {
      alert('Enter text');
    }
  }

  return (
    <div className='container' style={{ textAlign: "center" }}>
      <input type="text" value={searchText} placeholder='Enter any text' onChange={(e) => setSearchText(e.target.value)}></input>

      <button onClick={onSearch}>Search</button>
      {roboImg.length > 0 && (
        <div>
          <h2>Robot Images:</h2>
          {roboImg.map((imageUrl) => (
            <img  src={imageUrl} alt="roboimg" />
          ))}
        </div>
      )}
    </div>
  );
}
