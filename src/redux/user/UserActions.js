import { signInWithGoogle, signInWithFacebook, signOut } from '../../apis/firebase/firebase';
import * as UserConstants from "./UserConstants";

function startLoading() {
    return {
        type: UserConstants.START_LOADING
    }
}
function updateUserData(payload) {
    return {
        type: UserConstants.UPDATE_USER_DATA,
        payload
    }
}
function updateUserError(payload) {
    return {
        type: UserConstants.UPDATE_USER_ERROR,
        payload
    }
}

export function loginUserWithGoogle() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithGoogle().then(userData => {
            dispatch(updateUserData(userData.user));
        }).catch(error => {
            dispatch(updateUserError(error));
        });
    }
}

export function loginUserWithFacebook() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithFacebook().then(userData => {
            dispatch(updateUserData(userData.user));
        }).catch(error => {
            dispatch(updateUserError(error));
        });
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(startLoading());

        signOut().then(() => {
            dispatch(updateUserData(null));
        }).catch((error) => {
            dispatch(updateUserError(error));
        });
    }
}