import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<></>}>
         
        </Route>
        <Route exact path="/sign" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
