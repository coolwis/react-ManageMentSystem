import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import Customer from './components/Customer'

const customers =[
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
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c=> {
            return (
              <Customer 
                key ={c.id}
                id ={c.id}
                image ={c.image}
                name ={c.name}
                birthday ={c.birthday}
                gender ={c.gender}
                job ={c.job}    
                /> 
            );
                      }            
                    )
        }
    
      </div>
    )   
  }
}

export default App;
