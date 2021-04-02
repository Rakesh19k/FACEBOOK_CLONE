import React from 'react'
import Story from './Story'
import "./CSS/StoryReel.css"
import { NavigateNext } from '@material-ui/icons'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" profileSrc="https://scontent.fdel5-1.fna.fbcdn.net/v/t1.0-9/40038817_550920858665324_5632532554218209280_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=U2bHt4vHeQEAX_saUA1&_nc_ht=scontent.fdel5-1.fna&oh=9ae41ab89e61224ef026b66ea1df52c8&oe=60878982" title="Rakesh" />
            <Story image="https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=6&m=1072093690&s=612x612&w=0&h=Eyk67XBt4sr3Bk1MubM6dHpvEVNICX4L7FumWhcTwuY=" profileSrc="https://i.pinimg.com/474x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg" title="Badal" />
            <Story image="https://www.w3schools.com/w3css/img_forest.jpg" profileSrc="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Rocky" />
            <Story image="https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg" profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPoeuHLJNNM9HMW_5jJoXCFpfd-F44yJPqVyezK_9J-v6wHityR4SwFL9dIKfKcYb6CI&usqp=CAU" title="Chhotu" />
            <Story image="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" profileSrc="https://i.pinimg.com/originals/31/84/b7/3184b70c34fdac069f66d3302618530e.jpg" title="Handsome" />
            <NavigateNext titleAccess="See all stories" />
        </div>
    )
}

export default StoryReel
