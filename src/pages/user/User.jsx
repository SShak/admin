import { Link } from "react-router-dom";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import "./user.css"

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser"><button className="userAddButton">Create</button></Link>
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
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">belldell96</span>
                        </div> 
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">10/10/1910</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">(123) 456-7890</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">belldell96@gmail.com</span>
                        </div> 
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">Iowa | USA</span>
                        </div>     
                </div>
            </div>    
            <div className="userUpdate">
                <span className="userUpdateTitle">Update</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder="belldell96" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder="Bella Dell" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder="(123) 456-7890" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder="belldell96@gmail.com" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder="Iowa | USA" className="userUpdateInput" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://townsquare.media/site/252/files/2020/06/belle-delphine.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89" alt="" />
                            <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
