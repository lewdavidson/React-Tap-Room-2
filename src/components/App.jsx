import React from 'react';
import Nav from './Nav';
import Body from './Body';



function App() {
  return(
    <div>
      <style global jsx>{`
        body {
          font-family: 'Bitter', serif;
        }
      `}</style>
      <Nav />
      <Body />
    </div>
  );
}

export default App;
