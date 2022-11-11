import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./components/dashboardItems/Main";
import CreateUser from "./components/users/CreateUser";
import UserList from "./components/users/UserList";
import ViewProject from "./components/project/ViewProject";
import CreateProject from "./components/project/CreateProject";
import ProjectTable from "./components/project/ProjectTable";
import TaskTable from "./components/Task/TaskTable";
import Report from "./components/Report/Report";
import Login from "./pages/Login&signup/Login";
import { UserProvider } from "./UserContext";
import Activity from "./components/Activity/Activity";
import EditProject from "./components/project/EditProject";
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/portal" element={<Dashboard />}>
            <Route index element={<Main />} />
            <Route path="userList" element={<UserList />} />
            <Route path="createUser" element={<CreateUser />} />
            <Route path="viewProject/:id" element={<ViewProject />} />
            <Route path="createProject" element={<CreateProject />} />
            <Route path="projectList" element={<ProjectTable />} />
            <Route path="task" element={<TaskTable />} />
            <Route path="report" element={<Report />} />
            <Route path="editProject/:id" element={<EditProject />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
