import { NavBar } from './components/NavBar'
import './App.css'
import { Routes ,Route } from 'react-router'
import { CreateProfile } from './pages/CreateProfile'
import {CreateTeamProfile} from "./pages/CreateTeamProfile"
import { HomePage } from './pages/HomePage'
import { MyProfile } from './pages/MyProfile'
import { ProfileDetails } from './pages/ProfileDetails'
import { DisplayTeams } from './pages/DisplayTeams'
import { EditTeamProfile } from './pages/EditTeamProfile'
import { EditSoloProfile } from './pages/EditSoloProfile'

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
    <Route path='/edit-solo-profile' element={<EditSoloProfile />} />
    <Route path='/edit-team-profile' element={<EditTeamProfile />} />
       
    </Routes>
    </>
  )
}

export default App
