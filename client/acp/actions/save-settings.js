import {settingsSaved} from './simple-actions';
import SocketService from '../service/socket-service';

export default function (settings) {
    return (dispatch, getState) => {
        SocketService.saveSettings(settings, (error) => {
            if (!error) {
                dispatch(settingsSaved());
            }
        });
    };
}
