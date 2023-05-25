import {Component} from 'react'

class AllCites extends Component {
  componentDidMount() {
    this.getCities()
  }

  getCities = async () => {
    const ordersApi = 'http://sales-db-api.blobcity.com/cities/get-all'
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
        {' '}
        Actually link is working but data is not fetching in the api call.So I
        cant able to represent the allcites here
      </div>
    )
  }
}

export default AllCites
