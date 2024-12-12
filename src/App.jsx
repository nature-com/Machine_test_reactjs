import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import AllRoutes from './route/RoutesConfig';

function App() {

  const allRoutes = createBrowserRouter(AllRoutes);
  return <RouterProvider router={allRoutes} />;
}

export default App
