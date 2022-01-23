import React from 'react'
import "./topbar.css"
import {Notifications, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Overseer</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <Notifications />
                    <span className= "topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language /> 
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=webp,fit=pad,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F9ea30536617062745d79c9d74301aaf7.png" alt="" className="topAvatar" />
            </div>
            </div>
        </div>
    )
}
