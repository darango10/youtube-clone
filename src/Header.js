import React from 'react';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon/>
                <img
                    className="header_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png"
                    alt="YouTube"
                />
            </div>

            <div className="header_input">
                <input type="text" placeholder="Search"/>
                <SearchIcon className="header_inputButton"/>
            </div>

            <div className="header_icons">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <Avatar alt="Daniel Arango"
                        src={"https://s3-eu-west-1.amazonaws.com/assets.tortugashispanicas.com/fotoscursos/100406.jpg"}/>

            </div>


        </div>
    );
};

export default Header;
