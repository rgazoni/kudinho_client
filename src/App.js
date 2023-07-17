import MainArchived from "./components/archivedKudos/MainArchived";
import Main from "./components/landingPage/Main";
import MainReadNewKudos from "./components/readNewKudos/MainReadNewKudos";
import MainNewKudo from "./components/newKudo/MainNewKudo";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/login/SignupPage";

import axios from "axios";

import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (sessionStorage.getItem("isFirstTimeLoaded") === null) {
          const response = await axios(
            "http://localhost:3001/api/readnewkudos"
          );
          sessionStorage.setItem("kudos", JSON.stringify(response.data));
          sessionStorage.setItem("isFirstTimeLoaded", JSON.stringify(true));
        }
      } catch (e) {
        sessionStorage.setItem("kudos", JSON.stringify([]));
      }
    };
    fetchData();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/newkudo" element={<MainNewKudo />} />
          <Route path="/readkudos" element={<MainReadNewKudos />} />
          <Route path="/archivedkudos" element={<MainArchived />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
