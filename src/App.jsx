import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/router';

function App() {

  return (
    <div className='bg-primary min-h-full'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
