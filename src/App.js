import { GlobalStyle } from './styles/global'
import { AppRoutes } from "./routes/";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <AppRoutes />
    </>
  );
}

export default App;
