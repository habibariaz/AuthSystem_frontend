import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./Pages/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<SignUp />} />
          <Route exact path='/SignIn' element={<SignIn />} />
          <Route exact path='/User' element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
