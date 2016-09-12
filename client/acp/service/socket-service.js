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

    static getSettings(done) {
        window.socket.emit(
            SocketApi.GET_SETTINGS,
            {},
            (error, settings) => {
                if (error) {
                    //App.alertError(error.message);
                }
                done(error, settings);
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

    static saveSettings(settings, done) {
        window.socket.emit(
            SocketApi.SAVE_SETTINGS,
            settings,
            (error) => {
                if (error) {
                    //App.alertError(error.message);
                }
                done(error);
            }
        );
    }
}
