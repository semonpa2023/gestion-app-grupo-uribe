import Login from "./components/layouts/auth/Login";
import{createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./components/layouts/pages/Home";
let router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/Home",
    element: <Home/>
  },
  
])

function App() {
  return (
    <div className="login-container">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;