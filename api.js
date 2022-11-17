const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');


const api = express();
const porta = 4000;
const router = express.Router();

api.use(cors());

api.use(bodyparser.urlencoded({extended: true}));
api.use(bodyparser.json({limit: '20mb', extended: true}));

router.get('/', (req, resp) => {
    resp.json({mensagem: '=> API online...'});
});

api.use('/', router);

api.listen(porta);

console.log("Run API Express...");