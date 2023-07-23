import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <label className="filter">
        Filter contacts by name:
        <input
          type="text"
          value={this.props.filter}
          onChange={e => this.props.setFilter(e.target.value)}
          className="filter__input"
          style={{ marginTop: '10px' }}
        />
      </label>
    );
  }
}

export default Filter;
