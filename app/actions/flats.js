import alt from '../alt'
import request from './utils/request'

import apiBase from './utils/api-base'

class FlatsActions {

  constructor() {
    this.generateActions('showCompleted', 'showFailed')
  }

  show(profile) {
    this.dispatch()

    if (this.currentRequest) {
      this.currentRequest.abort()
    }

    let station = {
      uic: profile.defaultLocation.uic,
      cntr: profile.defaultLocation.cntr,
      maxTime: profile.defaultTime
    }

    this.currentRequest = request
      .get(`${apiBase}/flats`)
      .query({ station: JSON.stringify(station) })
      .query({ roomFrom: profile.rooms.min })
      .query({ roomTo: profile.rooms.max })
      .query({ areaFrom: profile.area.min })
      .query({ areaTo: profile.area.max })
      .query({ priceFrom: profile.price.min })
      .query({ priceTo: profile.price.max })

    this.currentRequest
      .then((response) => {
        this.currentRequest = null;
        this.actions.showCompleted(response.body)
      }).catch((err) => {
        this.currentRequest = null;
        this.actions.showFailed(err)
      })
  }
}

export default alt.createActions(FlatsActions)
