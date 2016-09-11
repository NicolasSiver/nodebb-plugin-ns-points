import * as SocketApi from '../model/socket-api';

export default class SocketService {
    static getCalculationProperties(done) {
        window.socket.emit(
            SocketApi.GET_CALCULATION_PROPERTIES,
            {},
            (error, properties) => {
                if (error) {
                    //App.alertError(error.message);
                }
                done(error, properties);
            }
        );
    }

    static saveCalculationProperties(props, done) {
        window.socket.emit(
            SocketApi.SAVE_CALCULATION_PROPERTIES,
            props,
            (error) => {
                if (error) {
                    //App.alertError(error.message);
                }
                done(error);
            }
        );
    }
}
