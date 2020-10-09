var camera = require('camera');
var furniture = require('furniture');
var teddy = require ('teddy');

const router = express.Router();

router.get('/index', function (req, res) {
    res.send('Ocorino Homepage');
  });
