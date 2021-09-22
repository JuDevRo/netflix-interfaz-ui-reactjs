import react, {useEffect, useState} from 'react'
import '../styles/Landing.css'

import {Profile as ProfileModel} from '../models/profiles/Profiles'
import Profiles from './Profiles'
import Browse from './Browse'
import Navbar from '../components/Navbar'

const Landing = () => {
    const [user, setUser] = useState<ProfileModel | undefined>(undefined)

    function onProfileClick(profile: ProfileModel) {
        setUser(user => profile)
    }

    return <div className="landing-container">
        <Navbar only_logo={user === undefined} profile_url={user?.image_src} />
        {user === undefined ? <Profiles onProfileClick={onProfileClick}/> : <Browse/>}
    </div>
}

export default Landing