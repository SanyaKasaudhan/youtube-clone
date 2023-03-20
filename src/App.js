import { Provider } from "react-redux";
import Body from "./components/Body";
import { Navbar } from "./components/Navbar";
import store from "./utils/store";

function App() {
  return (
    <div>
      <Provider store={store}>
      <Navbar />
      <Body />
      </Provider>
    </div>
  );
}

export default App;
