import {Component} from 'react'

class Orders extends Component {
  state = {ordersData: []}

  componentDidMount() {
    this.getOrders()
  }

  getOrders = async () => {
    const ordersApi = 'http://sales-db-api.blobcity.com/orders/get-all'
    const options = {
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
      },
    }

    const response = await fetch(ordersApi, options)
    const data = response.json()
    if (response.ok) {
      this.setState({ordersData: data.orders})
    }
    console.log(response)
  }

  render() {
    return (
      <>
        <div>
          <ul>
            <li>Couriers</li>
            <li>Allcites</li>
            <li>States Page</li>
          </ul>
        </div>
        <div>
          Actually link is working but data is not fetching in the api call.So I
          cant able to represent the orders here
        </div>
      </>
    )
  }
}

export default Orders
