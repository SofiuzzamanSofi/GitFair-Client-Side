import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ChatOnline from './Components/ChatOnline/ChatOnline';

const queryClient = new QueryClient()
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <Elements stripe={stripePromise}>

      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
          <ChatOnline />
        </AuthProvider>
        <Toaster />
      </QueryClientProvider>

    </Elements>
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
