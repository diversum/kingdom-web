import { default as React, addons, Component } from 'react/addons'
import { RaisedButton } from 'material-ui'
import actions from '../actions'
import _ from 'lodash'

export default class FlatsError extends Component {

  constructor() {
    super();

    this.state = {
      flats: stores.flats.getState(),
    };

    this.onChangeFlats = this.onChangeFlats.bind(this)
    // this._close = this._close.bind(this)

    stores.flats.listen(this.onChangeFlats)
  }

  componentWillUnmount() {
    stores.flats.unlisten(this.onChangeFlats)
  }

  onChangeFlats(flats) {
    this.setState({
      flats: flats
    })
  }

  _close() {
    actions.flats.dismissError()
  }

  render() {
    return (
      <div>
        <h2>Fail!</h2>
        <p>Dude.... you broke it... why?</p>
        <p>Try again in a few seconds</p>
        <RaisedButton label="Cloze" primary={true} onClick={this._close} />
      </div>
    )
  }
}
