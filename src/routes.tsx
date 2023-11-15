import { createBrowserRouter } from 'react-router-dom'
import { HomeLayout, LandingPage, SingleProductPage } from './pages'
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

import { loader as LoadingPage } from './pages/Landing'
import { loader as LoadingSinglePage } from './pages/SingleProduct'

// create route using react-router-dom
const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        loader: LoadingPage(queryClient),
      },
      {
        path: 'products/:productId',
        element: <SingleProductPage />,
        loader: LoadingSinglePage(queryClient),
      },
    ],
  },
])

export default Router
