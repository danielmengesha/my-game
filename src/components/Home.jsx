import React from "react";
import FetchRandom from './FetchRandom'

class Home extends React.Component{


  render(){
    return(
      <div className="container">
        <h4 className="center">Home</h4>
        <div>content</div>
        <FetchRandom />
    </div>

    )

  }
}



export default Home
