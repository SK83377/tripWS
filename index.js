import { WebSocketServer } from 'ws';
//import db from './db/db';
import db from './db/db.js';
import { findStationService } from './services/findStationService/findStationService.js';

db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

const wsServer = new WebSocketServer({ port:4117 });

wsServer.on('connection', (conn, req) => {
    console.log('Recieved a new connection.');
    //const id = req.url.split('/')[1];
    conn.send('connection established');
    conn.onmessage = message => findStationService(conn, message);
    conn.on('close', () => console.log('Client has disconnected!'));
    conn.onerror = () => {
        console.log('websocket error');
    };
});
