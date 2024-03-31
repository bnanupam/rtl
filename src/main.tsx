import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
import Layout from './Layout.tsx';
import Login from './components/Login.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
       <Route path='/' element={<Login />} />
      </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
