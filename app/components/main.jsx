import React, { PropTypes } from 'react'
import actions from '../actions'
import stores from '../stores'
import alt from 'alt'
import Map from './map'
import Sidebar from './sidebar'
import Detail from './detail'
import NewPanel from './new-panel'
import FlatsError from './flats-error'
import mui from 'material-ui'
import {Dialog, Table,TableHeader,TableBody,TableRow,TableHeaderColumn,TableRowColumn,TextField, AppBar} from 'material-ui'
import classNames from 'classnames'

export default class Main extends React.Component {

  constructor() {
    super();

    this.state = {
      detail: stores.detail.getState(),
      newPanel: stores.newPanel.getState(),
      flats: stores.flats.getState(),
    };

    stores.detail.listen(this.onChangeDetail.bind(this))
    stores.newPanel.listen(this.onChangeNewPanel.bind(this))
    stores.flats.listen(this.onChangeFlats.bind(this))
  }

  componentWillUnmount() {
    stores.detail.unlisten(this.onChangeDetail)
    stores.newPanel.unlisten(this.onChangeNewPanel)
    stores.flats.unlisten(this.onChangeFlats)
  }

  onChangeDetail(detail) {
    if (!detail.loading) {
      if(!this.refs.detail.isOpen()) {
        this.refs.detail.show()
      }
    } else if(this.refs.detail.isOpen()) {
      this.refs.detail.dismiss()
    }
  }

  onChangeFlats(flats) {
    if (flats.showError) {
      this.refs.flatsError.show()
    } else {
      this.refs.flatsError.dismiss()
    }
  }

  onChangeNewPanel(newPanel) {
    if (newPanel.show) {
      this.refs.newPanel.show()
    } else {
      this.refs.newPanel.dismiss()
    }
  }

  render() {
    return (
      <div className="main">
        <div className="main__sidebar" >
          <Sidebar />
          <div className="main__sidebar__homegate" >
            <a className="main__sidebar__homegate__link" href="http://homegate.ch" >powered by homegate.ch</a>
          </div>
        </div>
        <div className="main__map">
          <Map />
        </div>
        <div className="main__dialog">
          <Dialog
            ref="detail"
            autoDetectWindowHeight={true}
            autoScrollBodyContent={true}>
            <div>
              <Detail />
            </div>
          </Dialog>
          <Dialog
            ref="newPanel"
            autoDetectWindowHeight={true}
            autoScrollBodyContent={true}>
            <NewPanel />
          </Dialog>
          <Dialog
            ref="flatsError"
            autoDetectWindowHeight={true}
            autoScrollBodyContent={true}
            openImmediately={this.state.flats.showError}>
            <FlatsError  />
          </Dialog>
        </div>
      </div>
    )
  }
}
