import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import UseId from "./UseId";
import Clock from "./Clock";
import Form from "./Form";
import Sample from "./Sample";
import Important from "./Important";
import User from "./User";
import ScrollReveal from "./ScrollReveal";
import Apidata from "./Apidata";
import GetApi from "./GetApi";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/use-id" element={<UseId />} />
        <Route path="/scroll" element={<ScrollReveal />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/form" element={<Form />} />
        <Route path="/apidata" element={<Apidata />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/important" element={<Important />} />
        <Route path="/user" element={<User />} />
        <Route path="/getapi" element={<GetApi />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
</>
  );
}

export default App;
