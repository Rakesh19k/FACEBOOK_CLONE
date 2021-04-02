import { Avatar } from '@material-ui/core';
import { Add, MoreHoriz, Search, VideoCall } from '@material-ui/icons';
import React from 'react';
import "./CSS/SideBarRight.css";
import Gift from "./Images/gift.png";


function SideBarRight() {
    return (
        <div className="sideBarRight">
            <div className="sidebarRight_top">
                <h3>Birthdays</h3>
                <div className="birthday_people">
                    <img src={Gift} alt="" />
                    <h3>Badal's </h3>
                    <span>birthday is today.</span>
                </div>
            </div>

            <div className="sidebarRight_bottom">
                <div className="sidebarRight_contact">
                    <div className="sidebar_contact">
                        <h3>Contacts</h3>
                    </div>
                    <div className="sidebar_contact_right">
                        <VideoCall className="sidebar_contact_right_icon" />
                        <Search className="sidebar_contact_right_icon" />
                        <MoreHoriz className="sidebar_contact_right_icon" />
                    </div>
                </div>
                <div className="sidebarRight_people">
                    <Avatar style={{ height: 30, width: 30 }} src="https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png" />
                    <h4>Vikram Viku</h4>
                </div>
                <div className="sidebarRight_people">
                    <Avatar style={{ height: 30, width: 30 }} src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
                    <h4>Cooldeep Aadi</h4>
                </div>
                <div className="sidebarRight_people">
                    <Avatar style={{ height: 30, width: 30 }} src="https://c0.wallpaperflare.com/preview/93/872/943/silhouette-photography-of-man-standing-while-holding-dslr-camera.jpg" />
                    <h4>Roshan Yadav</h4>
                </div>
                <div className="sidebarRight_people">
                    <Avatar style={{ height: 30, width: 30 }} src="https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id545262108?k=6&m=545262108&s=612x612&w=0&h=atYvV2j41NyaDjFZAPnUrkaes1DNwMzFeRIOY4XhpAo=" />
                    <h4>Savan Sonu</h4>
                </div>
                <div className="sidebarRight_people">
                    <Avatar style={{ height: 30, width: 30 }} src="https://pagalladka.com/wp-content/uploads/2018/06/happy-images-for-fb-friends-500x375.jpg" />
                    <h4>Sumit Mandal</h4>
                </div>
                <div className="sidebarRight_people">
                    <Avatar style={{ height: 30, width: 30 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_sGZlO_oMOVG1Kl3r6FXleXs7ogmjayMKPA&usqp=CAU" />
                    <h4>Mukesh Kr Sah</h4>
                </div>
                <div className="sidebarRight_people">
                    <Avatar style={{ height: 30, width: 30 }} src="https://wallpapercave.com/wp/wp4540720.jpg" />
                    <h4>Aadil Raza</h4>
                </div>
                <div className="sidebarRight_people">
                    <Avatar style={{ height: 30, width: 30 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQw5LigYN3zgC6TIGPYhKaSvTV1pH5JNANEYK55dRKU5-xz-Kv5AOY89lzwrXwu8q0_Y&usqp=CAU" />
                    <h4>Kumar Jitendar</h4>
                </div>
                <div className="sidebarRight_people">
                    <Avatar style={{ height: 30, width: 30 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDyvRXVPNODL2H-ehHueBHrwpCixEr5KNBS9TAUuCHF1zCYmMMdUkhdS7WKjkgimhFIA&usqp=CAU" />
                    <h4>Pankaj Kumar</h4>
                </div>
                <div className="sidebarRight_people">
                    <Avatar style={{ height: 30, width: 30 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR279iK5oImE8uWsuH-4dcM-gmtS4eeoIJKXQPfbh3mZot5-H7dKRJNBfutS2pxukNNcNQ&usqp=CAU" />
                    <h4>Raghav Juyal</h4>
                </div>
            </div>

            <div className="sidebarRight_bottom_CreateGroups">
                <h3>Group convertaions</h3>
                <div className="sidebarRight_bottom_CreateGroup">
                    <Add />
                    <h3>Create New Group</h3>
                </div>
            </div>

        </div>
    )
}

export default SideBarRight
