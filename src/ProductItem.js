import React, { Component } from 'react';

const products = [
  {name: "Ipad", price: 200},
  {name: "Iphone", price: 650}
]


localStorage.setItem('products', JSON.stringify(products));

class ProductItem extends Component {


  constructor(props){
    super(props);

    this.state = {
      isEdit : false,
    }
    this.onDelete = this.onDelete.bind(this)
    
  }
  onDelete(){
    const {onDelete, name} = this.props
    onDelete(name)
  }
  
  
  render() {
    const {name, price} = this.props
    
    
    return (
        <div>
          {
            this.state.isEdit
            ? (
              <form onSubmit={this.onEditSubmit}>
                <input placeholder="Item" ref={nameInput => this.nameInput = nameInput}></input>
                <input placeholder="Price" ref={priceInput => this.priceInput = priceInput}></input>
                <button>Save</button>
            </form>
            )
            : (
              <div>
                <span>{name}</span>
                {` | `}
                <span>{price}</span>
                {` | `}
                <button type="button" className="close" aria-label="Close" onClick={this.onDelete}>
                      <span aria-hidden="true">&times;</span>
                </button>
                
              </div>
            )
          }
        </div>
    );
  }
}
 
export default ProductItem;
