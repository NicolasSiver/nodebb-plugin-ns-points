import {updateProperties} from './simple-actions';
import SocketService from '../service/socket-service';

export default function () {
    return (dispatch, getState) => {
        SocketService.getCalculationProperties((error, properties) => {
            if (!error) {
                updateProperties(properties);
            }
        });
    };
}
