import { manageConstants } from '../_constants/manage.constants';

export default function manage(state = {}, action) {
    switch (action.type) {
        case manageConstants.GET_APPLICATION_REQUEST:
            return {
                loading: true
            };
        case manageConstants.GET_APPLICATION_SUCCESS:
            return {
                applicationList: action.applicationList,
            };

        case manageConstants.CREATE_APPLICATION_REQUEST:
            return {
                loading: true,
                applicationList: state.applicationList
            };

        case manageConstants.CREATE_APPLICATION_SUCCESS:
            const createApplicationList = [action.personalObj, ...state.applicationList];
            localStorage.setItem('applicationList', JSON.stringify(createApplicationList));

            return {
                applicationList: createApplicationList,
                responseCode: 201
            };

        case manageConstants.UPDATE_APPLICATION_REQUEST:
            return {
                loading: true,
                applicationList: state.applicationList
            };

        case manageConstants.UPDATE_APPLICATION_SUCCESS:
            const updateApplicationList = state.applicationList.map(
                (item) => item.id === action.personalId ? {
                    ...action.personalObj
                } : item);
            localStorage.setItem('applicationList', JSON.stringify(updateApplicationList));

            return {
                applicationList: updateApplicationList,
                responseCode: 200
            };

        case manageConstants.DELETE_APPLICATION_REQUEST:
            return {
                loading: true,
                applicationList: state.applicationList
            };

        case manageConstants.DELETE_APPLICATION_SUCCESS:
            if (action.personalId) {
                const deleteApplicationList = state.applicationList.filter((item) => item.id !== action.personalId);
                localStorage.setItem('applicationList', JSON.stringify(deleteApplicationList));

                return {
                    applicationList: deleteApplicationList,
                    responseCode: 204
                };
            } else {
                const deleteApplicationList = state.applicationList.filter((item) => item.checked === false);
                localStorage.setItem('applicationList', JSON.stringify(deleteApplicationList));

                return {
                    applicationList: deleteApplicationList,
                    responseCode: 204
                };
            }

        case manageConstants.GET_PERSONAL_DETAIL:
            return {
                applicationList: state.applicationList,
                personalObj: state.applicationList.filter((item) => item.id === action.personalId)[0],
                updateMode: true
            };

        case manageConstants.SET_CHECKBOX:
            return {
                applicationList: state.applicationList.map((obj) => {
                    return action.personalIdArray.includes(obj.id) ? {
                        ...obj,
                        checked: !obj.checked
                    } : obj
                }),
            };

        default:
            return state;
    }
}
