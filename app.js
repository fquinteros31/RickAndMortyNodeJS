
const { express, bodyParser } = require('./src/infraestructure/configuration/Modules');
const characterRouter = require('./src/infraestructure/routes/characterRouter');
const loginRouter = require('./src/infraestructure/routes/loginRouter');

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(loginRouter);
app.use(characterRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});