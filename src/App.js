import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home.js'
import Asia from './pages/Asia.js'
import Iran from './pages/Iran.js'
import store from './redux/Store.js'
import { Provider } from "react-redux";
import Footer from "./components/Footer.js";
import Eropa from "./pages/Eropa.js";
import TourAsia from './pages/TourAsia.js'
import TourIran from './pages/TourIran.js'
import TourEropa from './pages/TourEropa.js'


function App() {
  return (
        <>

            <BrowserRouter>
              <Provider  store={store}>
                <Header />
               <Routes>
                 <Route path="/" element={<Home />}></Route>
                 <Route path="/asia" element={<Asia />}></Route>
                 <Route path="/asia/tourAsia/:Id" element={<TourAsia />}></Route>
                 <Route path="/iran" element={<Iran />}></Route>
                 <Route path="/iran/tourIran/:Id" element={<TourIran />}></Route>
                 <Route path="/eropa" element={<Eropa />}></Route>
                 <Route path="/eropa/tourEropa/:Id" element={<TourEropa />}></Route>
               </Routes>
               <Footer />
              </Provider>
            </BrowserRouter>
      
   
        </>
  );
}

export default App;
