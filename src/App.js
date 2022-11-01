import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DashboardCard from "./components/DashboardCard";
import Main from "./components/Main";
import LineChart from "./components/LineChart";
import CreateUser from "./components/CreateUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portal" element={<Dashboard />}>
          <Route path="dashboard" element={<Main />} />
          <Route path="createUser" element={<CreateUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
