import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BasicRouter } from "./Router";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <BasicRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
