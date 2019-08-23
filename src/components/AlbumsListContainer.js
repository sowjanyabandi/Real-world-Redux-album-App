import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import {connect} from 'react-redux'
//import { helloWorld } from './actions/test'
//import {addAlbum} from './actions/Add-Album'
import {setAlbums} from './actions/albums'




const sleep = time => new Promise(
  resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
)

class AlbumsListContainer extends React.Component {
//state = {}
  

  componentDidMount() {
    sleep(2000)
      .then(message => this.props.addAlbum(1, message))

    sleep(3000)
      .then(message => this.props.addAlbum(2, message))

    // request('https://jsonplaceholder.typicode.com/albums')
    //  .then(response => this.setState({ albums: response.body }))

      //this.props.addAlbum('5','Enjoy the sunshine')
      //this.props.addAlbum('10','Having fun in US')

  }
  

  render() {
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }
}  

// take state from the store, and add it as a prop to this component
// then you can access it with this.props.albums
const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps, {setAlbums})(AlbumsListContainer)
