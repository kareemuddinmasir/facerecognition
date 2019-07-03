import React,{Component}from 'react';
import Clarifai from 'clarifai'
import Navigation from './Components/Navigation/Navigation';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';

import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'd5c24f9a59e34a88b960544aa8efc87f'
 });
 

const particleOptions = {
    particles: {
     number:{
       value: 100,
       density: {
         enable:true,
         value_area: 800
       }
     }
    }
  }


class App extends Component{
  constructor(){
    super();
    this.state={
      input: '',
      imageUrl : ''
    }
  }

  onInputChange = (event) => {
    this.setState({input : event.target.value})
    }

  onButtonSubmit = () => {
    this.setState({imageUrl : this.state.input});
    app.models.predict(
      Clarifai.COLOR_MODEL, 
        this.state.input)                                
      .then(
    function(response) {
      // do something with response
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
    }
  render(){
  return (
    <div className="App">

      <Particles className ='particles'
        params={particleOptions}
      />

      <Navigation />
      <Logo />
      <Rank />

      <ImageLinkForm 
      onInputChange = {this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit}
      />

      
     <FaceRecognition  imageUrl={this.state.imageUrl}/>
    </div>
  );
}
}

export default App;
