import React , { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

// Container Setup
// container need to call action creator - > reach out to redux and use redux directly
//connect search_bar container to redux using connect method form react-redux lib
//bind actoin 'fetchWeather' as a property to this container

class SearchBar extends Component{   
    constructor(props) {
      super(props);
      
      this.state = { term: '' }
      
      this.onInputChange = this.onInputChange.bind(this); // or () => { fat arrow }      
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChange(event) {
      this.setState({
        term: event.target.value
      });
    }
    
    onFormSubmit(event) {
      event.preventDefault();
      
      // go fetch weather data
      console.log(this.props);
      
      this.props.fetchWeather(this.state.term);
      this.setState({term: ''});
    }
    
    render() {
        return (
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input
              placeholder="Get a 5 day forcast in your favourite cities"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange} />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
          </form>
        ); 
    }
}

function mapDispatchToProps(dispatch){
  //calls actionCreator which when called returns an action
  return bindActionCreators({fetchWeather}, dispatch);
  //dispatch makes action flow into middleware and then the reducers. 
}

// no state so pass null
export default connect(null, mapDispatchToProps)(SearchBar);
