import React from 'react'
 
function Sidebar() {
  return (
    <div className="sidebar">
       <div className="subcont">
        <div className="board">Board.</div>
        <div>
        <div className="content">
            <div className="context"><img src='./images/db.png' className="icons"/>Dashboard</div>
            <div className="context"><img src='./images/trans.png' className="icons"/>Transactions</div>
            <div className="context"><img src='./images/sch.png' className="icons"/>Schedules</div>
            <div className="context"><img src='./images/user_icon.png' className="icons"/>Users</div>
            <div className="context"><img src='./images/setting.png' className="icons"/>Settings</div>
        </div>
        <div className="botsubcont">
            <div className="help">Help</div>
            <div className="help">Contact Us</div>
        </div>
        </div>
       </div>
    </div>
   
  )
}

export default Sidebar