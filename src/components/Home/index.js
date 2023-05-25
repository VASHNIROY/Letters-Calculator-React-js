import {Component} from 'react'
import './index.css'
import Header from '../Header'

class Home extends Component {
  state = {
    productName: '',
    age: '',
    name: '',
    email: '',
    noOfProducts: '',
    city: '',
    state: '',
    status: '',
    productsList: [],
  }

  submitProductDetails = event => {
    event.preventDefault()
    const {name, email, age, productName, noOfProducts} = this.state
    const updatedData = {
      sellerName: name,
      sellerEmail: email,
      sellerAge: age,
      sellingProduct: productName,
      noOfProductsSelling: noOfProducts,
    }
    this.setState(prevState => ({
      productsList: [...prevState.productsList, updatedData],
    }))
  }

  updateProductName = event => {
    this.setState({productName: event.target.value})
  }

  updateCustomerName = event => {
    this.setState({name: event.target.value})
  }

  updateNoOfProducts = event => {
    this.setState({noOfProducts: event.target.value})
  }

  updateAge = event => {
    this.setState({age: event.target.value})
  }

  updateEmail = event => {
    this.setState({email: event.target.value})
  }

  updateCity = event => {
    this.setState({city: event.target.value})
  }

  updateStatus = event => {
    this.setState({status: event.target.value})
  }

  updateState = event => {
    this.setState({state: event.target.value})
  }

  render() {
    const {productsList} = this.state
    console.log(productsList)
    return (
      <>
        <Header />
        <div className="main-container">
          <form onSubmit={this.submitProductDetails}>
            <div className="label-input-container">
              <label htmlFor="productName">Product Name</label>
              <input
                id="productName"
                onChange={this.updateProductName}
                type="text"
                placeholder="enter name of product"
              />
            </div>
            <div className="label-input-container">
              <label htmlFor="sellerName">Seller Name</label>
              <input
                id="sellerName"
                onChange={this.updateCustomerName}
                type="text"
                placeholder="enter name"
              />
            </div>
            <div className="label-input-container">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                onChange={this.updateEmail}
                type="text"
                placeholder="enter email"
              />
            </div>
            <div className="label-input-container">
              <label htmlFor="status">status</label>
              <input
                id="status"
                onChange={this.updateStatus}
                type="text"
                placeholder="enter email"
              />
            </div>
            <div className="label-input-container">
              <label htmlFor="state">State</label>
              <input
                id="state"
                onChange={this.updateState}
                type="text"
                placeholder="enter email"
              />
            </div>
            <div className="label-input-container">
              <label htmlFor="city">City</label>
              <input
                id="city"
                onChange={this.updateCity}
                type="text"
                placeholder="enter email"
              />
            </div>
            <div className="label-input-container">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                onChange={this.updateAge}
                type="text"
                placeholder="enter age"
              />
            </div>
            <div className="label-input-container">
              <label htmlFor="noOfProducts">No of Products</label>
              <input
                id="noOfProducts"
                onChange={this.updateNoOfProducts}
                type="text"
                placeholder="enter no of products to sale"
              />
            </div>
            <button className="post-btn" type="submit">
              POST
            </button>
          </form>
        </div>
      </>
    )
  }
}

export default Home
