import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer"></div>
                    <span className="featuredMoney">$1,000</span>
                    <span className="featuredMoneyRate">
                        -10.5 <ArrowDownward />
                    </span>
                <div>
            </div>        
                    <span className="featuredSub">Compared to last month</span>
                </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer"></div>
                    <span className="featuredMoney">$5,000</span>
                    <span className="featuredMoneyRate">
                        -1.5 <ArrowDownward />
                    </span>
                <div>
            </div>        
                    <span className="featuredSub">Compared to last month</span>
                </div> 
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer"></div>
                    <span className="featuredMoney">$750</span>
                    <span className="featuredMoneyRate">
                        +2.5 <ArrowUpward />
                    </span>
                <div>
                    <span className="featuredSub">Compared to last month</span>
                </div> 
            </div>                      
        </div>
    )
}
