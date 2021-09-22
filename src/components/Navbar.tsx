import react from 'react'
import '../styles/Navbar.css'

import SearchIcon from '@material-ui/icons/Search'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

interface Props{
    only_logo: boolean;
    profile_url?: string;
}

const Navbar = ({only_logo, profile_url}: Props) => {
    if(only_logo) {
        return (<div  className="navbar-container">
                <img className="logo" src="assets/images/netflix.svg" alt=""/>
        </div>)
    } else {
            return (    
                <div className="navbar-container">
                    <img className="logo" src="assets/images/netflix.svg" alt=""/>
                    <button className="button-tertiary button-tertiary-active">Home</button>
                    <button className="button-tertiary">Series</button>
                    <button className="button-tertiary">Film</button>
                    <button className="button-tertiary">Latest</button>
                    <button className="button-tertiary">My List</button>

                    <div className="spacer"></div>

                    <SearchIcon />
                    <CardGiftcardIcon />
                    <NotificationsIcon />
                    {profile_url && <img src={profile_url} className="profile-image" />}
                    <ArrowDropDownIcon />
                </div>
            )
    }
    
}

export default Navbar