import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';

class ListCard extends React.Component {
  render() {
    return (
      <div className="card-background">
        <div className="card ">
          <i className="edit-toggle edit-icon sm-icon"></i>
          <div className="card-info">
            <p>{this.props.card.title}</p>
          </div>
          <div className="card-icons">
            <i className="clock-icon sm-icon overdue-recent completed">Aug 4</i>
            <i className="description-icon sm-icon"></i>
            <i className="comment-icon sm-icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCard;