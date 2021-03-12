import React, { Component } from 'react';
import AddItem from './addProduct';
import './App.css';
import ProductItem from './ProductItem';

const products = [
  {name: "Ipad", price: 200},
  {name: "Iphone", price: 650}
]


localStorage.setItem('products', JSON.stringify(products));

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem("products"))
    }
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  componentWillMount(){
    const products = this.getProducts();
    this.setState({products});
  }
  onAdd(name, price){
    let products = this.getProducts();
    products.push({name , price})
    this.setState({products: products});
  }
 

  onDelete(name){
    let products = this.getProducts();
    const filteredProducts = products.filter(product => {return product.name !== name});
    this.setState({products: filteredProducts});
  }
  getProducts(){
      return this.state.products;
  }
  render() { 
    return (
      <div className="App">
        <h1>Products manager</h1>
        <AddItem
          onAdd={this.onAdd}
        />
        {
          this.state.products.map(product => {
            return(
              <ProductItem
                key={product.name}
                {...product}
                onDelete={this.onDelete}
                onEditSubmit = {this.onEditSubmit}
              />
            )
          })
        }
      </div>
    );
  }
}
 
export default App;
