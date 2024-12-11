import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path ="\" element={<News pagesize={6} country="us" category="general"/>}/>
            <Route exact path ="\about" element={<News pagesize={6} country="us" category="general"/>}/>
            <Route exact path ="\business" element={<News pagesize={6} country="us" category="business"/>}/>
            <Route exact path ="\entertainment" element={<News pagesize={6} country="us" category="entertainment"/>}/>
            <Route exact path ="\health" element={<News pagesize={6} country="us" category="health"/>}/>
            <Route exact path ="\science" element={<News pagesize={6} country="us" category="science"/>}/>
            <Route exact path ="\sports" element={<News pagesize={6} country="us" category="sports"/>}/>
            <Route exact path ="\technology" element={<News pagesize={6} country="us" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}
