import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter}>
        <HomePage />
      </RouterProvider>
    </div>
  );
}

export default App;
