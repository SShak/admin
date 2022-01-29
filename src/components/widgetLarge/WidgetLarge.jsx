import "./widgetLarge.css"

export default function WidgetLarge() {

    const Button = ({type}) => {
      return <button className={"widgetLargeButton " + type}>{type}</button>
    }

  return (
    <div className="widgetLarge">
        <h3 className="widgetLargeTitle">Latest Transactions</h3>
        <table className="widgetLargeTable">
          <tr className="widgetLargeTr">
            <th className="widgetLargeTh">Customer</th>
            <th className="widgetLargeTh">Date</th>
            <th className="widgetLargeTh">Amount</th>
            <th className="widgetLargeTh">Status</th>
          </tr>
          <tr className="widgetLargeTr">
              <td className="widgetLargeUser">
                <img src="https://img8.hotnessrater.com/6638647/belle-delphine-nude-selfie.jpg?w=4000&h=6000" alt="" className="widgetLargeImage" />
                <span className="widgetLargeCustomer">Bella Del</span>
              </td>
              <td className="widgetLargeDate">Jan 29 2022</td>
              <td className="widgetLargeAmount">$69,420</td>
              <td className="widgetLargeStatus">
                <Button type="Approved" />
              </td>
          </tr>
          <tr className="widgetLargeTr">
              <td className="widgetLargeUser">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEkdDZQHrcElQ/profile-displayphoto-shrink_200_200/0/1560978132923?e=1648684800&v=beta&t=9zRW4O8Aw1LIDhpcdf2ldmgMP1_GUKkzeqNvdXlwfzI" alt="" className="widgetLargeImage" />
                <span className="widgetLargeCustomer">Kyle Paradise</span>
              </td>
              <td className="widgetLargeDate">Jan 29 2022</td>
              <td className="widgetLargeAmount">$2.50 </td>
              <td className="widgetLargeStatus">
                <Button type="Declined" />
              </td>
          </tr>
        </table>
    </div>
    )
}
 