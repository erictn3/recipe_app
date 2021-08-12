import './App.css';

import React from 'react'

const App = () => {

  const APP_ID = '1070ddb0';
  const APP_KEY = '75ac9f38ab1632a3c51c02cd3a44bf95';


  // request url for hamburger
  
  const exampleReq= "https://api.edamam.com/api/recipes/v2?type=public&q=hamburger&app_id=1070ddb0&app_key=75ac9f38ab1632a3c51c02cd3a44bf95"

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  )
}

export default App;



