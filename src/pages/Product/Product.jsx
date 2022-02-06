import { Link } from "react-router-dom"
import "./product.css"
import Chart from "../../components/chart/Chart"
import {productData} from "../home/dummyData"

export default function Product() {
  return (
        <div className='product'>
            <div className="productTitleContainer">
              <h1 className="productTitle">Product</h1>
              <Link to="/newproduct">
                <button className="productAddButton">Create</button>
              </Link>
            </div>
            <div className="productTop">
              <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
              </div>
              <div className="productTopRight">
                <div className="productInfoTop">
                  <img src="https://da6npmvqm28oa.cloudfront.net/42bdd5e2-4b4e-4f17-a87e-de1570774e60.jpg" alt="" className="productInfoImg"/>
                  <span className="productName">Tako Dildo</span>
                </div>
                <div className="productInfoBottom">
                  <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">420</span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <span className="productInfoValue">69,420</span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">active:</span>
                    <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">in stock:</span>
                    <span className="productInfoValue">no</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="productBottom"></div>
        </div>
  )
}
