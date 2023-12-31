import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/router';

function App() {

  return (
    <div className='max-h-screen bg-blue-950'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
