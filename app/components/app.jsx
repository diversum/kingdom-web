import React, { PropTypes } from 'react'
import Main from './main'
import Map from './map'
import { AppBar, Styles } from 'material-ui'
import muiTheme from './mui-theme'

export default class App extends React.Component {

  getChildContext() {
    return {
      muiTheme: Styles.ThemeManager.getMuiTheme(muiTheme)
    }
  }

  render() {
    return (
      <div className="app">
        <Main />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
}
