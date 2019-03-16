import React from 'react';
import Moment from "react-moment";
import 'moment/locale/fr';
import classNames from "classnames"

export default function LaunchItem({ launch: { flight_number, mission_name, launch_date_local, launch_success } }) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:
            <span
              className={classNames({
                'text-success': launch_success,
                'text-danger': !launch_success
              })}
            >
              {mission_name}
            </span>
          </h4>
          <p>Date: <Moment locale="fr" format="LLLL">{launch_date_local}</Moment></p>
        </div>
        <div className="col-md-3">
          <button type="button" className="btn btn-outline-dark">Details</button>
        </div>
      </div>
    </div>
  )
}
