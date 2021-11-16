import React, { Component } from 'react'
import logo from '../../../logo.svg'
import SimpleLayout from '../components/Layout/SimpleLayout'
import API from '../../core/api'
import ItemList from '../../item/ItemList'
import { SecureButton } from '../../core/routing/PrivateRoute'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount () {
    // API.get(`item/`)
    // .then(res => {
    //     const items = res.data;
    //     this.setState({
    //         items
    //     });
    // })
  }

  render () {
    return (
      <SimpleLayout HeaderBox={<span>This is the header box section</span>}>
        <SecureButton />
        <ItemList />
      </SimpleLayout>
    )
  }
}
