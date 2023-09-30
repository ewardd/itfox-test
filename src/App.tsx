import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { BasicLayout } from "./Pages/BasicLayout";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <BasicLayout>
          <Routes>
            <Route path={"/"} element={<Login />} />
            <Route path={"dashboard"} element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BasicLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
