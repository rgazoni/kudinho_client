import MainArchived from "./components/archivedKudos/MainArchived";
import Main from "./components/landingPage/Main";
import MainReadNewKudos from "./components/readNewKudos/MainReadNewKudos";
import MainNewKudo from "./components/newKudo/MainNewKudo";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/login/SignupPage";
import PageNotFound from "./components/PageNotFound";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./components/login/AuthContext";
import SupportFeedback from "./components/SupportFeedback";

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
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <BrowserRouter>
        <SupportFeedback />
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/newkudo" element={<MainNewKudo />} />
            <Route path="/readkudos" element={<MainReadNewKudos />} />
            <Route path="/archivedkudos" element={<MainArchived />} />
            <Route path="*" exact={true} element={<PageNotFound />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
