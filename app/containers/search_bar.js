import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';
import { bindActionCreators } from 'redux';

// Container Setup
// container need to call action creator - > reach out to redux and use redux directly
//connect search_bar container to redux using connect method form react-redux lib
//bind actoin 'fetchWeather' as a property to this container

class SearchBar extends Component{   
    constructor(props) {
      super(props);
      
      console.log('fetchWeather', fetchWeather);
      
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

// Anything returned from this function will end up as props
// on the SearchBar container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ fetchWeather }, dispatch);
}

// function mapDispatchToProps(dispatch){
//   //calls actionCreator which when called returns an action
//   return bindActionCreators({fetchWeather}, dispatch);
//   //dispatch makes action flow into middleware and then the reducers. 
// }

// no state so pass null
//xport default connect(null, mapDispatchToProps)(SearchBar);

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(null, mapDispatchToProps)(SearchBar);
