import Immutable from 'immutable'
import actions from '../actions'
import stores from '../stores'
import alt from '../alt'

class FlatsStore {
  constructor() {
    this.bindActions(actions.flats)

    this.state = {
      list: [],
      erro: null,
      isLoading: false,
      showError: false,
      resultCount: null
    }
  }

  onShow() {
    this.setState({
      list: [],
      erro: null,
      isLoading: true,
    })
  }

  onShowCompleted(list) {
    this.setState({
      list: list.hits,
      erro: null,
      isLoading: false,
      resultCount: list.count,
    })
  }

  onShowFailed(err) {
    this.setState({
      list: [],
      resultCount: null,
      erro: err,
      isLoading: false,
      showError: true,
    })
  }

  onDismissError() {
    this.setState({
      showError: false,
    })
  }
}

export default alt.createStore(FlatsStore)
