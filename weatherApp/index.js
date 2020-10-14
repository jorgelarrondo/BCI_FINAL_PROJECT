const express =  require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
const app = express()
const port = 3000

//method for initialization of application level in express + body parser

app.use(bodyParser.json())

let users = [
    {
        id: 1,
        username: 'Whatever',
        password: 'Whatever',
        weatherStation: 'WeatherStation'
    }
]

app.get('/', (req, res) => 
    {
        res.send('Hello!')
    })

    //read all todo items
app.get('/users', (req, res) => 
{
    res.json({ users });
})

//find a specific todo item
app.get('/users/:id', (req, res) => 
{
    //get an individual id
    //res.send('You requested id ' + req.params.id);

    //find an id in an array
    const results = users.find(t => t.id == req.params.id);
    
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
app.post('/users', (req, res) =>
{
    const newUser = 
    {
        id: uuidv4(),
        description: req.body.description,
        dueDate: req.body.dueDate,
        isDOne: req.body.isDone
    }

    //push into users array
    users.push(newUser);

    //console.log(req.body);
    res.sendStatus(200);
})

//modify a todo item
app.put('/users/:id', (req, res) => 
{
    //find an id in an array
    const results = users.find(t => t.id == req.params.id);
    
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

app.delete('/users/:id', (req, res) => 
{
    const results = users.findIndex(t => t.id == req.params.id);

    //nothing is found
    if(result !== -1)
    {
        //call the splice
        users.splice(result, 1);
        res.sendStatus(200);
    }
    else
    {
        res.sendStatus(404);
    }
}) 

app.listen(port, () =>
{
    console.log('Example app listening at http://localhost:$(port)');
})