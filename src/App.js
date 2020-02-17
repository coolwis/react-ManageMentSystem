import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import Customer from './components/Customer'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {withStyles} from '@material-ui/core/styles';

const styles = theme =>({
  root:{
    width:'100%',
    marginTop:theme.spacing.unit *3,
    overflowX:"auto"
  }, 
  table: {
    minWidth:1080 
  }
})

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

    const {classes} =this.props;
    return (
      <Paper className={classes.root}>
<Table className={classes.table}>
  <tableHead>
    <TableRow>
    <TableCell>number</TableCell>
    <TableCell>image</TableCell>
    <TableCell>name</TableCell>
    <TableCell>job</TableCell>
    </TableRow>
  </tableHead>
  <TableBody>

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
  </TableBody>
</Table>


    
      </Paper>
    )   
  }
}

export default withStyles (styles) (App);
