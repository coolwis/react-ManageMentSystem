const express=require('./node_modules/express');
const bodyParser=require('body-parser');
const app=express();
const port=process.env.port|| 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(  {extended:true}));
 
app.get("/api/hello", (req, res) => {
    res.send({message:'hello express!'});
});

app.get("/api/customers", (req, res) => {
    res.send(
        [
            {
            'id': 1, 
            'image': 'https://placeimg.com/64/64/1',
            'name':'1 hong',
            'birthday':'78500',
            'gender': 'manman',
            'job':'programmer'
          },
          {
            'id': 2, 
            'image': 'https://placeimg.com/64/64/2',
            'name':'2hong',
            'birthday':'78500',
            'gender': 'manman',
            'job':'programmer'
          }
          ,{
            'id': 3, 
            'image': 'https://placeimg.com/64/64/3',
            'name':'3hong',
            'birthday':'78500',
            'gender': 'manman',
            'job':'programmer'
          }
          ,{
            'id': 4, 
            'image': 'https://placeimg.com/64/64/4',
            'name':'4hong',
            'birthday':'78500',
            'gender': 'manman',
            'job':'programmer'
          }
          ]


    );
});



app.listen(port, () =>console.log( 'listen on port ${port}' ));
