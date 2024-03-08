import { Link } from "react-router-dom";
import CommonRoutes from "./routes/CommonRoutes";
import "./App.css";
function App() {
  return (
    <>
      <header className="header">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/"}>
            <li>Gallery</li>
          </Link>
        </ul>
      </header>
      <CommonRoutes />
    </>
  );
}
export default App;
