const { express } = require('../configuration/Modules');

const loginController = require('../controller/loginController');

const router = express.Router();


router.post('/api/login', loginController.login);


module.exports = router;