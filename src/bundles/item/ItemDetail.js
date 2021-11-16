import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import API from '../core/api'
import CircleLoader from '../common/components/Loader/CircleLoader'

export default class ItemDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      item: {}
    }
    this.ItemId = this.props.match.params.id
  }

  componentDidMount () {
    if (this.rootNode) {
      window.Holder.run({
        images: [this.rootNode, this.imgNode1, this.imgNode2, this.imgNode3, this.imgNode4]
      })
    }
    API.get(`item/${this.ItemId}`)
      .then((res) => {
        const item = res.data
        this.setState({
          item,
          loading: false
        })
        setTimeout(() => {}, 1e3)
      })
      .catch((error) => {
        this.setState({
          loading: false
        })
      })
  }

  render () {
    const { item } = this.state
    return (
      <div className="container my-3">
        <div className="card">
          <div className="row">
            <aside className="col-sm-5 border-right">
              <article className="gallery-wrap">
                <div className="img-big-wrap">
                  <div>
                    <img
                      ref={(node) => (this.rootNode = node)}
                      data-src="holder.js/356x512?theme=thumb&bg=e83e8c&fg=e83e8c&size=1"
                      alt="item"
                    />
                  </div>
                </div>
                <div className="img-small-wrap">
                  <div className="item-gallery">
                    {' '}
                    <img
                      ref={(node) => (this.imgNode1 = node)}
                      data-src="holder.js/128x128?theme=thumb&bg=e83e8c&fg=e83e8c&size=1"
                      alt="item"
                    />{' '}
                  </div>
                  <div className="item-gallery">
                    {' '}
                    <img
                      ref={(node) => (this.imgNode2 = node)}
                      data-src="holder.js/128x128?theme=thumb&bg=e83e8c&fg=e83e8c&size=1"
                      alt="item"
                    />{' '}
                  </div>
                  <div className="item-gallery">
                    {' '}
                    <img
                      ref={(node) => (this.imgNode3 = node)}
                      data-src="holder.js/128x128?theme=thumb&bg=e83e8c&fg=e83e8c&size=1"
                      alt="item"
                    />{' '}
                  </div>
                  <div className="item-gallery">
                    {' '}
                    <img
                      ref={(node) => (this.imgNode4 = node)}
                      data-src="holder.js/128x128?theme=thumb&bg=e83e8c&fg=e83e8c&size=1"
                      alt="item"
                    />{' '}
                  </div>
                </div>
              </article>
            </aside>
            <aside className="col-sm-7">
              <article className="card-body p-5">
                <h3 className="title mb-3">{item.name}</h3>
                <p className="price-detail-wrap">
                  <span className="price h3 text-warning">
                    <span className="currency">US $</span>
                    <span className="num">{item.price}</span>
                  </span>
                  <span>/per kg</span>
                </p>
                <dl className="item-property">
                  <dt>Description</dt>
                  <dd>
                    <p>
                      Here goes description consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco{' '}
                    </p>
                  </dd>
                </dl>
                <dl className="param param-feature">
                  <dt>Category</dt>
                  <dd>{item.category && item.category.name}</dd>
                </dl>
                <dl className="param param-feature">
                  <dt>Color</dt>
                  <dd>Black and white</dd>
                </dl>
                <dl className="param param-feature">
                  <dt>Delivery</dt>
                  <dd>Russia, USA, and Europe</dd>
                </dl>
                <hr />
                <div className="row">
                  <div className="col-sm-5">
                    <dl className="param param-inline">
                      <dt>Quantity: </dt>
                      <dd>
                        <select className="form-control form-control-sm" style={{ width: '70px' }}>
                          <option> 1 </option>
                          <option> 2 </option>
                          <option> 3 </option>
                        </select>
                      </dd>
                    </dl>
                  </div>
                  <div className="col-sm-7">
                    <dl className="param param-inline">
                      <dt>Size: </dt>
                      <dd>
                        <label className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <span className="form-check-label">SM</span>
                        </label>
                        <label className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <span className="form-check-label">MD</span>
                        </label>
                        <label className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <span className="form-check-label">XXL</span>
                        </label>
                      </dd>
                    </dl>
                  </div>
                </div>
                <hr />
                <Link to="/checkout" className="btn btn-md btn-primary text-uppercase mr-3">
                  {' '}
                  Buy now{' '}
                </Link>
                <button className="btn btn-md btn-outline-primary text-uppercase">
                  <FontAwesomeIcon icon="shopping-cart" /> Add to cart{' '}
                </button>
              </article>
            </aside>
          </div>
        </div>
      </div>
    )
  }
}
