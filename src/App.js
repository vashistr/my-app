import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";

var c = () => {};

// class Car
// {
//   Id: string,
//   CarName: string,
//   Company: string,
// }

function App() {
  var url = "http://localhost:5100/api/getCompanies";
  var url2 = "http://localhost:5100/api/setCompany";
  useEffect(() => {
    const fetchData = async () => {
      var responseClone; // 1
      fetch(url)
        .then(function (response) {
          responseClone = response.clone(); // 2
          return response.json();
        })
        .then(
          function (data) {
            // Do something with data
          },
          function (rejectionReason) {
            // 3
            console.log(
              "Error parsing JSON from response:",
              rejectionReason,
              responseClone
            ); // 4
            responseClone
              .text() // 5
              .then(function (bodyText) {
                console.log(
                  "Received the following instead of valid JSON:",
                  bodyText
                ); // 6
              });
          }
        );
    };
    fetchData();


  }, []);

  const addCar = () => {
    let c = {};
    c.Id = 16;
    c.CompanyName = "Hifd";
    c.Country = "Hfdfds";
    let car = {}
    car.Id = 17;
    car.CarName = "t";
    let cars = [];
    cars.push(car);
    c.Cars = cars;
    console.log(JSON.stringify({ data: c }));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: c })
  };
  fetch(url2, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div><button onClick={addCar}>AAAAA</button></div>
    </div>
  );
}

export default App;
