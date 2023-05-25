import {Component} from 'react'

class StatesPage extends Component {
  componentDidMount() {
    this.getStates()
  }

  getStates = async () => {
    const ordersApi = 'http://sales-db-api.blobcity.com/states/get-all'
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
    return <div>All Cites Page</div>
  }
}

export default StatesPage
