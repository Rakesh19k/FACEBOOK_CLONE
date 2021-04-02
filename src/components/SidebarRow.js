import { Avatar } from '@material-ui/core';
import React from 'react';
import "./CSS/SidebarRow.css";
import { useStateValue } from './StateProvider';

function SidebarRow({ src, Icon, title }) {

  const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
           <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
