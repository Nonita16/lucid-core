import * as React from 'react';
import { Link } from 'react-router-dom';

const LayoutCard = (props: any) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h4><Link to="/">Logo</Link></h4>
            </div>
            <div className="card-body">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutCard;