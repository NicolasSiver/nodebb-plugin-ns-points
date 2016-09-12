import {updateSettings} from './simple-actions';
import SocketService from '../service/socket-service';

export default function () {
    return (dispatch, getState) => {
        SocketService.getSettings((error, settings) => {
            if (!error) {
                dispatch(updateSettings(settings));
            }
        });
    };
}
