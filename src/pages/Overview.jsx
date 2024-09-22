import React from 'react'

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

        <div class="trends">
                <div class="trends-date">
                    <div class="trends-date-time">
                    <h3 class="trends-date-title">Today's trends</h3>
                    <p class="trends-date-text">as of 25 May 2019, 09:41 PM</p>
                    </div> 
                    <div class="trends-date-days">
                        <div class="trends-date-color-1"></div>
                        <strong class="trends-date-day">Today</strong>
                        <div class="trends-date-color-2"></div>
                        <strong class="trends-date-day">Yesterday</strong>
                    </div>
                </div>

                <div class="trends-number">
                    <div class="trends-number-1">
                        <h4 class="trends-number-1-title">Resolved</h4>
                        <strong class="trends-number-1-quantity">449</strong>
                    </div>
                    <div class="trends-line"></div>
                    <div class="trends-number-1">
                        <h4 class="trends-number-1-title">Received</h4>
                        <strong class="trends-number-1-quantity">426</strong>
                    </div>
                    <div class="trends-line"></div>
                    <div class="trends-number-1">
                        <h4 class="trends-number-1-title">Average first response time</h4>
                        <strong class="trends-number-1-quantity">33m</strong>
                    </div>
                    <div class="trends-line"></div>
                    <div class="trends-number-1">
                        <h4 class="trends-number-1-title">Average response time</h4>
                        <strong class="trends-number-1-quantity">3h 8m</strong>
                    </div>
                    <div class="trends-line"></div>
                    <div class="trends-number-1">
                        <h4 class="trends-number-1-title">Resolution within SLA</h4>
                        <strong class="trends-number-1-quantity">94%</strong>
                    </div>
                </div>
        </div>
        
        <div className='double-card'>
        <div class="tickets">
            <h3 class="tickets-title">Unresolved tickets</h3>
            <strong class="tickets-subtitle">Group: <span class="color-tickets">Support</span></strong>
            <strong class="view">View details</strong>

            <div class="request">
                <p class="request-text">Waiting on Feature Request</p>
                <strong class="request-number">4238</strong>
            </div>
            <div class="request">
                <p class="request-text">Awaiting Customer Response</p>
                <strong class="request-number">1005</strong>
            </div>
            <div class="request">
                        <p class="request-text">Awaiting Developer Fix</p>
                        <strong class="request-number">914</strong>
            </div>
            <div class="pending">
                <p class="pending-text">Pending</p>
                <strong class="pending-number">281</strong>
            </div>
        </div>

        
        </div>
        

    </div>
  )
}

export default Overview