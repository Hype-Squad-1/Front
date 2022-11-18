import Home from "./pages/home";
import Main from "./components/main";
import GlobalStyle from './style/globalStyle';
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}