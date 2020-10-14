const express =  require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
const app = express()
const port = 3000

//method for initialization of application level in express + body parser

app.use(bodyParser.json())

let user = [
    {
        id: 1,
        name: 'Name',
        birthDate: '2000-01-01',
        streetAddress: 'Yliopisto 5E',
        city: 'Oulu',
        country: 'Finland',
        email: 'example@gmail.com',
        description: 'Create a new user',
        date: '2020-15-09'
    }
]

app.get('/', (req, res) => 
    {
        res.send('Hello!')
    })

    //read all todo items
app.get('/user', (req, res) => 
{
    res.json({ user });
})

//find a specific todo item
app.get('/user/:id', (req, res) => 
{
    //get an individual id
    //res.send('You requested id ' + req.params.id);

    //find an id in an array
    const results = user.find(t => t.id == req.params.id);
    
    //return the result if found
    if(results !== undefined)
    {
        res.json(results);
    }
    else
    {
        res.sendStatus(404);
    }
})

//create a new todo item
app.post('/user', (req, res) =>
{
    const newUser = 
    {
        id: uuidv4(),
        description: req.body.description,
        name: req.body.name,
        birthDate: req.body.birthDate,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        country: req.body.country,
        email: req.body.email,
        date: req.body.date
    }

    //push into todos array
    user.push(newUser);

    //console.log(req.body);
    res.sendStatus(200);
})

//modify a todo item
app.put('/user/:id', (req, res) => 
{
    //find an id in an array
    const results = user.find(t => t.id == req.params.id);
    
    //modify theresult if found
    if(results !== undefined)
    {
        for (const key in req.body)
        {
            result[key] = req.body[key];
        }
    }
    else
    {
        req.sendStatus(404);
    }
})

app.delete('/user/:id', (req, res) => 
{
    const results = user.findIndex(t => t.id == req.params.id);

    //nothing is found
    if(result !== -1)
    {
        //call the splice
        user.splice(result, 1);
        res.sendStatus(200);
    }
    else
    {
        res.sendStatus(404);
    }
}) 

let sensor = [
    {
        deviceType: "<string>",
        description: "Create a new user",
        sensorTypes: {
            humidity: 0,
            cloudCoverage: 1,
            wind: 1,
            temperature: 0,
            rainfall: 0
        },
        location: {
            latitude: "<string>",
            longitude: "<string>"
        },
        id: 0
    }
]


app.get('/sensor', (req, res) => 
{
    res.json({ sensor });
})


app.get('/sensor:id', (req, res) => 
{
    //get an individual id
    //res.send('You requested id ' + req.params.id);

    //find an id in an array
    const resultsSensor = sensor.find(t => t.id == req.params.id);
    
    //return the result if found
    if(resultsSensor !== undefined)
    {
        res.json(resultsSensor);
    }
    else
    {
        res.sendStatus(404);
    }
})


//modify a todo item
app.put('/sensor/:id', (req, res) => 
{
    //find an id in an array
    const resultsSensor = sensor.find(t => t.id == req.params.id);
    
    //modify theresult if found
    if(resultsSensor !== undefined)
    {
        for (const key in req.body)
        {
            result[key] = req.body[key];
        }
    }
    else
    {
        req.sendStatus(404);
    }
})

app.delete('/sensor/:id', (req, res) => 
{
    const resultsSensor = sensor.findIndex(t => t.id == req.params.id);

    //nothing is found
    if(result !== -1)
    {
        //call the splice
        user.splice(result, 1);
        res.sendStatus(200);
    }
    else
    {
        res.sendStatus(404);
    }
}) 

let login = [
    {
        id: 1,
        password: 'XXXXXXX'
    }
]

app.get('/login', (req, res) => 
{
    res.json({ login });
})

//create a new todo item
app.post('/login', (req, res) =>
{
    const newLogin = 
    {
        id: uuidv4(),
        password: req.body.password
    }

    //push into todos array
    user.push(newLogin);

    //console.log(req.body);
    res.sendStatus(200);
})

app.listen(port, () =>
{
    console.log('Example app listening at http://localhost:$(port)');
})