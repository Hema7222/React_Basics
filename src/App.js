// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import './App.css';
import React, {useState} from 'react';
import B from './B';

function App(props){
  // let [name, setName] = useState("init value")
  // let name1= "iNit value";
  let [token, setToken] = useState("init value")
  // let [weather, setWeather] = useState()
  let Token1= "iNit value";
  // setWeather([{'location': 'chennai', 'lat':'13', 'lng': '78'}])
  // localStorage.setItem("weather", JSON.stringify(weather))

  return(
    <div className="App">
      {/* <button onClick={()=>{setName("Hema"); name1 = "HP"}}>Change</button>
      <p>{name}</p>
      <p>{name1}</p>

      <B name={name} {...props}/> */}

    <button onClick={()=>{setToken("12345"); Token1 = "56789"}}>Change</button>

    {/* <p>{JSON.stringify(weather)}</p> */}
      <p>{token}</p>
      <p>{Token1}</p>

      <B token={token} {...props}/>
    </div>
  );
}

export default App;
