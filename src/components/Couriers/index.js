import {Component} from 'react'

class Couriers extends Component {
  componentDidMount() {
    this.getCouriers()
  }

  getCouriers = async () => {
    const ordersApi = 'http://sales-db-api.blobcity.com/couriers/get-all'
    const options = {
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
      },
    }

    const response = await fetch(ordersApi, options)
    console.log(response)
  }

  render() {
    return (
      <div>
        Actually link is working but data is not fetching in the api call.So I
        cant able to represent the couriers here
      </div>
    )
  }
}

export default Couriers
