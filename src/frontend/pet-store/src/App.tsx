import React from "react";
import { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = DefaultComponent
            if (route.isShowHeader) {
              return <Route key={route.path} path={route.path} element={<> <Layout /> <Page /> </>} />
            }
            else {
              return <Route key={route.path} path={route.path} element={<> <Page /> </>} />
            }
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
