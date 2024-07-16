import './App.css'
import Login from './Components/Login';
import Signup from './Components/Signup';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Login />, // Redirect to login for any unknown paths
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
