import { BrowserRouter, Routes, Route } from "react-router-dom";
import GripTest from "./pages/griptest/testgrip";
import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/test" element={<GripTest />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="*"
          element={
            <main style={({ padding: "1rem" }, { color: "red" })}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
