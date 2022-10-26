import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import { useContext } from 'react';
import { ThemeContext } from './context/AuthProvider/AuthProvider';
import ReactSwitch from 'react-switch';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div id={theme}>

      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
