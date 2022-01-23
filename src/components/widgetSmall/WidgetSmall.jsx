import { Visibility } from "@material-ui/icons"
import "./widgetSmall.css"

export default function WidgetSmall() {
  return (
    <div className="widgetSmall">
        <span className="widgetSmallTitle">New Joined Member</span>
        <ul className="widgetSmallList">
            <li className="widgetSmallListItem">
                <img src="https://img8.hotnessrater.com/6638647/belle-delphine-nude-selfie.jpg?w=4000&h=6000" alt="" className="widgetSmallImg" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">Bella Del</span>
                    <span className="widgetSmallUserTitle">Daddies Girl</span>
                </div>
                <button className="widgetSmallButton">
                    <Visibility />
                    Display
                </button>
            </li>
        </ul>
    </div>
    )
}
