import { NavBar } from './components/NavBar'
import './App.css'
import { Routes ,Route } from 'react-router'
import { CreateProfile } from './pages/CreateProfile'
import {CreateTeamProfile} from "./pages/CreateTeamProfile"
import { HomePage } from './pages/HomePage'
import { MyProfile } from './pages/MyProfile'
import { ProfileDetails } from './pages/ProfileDetails'
import { DisplayTeams } from './pages/DisplayTeams'

function App() {


  return (
    <>
    <NavBar />
    <Routes>
    <Route index element={<HomePage />} />
    <Route path='create-profile' element={<CreateProfile />} />
    <Route path='create-team-profile' element={<CreateTeamProfile />} />
    <Route path='my-profile' element={<MyProfile />} />
    <Route path='profile/:id' element={<ProfileDetails />} />   
    <Route path='/display-teams' element={<DisplayTeams />} />   
    </Routes>
    </>
  )
}

export default App
