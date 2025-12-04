import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Router from './routes';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />
      <ToastContainer position="top-right" autoClose={2000} />
    </QueryClientProvider>
  );
}

export default App;
