import { PermIdentity } from "@material-ui/icons"
import "./user.css"

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img 
                        src="https://townsquare.media/site/252/files/2020/06/belle-delphine.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89" 
                        alt="" 
                        className="userShowImg" 
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Bella Dell</span>
                        <span className="userShowUserTitle">Daddies Girl</span>
                    </div>
                </div> 
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <PermIdentity className="userShowIcon" />
                    <span className="userShowInfoTitle">belldell96</span>
                </div>
            </div>    
            <div className="userUpdate"></div>
        </div>
    </div>
  )
}
