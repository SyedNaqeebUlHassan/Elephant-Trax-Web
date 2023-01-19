import { ROUTES } from "./constants";
import { Route, Routes } from "react-router-dom";
import Login from "./layouts/authentication/login";
import Signup from './layouts/authentication/sign-up';
import Resetpassword from './layouts/authentication/reset-password';
import CreatePassword from './layouts/authentication/create-password';
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
    </Routes>
  );
}

export default App;
