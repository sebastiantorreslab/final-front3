import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBarContainer } from "./components/layout/NavBar/NavBarContainer";
import { FooterContainer } from "./components/layout/Footer/FooterContainer";
import { HomeContainer } from "./components/pages/Home/HomeContainer";
import { DentistContainer } from "./components/pages/Professionals/DentistContainer";
import { DentistDetailContainer } from "./components/pages/Professionals/DentistDetailContainer";
import { ContactContainer } from "./components/pages/Contact/ContactContainer";
import { GlobalContextProvider } from "./context/GlobalContext";
import { FavsContainer } from "./components/pages/Favs/FavsContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalContextProvider>
          <Routes>
            <Route element={<NavBarContainer />}>
              <Route element={<FooterContainer />}>
                <Route path="/" element={<HomeContainer />} />
                <Route path="/dentists" element={<DentistContainer />} />
                <Route
                  path="/dentist/:id"
                  element={<DentistDetailContainer />}
                />
                <Route path="/favs" element={<FavsContainer />} />
                <Route path="/contact" element={<ContactContainer />} />
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
