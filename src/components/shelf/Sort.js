import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";

import { updateSort } from '../../store/actions/sortActions';



class Sort extends Component {

  handleSort = (value) => {
    this.props.updateSort(value);
  }
    className;

  render() {
    return (
      <div className="sort">
      {/* for sorting  */}
      </div>
    );
  }
}

Sort.propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  sort: state.sort.item,
})

export default connect(mapStateToProps, { updateSort })(Sort);