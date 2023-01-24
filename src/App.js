import { ROUTES } from "./constants";
import { Route, Routes } from "react-router-dom";
import Login from "./layouts/authentication/login";
import Signup from './layouts/authentication/sign-up';
import Resetpassword from './layouts/authentication/reset-password';
import CreatePassword from './layouts/authentication/create-password';
import Home from './layouts/pages/home';
import Create from './layouts/pages/create';
import Additems from './layouts/pages/additems';
import Profile from './layouts/pages/profile';
function App() {
  return (
    <Routes>
        <Route
          exact
          path={ROUTES.Login}
          element={<Login/>}        
        />
        <Route
          exact
          path={ROUTES.Signup}
          element={<Signup/>}
        />
        <Route
          exact
          path={ROUTES.Resetpassword}
          element={<Resetpassword/>}
        />
        <Route
          exact
          path={ROUTES.Createpassword}
          element={<CreatePassword/>}
        />
        <Route
          exact
          path={ROUTES.Home}
          element={<Home/>}
        />
        <Route
          exact
          path={ROUTES.Create}
          element={<Create/>}
        />
        <Route
          exact
          path={ROUTES.Additems}
          element={<Additems/>}
        />
        <Route
          exact
          path={ROUTES.Profile}
          element={<Profile/>}
        />
    </Routes>
  );
};

export default App;
