import React from 'react';

class CustomerDelete extends React.Component{
deleteCustomer(id){
    const url='/api/customers/' +id;
    fetch(url,{
            method:'DELETE'
        });
        this.props.stateRefresh();
}//end deleteCustomer

    render() {
        return (
            <button onClick={(e) =>{this.deleteCustomer(this.props.id)} }>삭제</button>
        )
    }
} //end class

export default CustomerDelete;