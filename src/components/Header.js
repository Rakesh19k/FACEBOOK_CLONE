import React from 'react';
import "./CSS/header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "@material-ui/icons/Home"
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import  StorefrontOutlinedIcon  from '@material-ui/icons/StorefrontOutlined';
import  SupervisedUserCircleIcon  from '@material-ui/icons/SupervisedUserCircle';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from './StateProvider';


function Header() {

    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/40px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <div className="header_input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            <div className="header_center">
                <div className="header_option header_option--active">
                    <HomeIcon fontSize="large" titleAccess="Home" />
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize="large" titleAccess="Watch" />
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon fontSize="large" titleAccess="Marketplace" />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize="large" titleAccess="Groups" />
                </div>
                <div className="header_option">
                    <ViewCompactIcon fontSize="large" titleAccess="Gaming" />
                </div>

            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL} style={{height:35, width: 35}} />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
