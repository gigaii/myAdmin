import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import './user.css'
import { Link } from "react-router-dom";

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
                            alt="" 
                            className="userShowImg"/>

                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Amirul Safuan</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>

                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">gigaii</span>
                        </div>

                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">10/11/1996</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>

                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">60 1137027856</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">gigaii@gmail.com</span>
                        </div>

                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">Kuala Lumpur | MY</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                           <div className="userUpdateItem">
                               <label>Username</label>
                               <input type="text" placeholder="gigaii" className="userUpdateInput" />
                           </div>

                           <div className="userUpdateItem">
                               <label>Full Name</label>
                               <input type="text" placeholder="Amirul Safuan" className="userUpdateInput" />
                           </div>

                           <div className="userUpdateItem">
                               <label>Email</label>
                               <input type="text" placeholder="gigaii@gmail.com" className="userUpdateInput" />
                           </div>

                           <div className="userUpdateItem">
                               <label>Phone Number</label>
                               <input type="text" placeholder="60 1137027856" className="userUpdateInput" />
                           </div>

                           <div className="userUpdateItem">
                               <label>Address</label>
                               <input type="text" placeholder="Kuala Lumpur | My" className="userUpdateInput" />
                           </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                                        alt=""
                                        className="userUpdateImg"/>
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon"></Publish>
                                </label>
                                <input type="file" id="file" style={{display: "none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
