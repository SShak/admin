import { Visibility} from "@material-ui/icons"
import "./widgetSmall.css"
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSmall() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
          try {
            const res = await userRequest.get("users/?new=true");
            setUsers(res.data);
          } catch { }
        };
        getUsers();
      }, []);

      //Took off token validation from postman to show users and get around 403 response.  HIGH PRORITY FIX

  return (
      
    <div className="widgetSmall">
        <span className="widgetSmallTitle">New Joined Member</span>
        <ul className="widgetSmallList">
            {users.map((user) => ( 
            <li className="widgetSmallListItem" key={user._id}>
                <img src={
                user.img ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
                alt="" className="widgetSmallImg" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">{user.username}</span>
                </div>
                <button className="widgetSmallButton">
                    <Visibility className="widgetSmallIcon"/>
                    Display
                </button>
            </li>
            ))}
        </ul>
    </div>
    )
}
