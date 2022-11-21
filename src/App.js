
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Answer from './Component/Answer/Answer';
import Blog from './Component/Blog/Blog';
import Errorpage from './Component/Errorpage/Errorpage';
import Home from './Component/Home/Home'
import Question from './Component/Question/Question';
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
          element: <Home></Home>,
          loader: async () => { return fetch('https://openapi.programming-hero.com/api/quiz') },
        },
        {
          path: '/home',
          element: <Home></Home>,
        },
        {
          path: '/home/:homeId',
          element: <Question></Question>,
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.homeId}`)
          }
        },
        {
          path: '/answer',
          element: <Answer></Answer>,
          loader: async () => { return fetch('https://openapi.programming-hero.com/api/quiz') },
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
