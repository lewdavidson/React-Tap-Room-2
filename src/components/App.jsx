import React from 'react';
import Nav from './Nav';
import Body from './Body';

function App() {
  return(
    <div>
      <style global jsx>{`
        body {
          font-family: 'Bitter', serif;
          background-color: #FFE5D4;
        }
        .deleteButton {
          height: 20px;
          width: 150px;
          border: 2px solid black;
          border-radius: 10px;
          background-color: #EFC7C2;
          font-weight: bold;
          cursor: pointer;
          margin-left: 28%;
          margin-bottom: 10px;
        }
        .buyButton {
          height: 20px;
          width: 150px;
          border: 2px solid black;
          color: white;
          border-radius: 10px;
          background-color: #68A691;
          font-size: .8em;
          cursor: pointer;
          margin-left: 28%;
          margin-bottom: 10px;
        }
      `}</style>
      <Nav />
      <Body />
    </div>
  );
}

export default App;
