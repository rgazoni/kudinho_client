import MainArchived from "./components/archivedKudos/MainArchived";
import Main from "./components/landingPage/Main";
import MainReadNewKudos from "./components/readNewKudos/MainReadNewKudos";
import MainNewKudo from "./components/newKudo/MainNewKudo";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient({});

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/newkudo" element={<MainNewKudo />} />
          <Route path="/readkudos" element={<MainReadNewKudos />} />
          <Route path="/archivedkudos" element={<MainArchived />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
