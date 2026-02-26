import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Components/Homepage/HomePage'
import Table from './Components/Dineinn/Table'
import Food from './Components/Foodinn/Foodinn'
import Baar from './Components/Wineinn/Baar'
import GardenTable from './Components/Garden/GardenTable'
import Partyinn from './Components/Partymenu/PartyInn'
import Laundry from './Components/Laundryinn/Laundryinn'
import CheckIn from './Components/CheckInn/checkinn'
import Navbaarlogin from './Components/LogInPage/Navbbaar'
import Login from './Components/LogInPage/LogIn'
import Signup from './Components/LogInPage/SignUp'
import AddRoom from './Components/CheckInn/AddRoom'
import RoomView from './Components/CheckInn/Room'




function App() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                // <Route path='/Signup' element={<Signup />} />
                <Route path='/dashboard' element={<Homepage />} />
                <Route path="/admin/add-room" element={<AddRoom />} />
                <Route path='/Dineinn' element={<Table />} />
<<<<<<< HEAD
                <Route path='/Room' element={<RoomView />} />
=======
                <Route path='/Romm_veiw' element={<Room_view />} />
>>>>>>> 453a6542a7ebcda37d3425e3cbdc243205028bba
                <Route path='/Foodinn' element={<Food />} />
                <Route path='/Baarinn' element={<Baar />} />
                <Route path='/Gardeninn' element={<GardenTable />} />
                <Route path='/Partyinn' element={<Partyinn />} />
                <Route path='/Laundryinn' element={<Laundry />} />
                <Route path='/checkin/:roomId' element={<CheckIn />} />
                <Route Path='/Navbaar' element={<Navbaarlogin />} />
            </Routes>
        </BrowserRouter>

    </>)

}

export default App
