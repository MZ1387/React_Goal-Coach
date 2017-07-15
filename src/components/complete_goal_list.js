import React, { Component } from 'react';
import { connect } from 'react-redux';

import { completeGoalRef } from '../firebase';
import { setCompleted } from '../actions'

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        const serverKey = completeGoal.key;
        completeGoals.push({ email, title, serverKey });
      })
      this.props.setCompleted(completeGoals);
    })
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  clearGoal(serverKey) {
    completeGoalRef.child(serverKey).remove();
  }

  render() {
    return (
      <div>
        {
          this.props.completeGoals.map((completeGoal, index) => {
            console.log(completeGoal);
            const { title, email, serverKey } = completeGoal;
            return (
              <div key={index} style={{margin: '5px'}}>
                <strong style={{marginRight: '5px'}}>{title}</strong> | Completed by: <em style={{marginRight: '5px'}}>{email}</em>
                <button
                  className='btn btn-sm btn-primary'
                  onClick={() => this.clearGoal(serverKey)}
                >
                  Remove
                </button>
              </div>
            )
          })
        }
        <button
          className='btn btn-primary'
          onClick={() => this.clearCompleted()}
        >
          Clear All
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals
  }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
