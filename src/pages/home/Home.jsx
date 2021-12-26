import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import {userData} from '../../Data'
import WidgetLarge from "../../components/WidgetPrim/WidgetLarge"
import Widgetsmall from "../../components/WidgetSecn/Widgetsmall"

export default function home() {
    return (
        <div className="home">
            <FeaturedInfo/> 
            <Chart data={userData} title="User Analytics" grid datakey="Active User"/>
            <div className="homeWidgets">
                <Widgetsmall/>
                <WidgetLarge/>
            </div>
        </div>
    )
}
