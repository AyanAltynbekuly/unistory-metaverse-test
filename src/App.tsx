import { useEthers } from "@usedapp/core/dist/esm/src/hooks";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "../src/components/Header/Header";
import MainPage from "./components/Pages/MainPage/MainPage";
import UserPage from "./components/Pages/UserPage/userPage";
function App() {
  const { activateBrowserWallet, account } = useEthers();

  return (
    <BrowserRouter>
      <div className="container">
        <Header activate={activateBrowserWallet} account={account} />
        <Routes>
          <Route path="/main" element={<MainPage account={account} />}></Route>
          <Route path="/user/:id" element={<UserPage />}></Route>
          <Route path="/*" element={<Navigate to="/main" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
