import React from 'react'
import './App.css'
import Home from './stores/pages/Home'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import MobilePage from './stores/pages/mobilePage'
import Computers from './stores/pages/computersPage'
import Watch from './stores/pages/watchPage'
import Ac from './stores/pages/acPage'
import Fridge from './stores/pages/fridgePage'
import Kitchen from './stores/pages/kitchenPage'
import Tv from './stores/pages/tvPage'
import Furniture from './stores/pages/furniturePage'
import Books from './stores/pages/booksPage'
import Men from './stores/pages/menPage'
import Speaker from './stores/pages/speakerPage'
import Women from './stores/pages/womenPage'
import MobileSingle from './singles/MobileSingle'
import AcSingle from './singles/AcSingle'
import ComputerSingle from './singles/ComputerSingle'
import FridgeSingle from './singles/fridgeSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import TvSingle from './singles/TvSingle'
import KitchenSingle from './singles/KitchenSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import BooksSingle from './singles/booksSingle'
import WatchSingle from './singles/WatchSingle'
import MenSingle from './singles/MenSingle'
import WomenSingle from './singles/WomenSingle'
import UserCart from './stores/UserCart'
import PaymentPage from './stores/pages/PaymentsPage'
import Login from './stores/components/login'

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/e-commerce" element={<Home />} />
      <Route path="/products" element={<Home />} />
      <Route path="/mobiles" element={<MobilePage />} />
      <Route path="/computers" element={<Computers />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/ac" element={<Ac />} />
      <Route path="/fridge" element={<Fridge />} />
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/tv" element={<Tv />} />
      <Route path="/furniture" element={<Furniture />} />
      <Route path="/books" element={<Books />} />
      <Route path="/men" element={<Men />} />
      <Route path="/speaker" element={<Speaker />} />
      <Route path="/women" element={<Women />} />
      <Route path="/mobile/:id" element={<MobileSingle />} />
      <Route path="/ac/:id" element={<AcSingle />} />
      <Route path="/computers/:id" element={<ComputerSingle />} />
      <Route path="/fridge/:id" element={<FridgeSingle />} />
      <Route path="/speaker/:id" element={<SpeakerSingle />} />
      <Route path="/tv/:id" element={<TvSingle />} />
      <Route path="/kitchen/:id" element={<KitchenSingle />} />
      <Route path="/furniture/:id" element={<FurnitureSingle />} />
      <Route path="/books/:id" element={<BooksSingle />}/>
      <Route path='/watch/:id' element={<WatchSingle />} />
      <Route path='/men/:id' element={<MenSingle />} />
      <Route path='/women/:id' element={<WomenSingle />} />
      <Route path='/cart' element={<UserCart />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/login" element={<login />} />
    </Routes>
    
    
    

  )
}

export default App
