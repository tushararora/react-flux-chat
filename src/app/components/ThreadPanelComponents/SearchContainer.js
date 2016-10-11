import React, { Component, PropTypes } from 'react';

/**
 * Class representing SearchContainer Component (Parent - ThreadPanel)
 * @extends Component
 */

class SearchContainer extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Handle change in search input and call method on prop
   * @param {object} event
   */

  handleChange(event) {
    this.props.onSearchInput(event.target.value);
  }

  render() {
    return (
      <div className="search-box">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <input type="text" placeholder="Search or start new chat" value={this.props.filterThread} onChange={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}

SearchContainer.propTypes = {
  filterThread: PropTypes.string.isRequired,
  onSearchInput: PropTypes.func.isRequired
};

export default SearchContainer;
