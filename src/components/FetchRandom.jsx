import React from "react";
import axios from 'axios'
import {Form} from 'react-bootstrap'


class FetchRandom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
      data: [],
      question: '',
      correct_answer:'',
      incorrect_answers:[],
     loading: false 
    };
  }

  componentDidMount() {
  axios.get('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple' ) 
  /* axios.get('https://jsonplaceholder.typicode.com/data/' ) */
      .then((response)=>{
            this.setState({
            data:response.data 
          })
    });  
  }
 
  render() {
          const { data } = this.state;
            console.log(this.state , data.results);
            var uid = 0;
                  console.log(uid);
              const dataList = data.results ? (
                data.results.map(data => {
                /* console.log('data:',data); */
                  uid++;
                  
        console.log(this.props);

       /*  nextQuestion=(e)=>{
          return
          {dataList}
        } */
        
        return(
         
          <div className="card-content" key={uid}>
            <span> {data.category} </span>
            <hr/>
            <span>{data.question}</span>
            <hr/>

            <li>{data.incorrect_answers}</li>&spbn;
                      
            <p>{data.correct_answer}</p>
            <input></input>
            <hr></hr>
            
          </div>
        )
      })
      
    ):(
      <div className="center">Loading...</div>
    )
    return ( 
      <div>
        <div key={uid}>
       
          {dataList}
          <form>
           <label>
                Question:
                <input type="text" name="name" />
            </label>
              <input type="submit" value="Submit" />
          </form>
        </div>
        <button onClick={this.nextQuestion}>next</button>
      </div>
     
    );
  }
  
}

export default FetchRandom;
