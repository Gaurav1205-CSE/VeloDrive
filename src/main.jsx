import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import { ClerkProvider } from '@clerk/clerk-react'
import Profile from './profile'
import AddListing from './add-listing'
import { Toaster } from './components/ui/sonner'
import SearchByCategory from './search/[category]'
import SearchByOptions from './search'
import ListingDetail from './listing-details/[id]'

import Success from './Success'; // Import the Success component
import Cancel from './Cancel'; // Import the Cancel component
import Pricing from './listing-details/components/Pricing'; // Your Pricing component


const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:'/add-listing',
      element:<AddListing/>
    },
    {
      path:'/search',
      element:<SearchByOptions/>
    },
    {
      path:'/search/:category',
      element:<SearchByCategory/>
    },
    {
      path:'/listing-details/:id',
      element:<ListingDetail/>
    },
    {
      path: '/success',
      element: <Success />, // Route for success page
    },
    {
      path: '/cancel',
      element: <Cancel />, // Route for cancel page
    },
    {
      path: '/pricing',
      element: <Pricing />, // Your Pricing component
    },
    
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      <Toaster />
    </ClerkProvider>
  </StrictMode>,
)

export default function App() {
  return <RouterProvider router={router} />;
}
