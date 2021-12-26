import './featuredInfo.css'
import {ArrowDropDown, ArrowDropUp} from '@material-ui/icons';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">RM2,415</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDropDown className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">RM4,415</span>
                    <span className="featuredMoneyRate">-1.4 <ArrowDropDown className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">RM2,415</span>
                    <span className="featuredMoneyRate">+2.4 <ArrowDropUp className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
