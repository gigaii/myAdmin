import './widgetSmall.css'
import {Visibility} from '@material-ui/icons'

export default function Widgetsmall() {
    return (
        <div className="widgetsmall">
           <span className="widgetsmallTitle">New Join Members</span>
           <ul className="widgetsmallList">
               <li className="widgetsmallListItem">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" className="widgetsmallImg" />
                   <div className="widgetsmallUser">
                       <span className="widgetsmallUsername">Amirul Safuan</span>
                       <span className="widgetsmallUserTitle">Web Developer</span>
                   </div>
                   <button className="widgetsmallButton">
                        <Visibility className="widgetsmallIcon"/>
                        Display
                   </button>
               </li>

               <li className="widgetsmallListItem">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" className="widgetsmallImg" />
                   <div className="widgetsmallUser">
                       <span className="widgetsmallUsername">Amirul Safuan</span>
                       <span className="widgetsmallUserTitle">Web Developer</span>
                   </div>
                   <button className="widgetsmallButton">
                        <Visibility className="widgetsmallIcon"/>
                        Display
                   </button>
               </li>

               <li className="widgetsmallListItem">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" className="widgetsmallImg" />
                   <div className="widgetsmallUser">
                       <span className="widgetsmallUsername">Amirul Safuan</span>
                       <span className="widgetsmallUserTitle">Web Developer</span>
                   </div>
                   <button className="widgetsmallButton">
                        <Visibility className="widgetsmallIcon"/>
                        Display
                   </button>
               </li>

               <li className="widgetsmallListItem">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" className="widgetsmallImg" />
                   <div className="widgetsmallUser">
                       <span className="widgetsmallUsername">Amirul Safuan</span>
                       <span className="widgetsmallUserTitle">Web Developer</span>
                   </div>
                   <button className="widgetsmallButton">
                        <Visibility className="widgetsmallIcon"/>
                        Display
                   </button>
               </li>

               <li className="widgetsmallListItem">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" className="widgetsmallImg" />
                   <div className="widgetsmallUser">
                       <span className="widgetsmallUsername">Amirul Safuan</span>
                       <span className="widgetsmallUserTitle">Web Developer</span>
                   </div>
                   <button className="widgetsmallButton">
                        <Visibility className="widgetsmallIcon"/>
                        Display
                   </button>
               </li>
           </ul>
        </div>
    )
}
