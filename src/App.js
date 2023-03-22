import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import { Navbar } from "./components/Navbar";
import VideoCard from "./components/VideoCard";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";

const router = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <VideoCard />,
    },
    {
      path: "watch",
      element: <WatchPage />,
    },
  ],
}]);
function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
