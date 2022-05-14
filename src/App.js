
/*function Numberone(props) {
  return (
    <div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <img src={props.linkanh} height="200px" width="200px" class="img-responsive" alt="Image" />
        <p>{props.tieude}</p>
        <p>Giá sản phẩm: 400k</p>
      </div>
    </div>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Numberone tieude="Sản phẩm 1" linkanh="https://i.pinimg.com/736x/bc/4b/35/bc4b356022b46eb1855536a99e88f848.jpg"></Numberone>
            <Numberone tieude="Sản phẩm 2" linkanh="https://i.pinimg.com/736x/bc/4b/35/bc4b356022b46eb1855536a99e88f848.jpg"></Numberone>
            <Numberone tieude="Sản phẩm 1" linkanh="https://i.pinimg.com/736x/bc/4b/35/bc4b356022b46eb1855536a99e88f848.jpg"></Numberone>
            <Numberone tieude="Sản phẩm 1" linkanh="https://i.pinimg.com/736x/bc/4b/35/bc4b356022b46eb1855536a99e88f848.jpg"></Numberone>
            <Numberone tieude="Sản phẩm 1" linkanh="https://vn-test-11.slatic.net/p/b985eafd3693d1a1f089befb3b074611.jpg"></Numberone>

          </div>
        </div>
      </div>
    );
  }
}

export default App;*/
import React, {Component} from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {
        name : 'Nguyen Tuan Hai',
        email: 'tuanhai1234@gmail.com'
      }
    }
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.fields.name}</h1>
        <h1>{this.state.fields.email}</h1>
      </div>
    );
  }
}
export default App;



