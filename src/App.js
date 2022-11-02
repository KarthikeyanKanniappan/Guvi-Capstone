import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./components/dashboardItems/Main";
import CreateUser from "./components/users/CreateUser";
import UserList from "./components/users/UserList";
import ViewProject from "./components/project/ViewProject";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portal" element={<Dashboard />}>
          <Route path="dashboard" element={<Main />} />
          <Route path="userList" element={<UserList />} />
          <Route path="createUser" element={<CreateUser />} />
          <Route path="viewProject" element={<ViewProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
