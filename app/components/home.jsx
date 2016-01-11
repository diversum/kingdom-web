import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { TextField, RaisedButton } from 'material-ui'
import Logo from './logo'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  getValue() {
    return this.refs.name.getValue()
  }

  render() {
    return (
      <div className="welcome__container">
        <Logo large={true}/>
        <div className="welcome__h1">Your home is your castle, your block is your kingdom.</div>
        <p className="welcome__introduction">What's your name, your honor?</p>
        <div>
          <TextField
            className="welcome__text-answer"
            hintText={this.props.hintText}
            style={{fontSize: '1.5rem', color: 'white'}}
            value={this.props.value}
            ref='name'
            onChange={this.props.onChange}
            />
        </div>
        <div className="welcome__button">
          <RaisedButton label="Let's find your next kingdom!" onClick={this.props.onProceed} />
        </div>
      </div>
    )
  }
}
