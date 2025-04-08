const name = 'Alex'


const Hello = props => <p>Hello {props.name}</p>
const button = {
  fontSize: 30 + 'px'
}
class RenderJSX extends React.Component {

  constructor (){
    super();
    this.state = {
      counter: 0
    }  
  }

  changeCounter = () => {
    console.log(this);
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render(){
    return (
    <div>
      <header>
        <h1 className='title'>Hello React</h1>
      </header>
      <main>
        <button style={button} onClick={this.changeCounter}>{this.state.counter}</button>
        <Hello name = 'Max'/>
        <Hello name = 'Alex'/>
        <Hello name = 'John'/>
      </main>
    </div>

    )
  }  
}

ReactDOM.render(<RenderJSX/>, document.getElementById('root'))