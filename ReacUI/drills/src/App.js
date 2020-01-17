import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.data =[89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

      this.count = 0;

      this.state = {datainput: 0,
                    iterations: 0
                    }
    }

    handleLinearSearch = (num) => {
      //console.log(num)
      let data = this.data
      let numericNum = parseInt(num, 10);
      //console.log(data)
      for(let i = 0; i < data.length; i++) {
        if(data[i] === numericNum){
          return this.setState({
            datainput: data[i],
            iterations: i+1
          });
        }
        else {
          this.setState({
            datainput: 'Number was not found',
            iterations: data.length
          })
        }
      };
    };

    handleBinarySearch = (num, data, start, end, iterations) => {
      let starter = start === undefined ? 0 : start;
      let ender = end === undefined ?  data.length : end;
      let step = iterations === undefined ? 0 : iterations;
      console.log(starter > ender);
      if(starter > ender) {
        return this.setState({
          datainput: 'Your start position is greater than the end.'
        })
      }

      const index = Math.floor((starter + ender)/2)
      const item = data[index]
      const numericNum = parseInt(num, 10);
      console.log(item)
      console.log(step)


      if(item === numericNum) {
        return this.setState({
          datainput: numericNum,
          iterations: step
        })
      }
      else if(item < numericNum) {
        step++
        return this.handleBinarySearch(num, data, index+1, ender, step)
      }

      else if(item > numericNum) {
        step+=1
        return this.handleBinarySearch(num, data, starter, index-1, step)
      }
    };

    handleSubmit = (e) => {
      e.preventDefault();
      let target = e.target.dataInput.value
      const sorted = this.data.sort((a, b) => a-b);
      console.log(sorted)
      this.handleBinarySearch(target, sorted);
    }

  render() {
    return (
      <div>
  <p>Iterations: {this.state.iterations}</p>
  <p>Data Input: {this.state.datainput}</p>
      <form onSubmit={this.handleSubmit}>
        <input id='dataInput' type="text"/>
        <input type="submit" value="linear search" />
      </form>
      </div>
    ) 
  }
}

export default App;
