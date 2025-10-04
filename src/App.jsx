import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Components/Homepage/HomePage'
import Table from './Components/Dineinn/Table'
import Food from './Components/Foodinn/Foodinn'
import Baar from './Components/Wineinn/Baar'
import GardenTable from './Components/Garden/GardenTable'
import Partyinn from './Components/Partymenu/PartyInn'
import Laundry from './Components/Laundryinn/Laundryinn'
import Room from './Components/CheckInn/Room'
import CheckIn from './Components/CheckInn/checkinn'
import Login from './Components/Homepage/Loginn'

function App() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/LogIn' element={<Login />} />
                <Route path='/Checkinn' element={<Room />} />
                <Route path='/Dineinn' element={<Table />} />
                <Route path='/Foodinn' element={<Food />} />
                <Route path='/Baarinn' element={<Baar />} />
                <Route path='/Gardeninn' element={<GardenTable />} />
                <Route path='/Partyinn' element={<Partyinn />} />
                <Route path='/Laundryinn' element={<Laundry />} />
                <Route path='/Checkinfrom' element={<CheckIn />} />
            </Routes>
        </BrowserRouter>

    </>)

}

export default App
