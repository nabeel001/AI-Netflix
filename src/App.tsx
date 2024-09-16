import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/store/appStore";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
      <ToastContainer theme="dark" position="top-right" />
    </Provider>
  );
}

export default App;
