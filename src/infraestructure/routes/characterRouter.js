const { express } = require('../configuration/Modules');
const tokenVerify = require('../middleware/auth');

const characterController = require('../controller/characterController');

const router = express.Router();


router.get('/api/character/:characterId', tokenVerify, characterController.GetCharacterByIdController);


module.exports = router;