import { manageConstants } from '../_constants/manage.constants';

export const manageActions = {
    getApplication,
    createApplication,
    updateApplication,
    deleteApplication,
    getPersonalDetail,
    setCheckbox
};

function getApplication() {
    return (dispatch) => {

        dispatch(request());

        setTimeout(() => {
            const applicationList = JSON.parse(localStorage.getItem('applicationList'));

            if (applicationList) {
                dispatch(success(applicationList));
            } else {
                localStorage.setItem('applicationList', JSON.stringify([]));
                const applicationList = [];
                dispatch(success(applicationList));
            }
        }, 500);

        function request() {
            return {
                type: manageConstants.GET_APPLICATION_REQUEST,
            };
        }

        function success(applicationList) {
            return {
                type: manageConstants.GET_APPLICATION_SUCCESS,
                applicationList
            };
        }
    };
}

function createApplication(personalObj) {
    return (dispatch) => {

        dispatch(request());

        setTimeout(() => {
            dispatch(success(personalObj));
        }, 500);

        function request() {
            return {
                type: manageConstants.CREATE_APPLICATION_REQUEST,
            };
        }

        function success(personalObj) {
            return {
                type: manageConstants.CREATE_APPLICATION_SUCCESS,
                personalObj
            };
        }
    };
};

function updateApplication(personalId, personalObj) {
    return (dispatch) => {

        dispatch(request());

        setTimeout(() => {
            dispatch(success(personalId, personalObj));
        }, 500);

        function request() {
            return {
                type: manageConstants.CREATE_APPLICATION_REQUEST,
            };
        }

        function success(personalId, personalObj) {
            return {
                type: manageConstants.UPDATE_APPLICATION_SUCCESS,
                personalId,
                personalObj
            };
        }
    };
};

function deleteApplication(personalId) {
    return (dispatch) => {

        dispatch(request());

        setTimeout(() => {
            dispatch(success(personalId));
        }, 500);

        function request() {
            return {
                type: manageConstants.DELETE_APPLICATION_REQUEST,
            };
        }

        function success(personalId) {
            return {
                type: manageConstants.DELETE_APPLICATION_SUCCESS,
                personalId
            };
        }
    };
};

function getPersonalDetail(personalId) {
    return {
        type: manageConstants.GET_PERSONAL_DETAIL,
        personalId
    };
}

function setCheckbox(personalIdArray) {
    return {
        type: manageConstants.SET_CHECKBOX,
        personalIdArray
    }
}

