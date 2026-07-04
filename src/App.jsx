import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer showCTA={true} />
            <ScrollToTopButton />
          </>
        }
      />

      <Route
        path="/reservation"
        element={
          <>
            <Navbar />
            <Reservation />
            <Footer showCTA={false} />  
            <ScrollToTopButton />
          </>
        }
      />
    </Routes>
  );
}

export default App;