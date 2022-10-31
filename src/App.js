import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DashboardCard from "./components/DashboardCard";
import Schedule from "./components/Schedule";
import Main from "./components/Main";
import LineChart from "./components/LineChart";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portal" element={<Dashboard />}>
          <Route path="dashboard" element={<Main />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
