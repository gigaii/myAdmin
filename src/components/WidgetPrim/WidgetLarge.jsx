import './widgetLarge.css'

export default function WidgetLarge() {
    const Button = ({type}) => {
        return <button className={"widgetlargeButton " + type}>{type}</button>
    }
    return (
        <div className="widgetlarge">
           <h3 className="widgetlargeTitle">Latest Transactions</h3>
           <table className="widgetlargeTable">
               <tr className="widgetlargeTr">
                   <th className="widgetlargeTh">Customer</th>
                   <th className="widgetlargeTh">Date</th>
                   <th className="widgetlargeTh">Amount</th>
                   <th className="widgetlargeTh">Status</th>
               </tr>

               <tr className="widgetlargeTr">
                   <td className="widgetlargeUser">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
                       alt="" className="widgetlargeImg" />
                       <span className="widgelargeName">Susan Carol</span>
                   </td>
                   <td className="widgetlargeDate">2 July 2021</td>
                   <td className="widgetlargeAmount">RM122.20</td>
                   <td className="widgetlargeStatus">
                       <Button type="Approved" />
                   </td>
               </tr>

               <tr className="widgetlargeTr">
                   <td className="widgetlargeUser">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                        alt="" className="widgetlargeImg" />
                       <span className="widgelargeName">Susan Carol</span>
                   </td>
                   <td className="widgetlargeDate">2 July 2021</td>
                   <td className="widgetlargeAmount">RM122.20</td>
                   <td className="widgetlargeStatus">
                       <Button type="Pending" />
                   </td>
               </tr>

               <tr className="widgetlargeTr">
                   <td className="widgetlargeUser">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
                       alt="" className="widgetlargeImg" />
                       <span className="widgelargeName">Susan Carol</span>
                   </td>
                   <td className="widgetlargeDate">2 July 2021</td>
                   <td className="widgetlargeAmount">RM122.20</td>
                   <td className="widgetlargeStatus">
                       <Button type="Declined" />
                   </td>
               </tr>
           </table>
        </div>
    )
}