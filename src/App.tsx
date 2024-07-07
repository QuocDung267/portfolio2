import { BrowserRouter } from "react-router-dom";
import RootRouter from "./router/root";

function App() {
  return (
    <>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
