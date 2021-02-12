/** @format */

import React, { FC } from "react";
import { WeatherData, dailyStructure } from "../store/types";
import { Container, Row, Col, Table } from "react-bootstrap";
interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);
  const celsiusFeels = (data.main.feels_like - 273.15).toFixed(2);

  return (
    <Container>
      <div className="clol">
        {" "}
        <p className="heading mt-2 ml-2">
          <p className="title clolText ml-2">
            {celsius}
            <sup>&#8451;</sup>
          </p>
        </p>
      </div>
      <div id="info"><p className="heading info text mt-2">
          <p className="title infoText"> {data.weather[0].description}</p>
        </p></div>
      <div id="imagelol">
      
        <img
          className="mt-5"
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt=""
          style={{ width: "200px" }}
        />
      </div>
      <div id="countryName">
        {" "}
        <p className="heading mt-2">
          <p className="title countryText">{data.name}</p>
        </p>
      </div>
      

      <Row>
        <Col id="table" className="title has-text-centered">
          <Table striped bordered hover id="table1">
            <thead>
              <tr>
                <th style={{ color: "white" }}>
                  {data.name} - {data.sys.country}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    className="mt-5"
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                    alt=""
                    style={{ width: "150px" }}
                  />
                  <br></br>
                  {data.weather[0].description}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <p className="heading mt-5">
                    <p className="title">
                      {celsius}
                      <sup>&#8451;</sup>
                    </p>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="heading mt-5">
                    feels like:
                    <p className="title">
                      {celsiusFeels}
                      <sup>&#8451;</sup>
                    </p>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="heading mt-5">why would you even use this?</p>
                  <p className="title">
                    {fahrenheit}
                    <sup>&#8457;</sup>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="heading mt-5">humidity</p>
                  <p className="title">{data.main.humidity}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="heading mt-5">wind</p>
                  <p className="title">{data.wind.speed} m/s</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="heading mt-5">pressure</p>
                  <p className="title">{data.main.pressure}</p>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default Weather;
{
  /* <section className="section hero is-large is-link mt-0 p-auto y-6" >
      <div className="container hero-body">
        <h1 className="title has-text-centered" style={{ marginBottom: 50 }}>
          {data.name} - {data.sys.country}
        </h1>
        <div className="level" style={{ alignItems: "flex-start" }}>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">{data.weather[0].description}</p>
              <p className="title">
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                  alt=""
                />
              </p>
            </div>
          </div>
          <div className="level-item mt-0 mb-6 has-text-centered">
            <div>
              <p className="heading ">temp</p>
              <div className="title">
                <p className="mb-2">
                  {celsius}
                  <sup>&#8451;</sup>
                  <p className="mb-2">
                    <p className="heading mt-2">feels like:</p>
                    {celsiusFeels}
                    <sup>&#8451;</sup>
                  </p>
                </p>
                <p>
                  <p className="heading mt-2">why would you even use this?</p>
                  {fahrenheit}
                  <sup>&#8457;</sup>
                </p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">humidity</p>
              <p className="title">{data.main.humidity}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">pressure</p>
              <p className="title">{data.main.pressure}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">wind</p>
              <p className="title">{data.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      </div>
    </section> */
}
