import pkg from 'pg';
const { Connection } = pkg;
import { DataValidateService } from "../dataValidateService/dataValidateService.js";
import { findStation } from "../dbServices/stationsService/findStation.js";

const dataValidateService = new DataValidateService();
export const findStationService = async (conn, msg) => {
    if (await dataValidateService.checkData(msg.data)) {
        conn.send('Wrong credentials provided');
    } else {
        const innerObj = await JSON.parse(msg.data);
        const stations = await findStation(innerObj.station);
        conn.send(JSON.stringify({stType: innerObj.stType, stations: stations}));
    }
};