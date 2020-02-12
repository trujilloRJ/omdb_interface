import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./components/Movie/Movie";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Input from "./components/Input/Input";

const API = axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=6069239b&"
});

function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState(
    "http://www.omdbapi.com/?apikey=6069239b&t=as"
  );

  useEffect(() => {
    API.get(query)
      .then(res => {
        setData(res.data);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [query]);

  function createQuery(t, type) {
    setQuery("&t=" + t + "&type=" + type);
  }

  function renderFalse() {
    if (data.Response == "False") {
      return <div>There is no results in the OMDb database :(</div>;
    } else {
      return <Movie data={data} />;
    }
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Input createQuery={createQuery} />
        {renderFalse()}
      </div>
    </>
  );
}

export default App;
