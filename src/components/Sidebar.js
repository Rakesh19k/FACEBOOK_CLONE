import { EventBusy, ExpandMore, History, LocalHospital, People, Storefront, Subscriptions, SupervisedUserCircle, TurnedIn } from '@material-ui/icons';
import React from 'react';
import "./CSS/Sidebar.css";
import SidebarRow from './SidebarRow';
import { useStateValue } from './StateProvider';

function Sidebar() {

    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={ user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
            <SidebarRow Icon={People} title="Friends" />
            <SidebarRow Icon={SupervisedUserCircle} title="Gropus" />
            <SidebarRow Icon={Storefront} title="Marketplace" />
            <SidebarRow Icon={Subscriptions} title="Watch" />
            <SidebarRow Icon={EventBusy} title="Events" />
            <SidebarRow Icon={History} title="Memories" />
            <SidebarRow Icon={TurnedIn} title="Saved" />
            <SidebarRow Icon={ExpandMore} title="See more" />
        </div>
    )
}

export default Sidebar
