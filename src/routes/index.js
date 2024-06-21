import React from "react";
import Login from "../container/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "../container/Signup";
import NotFound from "../container/NotFound";
import Dashboard from "../container/Dashboard";
import DashboardLayout from "../component/layout/dashboardLayout";
import Setting from "../container/Setting";

const App = () => {
  return (
    <React.Suspense fallback="Loading...">
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/setting"
          element={
            <DashboardLayout>
              <Setting />
            </DashboardLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Suspense>
  );
};

export default App;
