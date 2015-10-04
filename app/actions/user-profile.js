import alt from '../alt'
import config from '../config'

class UserProfileActions {

  constructor() {
    this.generateActions('updateName',
      'updateNumberOfPeople',
      'updateSizePreference',
      'updateStairsPreference',
      'updatePriceIllusions',
      'updateDefaultLocation',
      'updateDefaultTime',
      'updateStore',
      'addLocation',
    )
  }
}

export default alt.createActions(UserProfileActions);
