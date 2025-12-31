import { NavBar } from './components/NavBar'
import './App.css'
import { Routes ,Route } from 'react-router'
import { CreateProfile } from './pages/CreateProfile'
import { HomePage } from './pages/HomePage'
import { MyProfile } from './pages/MyProfile'
import { ProfileDetails } from './pages/ProfileDetails'

function App() {


  return (
    <>
    <NavBar />
    <Routes>
    <Route index element={<HomePage />} />
    <Route path='create-profile' element={<CreateProfile />} />
    <Route path='my-profile' element={<MyProfile />} />
    <Route path='profile-details' element={<ProfileDetails />} />
    </Routes>
    </>
  )
}

export default App
