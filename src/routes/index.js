import React from "react";
import Login from "../container/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "../container/Signup";

const App = () => {
  return (
    <React.Suspense fallback="Loading...">
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default App;
