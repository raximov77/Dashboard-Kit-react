import React from 'react'
import AddIcon from "../assets/images/add.svg"
import Circle from "../assets/images/circle.svg"

function Overview() {
  return (
    <div>
        <div className="four-card">
            <div className="first-card">
              <h4 className="first-card-title">Unresolved</h4>
              <strong className="first-card-number">60</strong>
            </div> 
            <div className="first-card">
              <h4 className="first-card-title">Overdue</h4>
              <strong className="first-card-number">16</strong>
            </div> 
            <div className="first-card">
              <h4 className="first-card-title">Open</h4>
              <strong className="first-card-number">43</strong>
            </div> 
            <div className="first-card">
              <h4 className="first-card-title">On hold</h4>
              <strong className="first-card-number">64</strong>
            </div> 
        </div>

        <div className="trends">
                <div className="trends-date">
                    <div className="trends-date-time">
                    <h3 className="trends-date-title">Today's trends</h3>
                    <p className="trends-date-text">as of 25 May 2019, 09:41 PM</p>
                    </div> 
                    <div className="trends-date-days">
                        <div className="trends-date-color-1"></div>
                        <strong className="trends-date-day">Today</strong>
                        <div className="trends-date-color-2"></div>
                        <strong className="trends-date-day">Yesterday</strong>
                    </div>
                </div>

                <div className="trends-number">
                    <div className="trends-number-1">
                        <h4 className="trends-number-1-title">Resolved</h4>
                        <strong className="trends-number-1-quantity">449</strong>
                    </div>
                    <div className="trends-line"></div>
                    <div className="trends-number-1">
                        <h4 className="trends-number-1-title">Received</h4>
                        <strong className="trends-number-1-quantity">426</strong>
                    </div>
                    <div className="trends-line"></div>
                    <div className="trends-number-1">
                        <h4 className="trends-number-1-title">Average first response time</h4>
                        <strong className="trends-number-1-quantity">33m</strong>
                    </div>
                    <div className="trends-line"></div>
                    <div className="trends-number-1">
                        <h4 className="trends-number-1-title">Average response time</h4>
                        <strong className="trends-number-1-quantity">3h 8m</strong>
                    </div>
                    <div className="trends-line"></div>
                    <div className="trends-number-1">
                        <h4 className="trends-number-1-title">Resolution within SLA</h4>
                        <strong className="trends-number-1-quantity">94%</strong>
                    </div>
                </div>
        </div>
        
        <div className='.double-card flex justify-between mt-[30px]'>
        <div className="tickets">
            <h3 className="tickets-title">Unresolved tickets</h3>
            <strong className="tickets-subtitle">Group: <span className="color-tickets">Support</span></strong>
            <strong className="view">View details</strong>

            <div className="request">
                <p className="request-text">Waiting on Feature Request</p>
                <strong className="request-number">4238</strong>
            </div>
            <div className="request">
                <p className="request-text">Awaiting Customer Response</p>
                <strong className="request-number">1005</strong>
            </div>
            <div className="request">
                        <p className="request-text">Awaiting Developer Fix</p>
                        <strong className="request-number">914</strong>
            </div>
            <div className="pending">
                <p className="pending-text">Pending</p>
                <strong className="pending-number">281</strong>
            </div>
        </div>

        <div className="tasks">
            <h3 className="task-title">Tasks</h3>
            <strong className="task-subtitle">Today</strong>
            <strong className="task-view">View all</strong>

            <div className="create">
                <p className="create-text">Create new task</p>
                <img src={AddIcon} alt="plus" width={24} height={24}/>
            </div>
            <div className="finish">
                <img src={Circle} alt="plus" width={20} height={20}/>
                <p className="finish-text">Finish ticket update</p>
                <span className="finish-color">Urgent</span>
            </div>
            <div className="example">
                <img src={Circle} alt="plus"  width={20} height={20}/>
                <p className="example-text">Create new ticket example</p>
                <span className="example-color">New</span>
            </div>
            <div className="update">
                <img src={Circle} alt="plus"  width={20} height={20}/>
                <p className="update-text">Create new ticket example</p>
                <span className="update-color">New</span>
            </div>
        </div>
        </div>
        

    </div>
  )
}

export default Overview