import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Selectbox from '../Selectbox';
import { updateFilters } from '../../store/actions/filterActions';
import { updateSort } from '../../store/actions/sortActions';
import Checkbox from '../Checkbox';


const availableBrand = [
  'B1',
  'B2',
  'B3',
  'B4',
  'B5',
  'B6',
  'B7',
];
const availableColor = [
  'C1',
  'C2',
  'C3',
  'C4',
  'C5',
  'C6',
  'C7',
];
const sortByBrand = [
  { value: '',           label: 'Select'  },
  { value: 'lowestprice', label: 'Lowest to highest' },
  { value: 'highestprice', label: 'Highest to lowest' },
]
const sortByDiscount = [
  { value: '',           label: 'Select'  },
  { value: 'lowestdiscount', label: 'Lowest to highest' },
  { value: 'highestdiscount', label: 'Highest to lowest' },
]

class Filter extends Component {

  componentWillMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
  } else {
      this.selectedCheckboxes.add(label);
    }

    this.props.updateFilters(Array.from(this.selectedCheckboxes));
  }

  createCheckbox = (label) => (
    <Checkbox
        classes="filters-available-size"
        label={label}
        handleCheckboxChange={this.toggleCheckbox}
        key={label}
    />
  )
  createColorbox = (label) => (
    <Checkbox
        classes="filters-available-size"
        label={label}
        handleCheckboxChange={this.toggleCheckbox}
        key={label}
    />
  )

  createCheckboxes = () => (
    availableBrand.map(this.createCheckbox)
  )

  availableColor = () => (
    availableColor.map(this.createColorbox)
  )

  handleSort = (value) => {
    this.props.updateSort(value);
  }

  render() {
    return (
      <div className="filters">
        <h4 className="title">Brand:</h4>
        {this.createCheckboxes()} 
        <br/>
        <hr/>
        <br/>
        <h4 className="title">Color:</h4>
        {this.availableColor()}
        <br/>
        <hr/>
        <br/>
        <h4 className="title">Price:</h4>
         <Selectbox options={sortByBrand} handleOnChange={this.handleSort}/>
         <br/>
        
        <br/>
        <hr/>
        <h4 className="title">Discount:</h4>
        <Selectbox options={sortByDiscount} handleOnChange={this.handleSort}/>
      </div>
    );
  }
}

Filter.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  filters: PropTypes.array,
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  filters: state.filters.items,
  sort: state.sort.item,
})

export default connect(mapStateToProps, { updateFilters,updateSort })(Filter);