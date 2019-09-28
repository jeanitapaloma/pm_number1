import React,{Component} from 'react';
class App extends Component{
  constructor(props){
    super(props);
      this.state={
array:[],
sentence:"",
word:'',
count:0,
counts:0


      };
    }
    inputHandler = (event) => {
      const { sentence, word, array } = this.state;
      array.push(sentence);
      var sen = array[Math.floor(Math.random() * array.length)];
      var sSplit = sen.split(" ");
      this.setState({ count: sSplit.length });
      var cntr = 0;
      for (let i = 0; i < sSplit.length; i++) {
        if (sSplit[i] === word) {
          cntr += 1;
        }
      }
      this.setState({ occurrence: cntr });
    }
  
    render() {
      const { sentence, word, count, occurrence } = this.state;
      return (
      <div id="top">
        Sentence: <input placeholder="input sentence here..."onChange={event => this.setState({ sentence: event.target.value })}></input>
        &nbsp; &nbsp;
        Words: <input placeholder="input words here..." onChange={event => this.setState({ word: event.target.value })}></input>
        <div>
         <button class='button' button onClick={event => this.inputHandler(event)}>Count</button></div>
        <div>
        <br/><br/>
        Inputed text :  {sentence}</div>
        <div>
          </div>
            Words in Paragraph:   {count}
          <div>
        Word Occurrence : {word} : {occurrence}</div>
      </div>
      );    
    }
  }
  export default App;
  