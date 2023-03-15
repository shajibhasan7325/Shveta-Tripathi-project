import { LOCATIONDATA } from '../actionTypes';
const initialState = {

    locationData: {
        id: '',
        cityname: '',
        locAddress: 'Delhi, India',
        loc_min_booking_amount: '',
    }
}
function Datalocation(state = initialState, action) {

    switch (action.type) {
        case LOCATIONDATA:
            return {
                ...state,
                locationData: action.payload,
            }
        default:
            return state
    }
}
export default Datalocation;