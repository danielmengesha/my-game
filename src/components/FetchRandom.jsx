import React from "react";
import axios from 'axios'

class FetchRandom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false
    };
  }

  componentDidMount() {
    axios.get('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple' )
    .then(function(results){
      console.log(results.data); // ex.: { user: 'Your User'}
     /*  console.log(results.status); // ex.: 200 */
    });  
    
  }
  

  render() {
    return ( 
      <div className=" ">

        {this.state.loading ? (
          <div>{this.componentDidMount}</div>
          
        ) : (
          <div>{this.data}</div>
        )}
        
      </div>
    );
  }
}

export default FetchRandom;
