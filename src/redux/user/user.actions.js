
import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER, //This type never changes which is why we set the case like this - The action only contains the type and the payload. This will update the reducers with the appropriate values.
    payload: user
});