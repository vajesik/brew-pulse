import React, { useEffect } from "react";

// Code used to fetch from API and populate db.json. - VJ
// Once utilized, moved out of component to clean up.  We can delete if we don't need to use again. - VJ
// useEffect(() => {
//   fetch("https://api.openbrewerydb.org/v1/breweries?by_city=estes_park")
//     .then(r => r.json())
//     .then(datas => {
//       console.log(datas);
//       postToJsonEP(datas);
//     });
// }, []);
// function postToJsonEP(datas) {
//   datas.map(data => {
//     return fetch("http://localhost:3000/estesParkBrews", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//   });
// }
// useEffect(() => {
//   fetch("https://api.openbrewerydb.org/v1/breweries?by_city=fort_collins")
//     .then(r => r.json())
//     .then(datas => {
//       console.log(datas);
//       postToJson(datas);
//     });
// }, []);
// function postToJson(datas) {
//   datas.map(data => {
//     return fetch("http://localhost:3000/fortCollinsBrews", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//   });
// }
// useEffect(() => {
//   fetch("https://api.openbrewerydb.org/v1/breweries?by_city=boulder")
//     .then(r => r.json())
//     .then(datas => {
//       console.log(datas);
//       postToJsonB(datas);
//     });
// }, []);
// function postToJsonB(datas) {
//   datas.map(data => {
//     return fetch("http://localhost:3000/boulderBrews", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//   });
// }

function App() {
  return (
    <div>
      Hello World!
    </div>
  );
}

export default App;
