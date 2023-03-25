import { Provider } from "react-redux";
import Body from "./components/Body";
import { Navbar } from "./components/Navbar";
import store from "./utils/store";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MaiContainer from "./components/MaiContainer";
import WatchVideo from "./components/WatchVideo";
import Subscribe from "./components/Subscribe";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    
    children: [
      {
        path: "/",
        element: <MaiContainer />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
      {
        path: "/watchlist",
        element: <Subscribe />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
      <Navbar />
      <RouterProvider router={appRouter} />

      </Provider>
    </div>
  );
}

export default App;
