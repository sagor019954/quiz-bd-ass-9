
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Answer from './Component/Answer/Answer';
import Blog from './Component/Blog/Blog';
import Errorpage from './Component/Errorpage/Errorpage';
import Home from './Component/Home/Home'
import Result from './Component/Result/Result';
import Roots from './Component/Roots/Roots';


function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Roots></Roots>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/result',
          element: <Result></Result>
        },
        {
          path: '/answer',
          element: <Answer></Answer>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '*',
      element: <Errorpage></Errorpage>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
