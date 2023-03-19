import { Provider } from "react-redux";
import { Navbar } from "./components/Navbar";
import SideNavbar from "./components/SideNavbar";
import store from "./utils/store";

function App() {
  return (
    <div>
      <Provider store={store}>
      <Navbar />
      <SideNavbar />
      </Provider>
    </div>
  );
}

export default App;
