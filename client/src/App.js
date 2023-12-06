import { Navigate, Route, Routes } from "react-router-dom";
import { redirect } from "react-router-dom";
import './App.css';
import LoginScreen from "./screens/LoginScreen.jsx";

import { useEffect } from "react";

function App() {
  return (
    <Routes>
  
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={<LoginScreen />} />
      {/* <Route
        path="/:type"
        element={
          <HomeLayout>
            <HomeScreen />
          </HomeLayout>
        }
      /> */}
      {/* <Route path="/problem/:_id" element={<SubmitProblemScreen />} /> */}
    </Routes>
);
}

export default App;
