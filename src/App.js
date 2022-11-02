import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AccountDetail from "./pages/AccountDetail";
import Add from "./pages/Add";
import Clients from "./pages/Client";

function App() {
  return (
    <div className="App text-capitalize">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Clients />} />
          <Route path="/add" element={<Add />} />
          <Route path="/view/:id" element={<AccountDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
