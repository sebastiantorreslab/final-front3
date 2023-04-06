import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/layout/NavBar/NavBar";
import { Footer } from "./components/layout/Footer/Footer";
import { Home } from "./components/Home";
import { Dentists } from "./components/Dentists";
import { DentistContainer } from "./components/DentistContainer";
import { Contact } from "./components/Contact";
import { Favs } from "./components/Favs";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalContextProvider>
          <Routes>
            <Route element={<NavBar />}>
              <Route element={<Footer />}>
                <Route path="/" element={<Home />} />
                <Route path="/dentists" element={<Dentists />} />
                <Route path="/dentist/:id" element={<DentistContainer />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/favs" element={<Favs />} />
              </Route>
            </Route>
            <Route path="*" element={<h1>404-not found</h1>} />
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
