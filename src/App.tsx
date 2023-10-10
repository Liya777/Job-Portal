import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./UI/Modules/pages/Home";
import {
  CreateCredentials,
  EmployeeCompanyDetailsForm,
  EmployerCompanyDetailsForm,
  Login,
  PersonalDetailsForm,
  SignUp,
} from "./UI/Modules/pages";
import AppLayout from "./UI/Modules/pages/AppLayout";

const App = () => {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/signup-employee/personal-details"
              element={<PersonalDetailsForm />}
            />
            <Route
              path="/signup-employer/personal-details"
              element={<PersonalDetailsForm />}
            />
            <Route
              path="/signup-employee/company-details"
              element={<EmployeeCompanyDetailsForm />}
            />
            <Route
              path="/signup-employer/company-details"
              element={<EmployerCompanyDetailsForm />}
            />
            <Route
              path="/signup-employer/create-credential"
              element={<CreateCredentials />}
            />
            <Route
              path="/signup-employee/create-credential"
              element={<CreateCredentials />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
