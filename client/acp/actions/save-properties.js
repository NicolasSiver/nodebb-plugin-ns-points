import {propertiesSaved} from './simple-actions';
import SocketService from '../service/socket-service';

export default function (properties) {
    return (dispatch, getState) => {
        SocketService.saveCalculationProperties(properties, (error) => {
            if (!error) {
                dispatch(propertiesSaved());
            }
        });
    };
}
