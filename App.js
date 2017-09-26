import React from 'react'
import {Container,Text} from 'native-base'
import {View} from 'react-native'

export default class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      counter:0,
      color:"red"
      
            } }

   timerr(){
     var colors = ['green', 'black', 'orange', 'blue', 'purple', 'pink'];
     var color = colors[Math.floor(Math.random()*colors.length)];
     if (this.state.counter<=1000) {
     this.setState({
     counter: this.state.counter + 1,
     color:color,
     i:this.state.i+1
     })
     } else{
     this.setState({counter:0})
     }
   }
  render() {
    return(
      <Container >
      <View style={{alignItems:'center', paddingTop: 200,backgroundColor:"#ffdab9",flex:1}}>
      <Text style={{color: this.state.color,fontSize: 30}}>{setTimeout(this.timerr.bind(this), 1000),this.state.counter}</Text>
      </View>
      </Container>
    )
  }
}
