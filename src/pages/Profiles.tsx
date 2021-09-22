import react from 'react'
import '../styles/Profiles.css'
import profiles from '../data/profiles/profiles.json'
import Button from '../components/Button'

interface Props {
    onProfileClick: Function;
}

const Profiles = ({onProfileClick}: Props) => {
    return <div className="profiles-container">
    <span className="title">Who's watching?</span>
    <div className="profiles">
        {profiles.map((profile, index) => <div key={index} onClick={(e) => onProfileClick(profile)} className="profile">
            <img src={profile.image_src} alt="" className="image"/>
            <span className="username">{profile.username}</span>
        </div>)}
    </div>
    <Button ghost secondary label="MANAGE PROFILES"/>
</div>
}

export default Profiles