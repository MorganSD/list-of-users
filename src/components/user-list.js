
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import iconfinder from '../img/woman-avatar-dark.png';
import '../animate.css';

class UserList extends Component{
    constructor(){
        super();
        this.state = {
            // data : JSON.parse(localStorage.getItem('users')) ,
           data : null
        }
    
        this.deleteUser();
    }
    
    componentWillMount() {
         localStorage.getItem('users') && this.setState({
             data :  JSON.parse(localStorage.getItem('users'))
         })
       
      }

    
      componentDidMount() {
        if (!localStorage.getItem("users")) {
            this.setStorage();
          } else {
            console.log("local storage");
          }
        // if(!localStorage.getItem('users')){
        //     // this.setStorage()
        //     fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(response => response.json())
        //     .then(data =>
        //       this.setState({
        //         data
        //       })
        //     );
        //     localStorage.setItem("users", JSON.stringify(this.state.data));
        // }else{

        //     this.setState({
        //         data : localStorage.setItem("users", JSON.stringify(this.state.data))

        //     })
        // }
        
      }
    
      setStorage() {
        let data = fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then((response) => {

            localStorage.setItem('users',JSON.stringify(response));
            this.setState({
             data : JSON.parse(localStorage.getItem('users'))
         })
     })
      }

      componentWillUpdate(nextProps, nextState) {
        localStorage.setItem("users", JSON.stringify(nextState.data));
      }
    
      


   
    deleteUser(userId){
        if(this.state.data != null){
            let data = [...this.state.data]
                let updatedata = data.filter(items => items.id != userId)

                this.setState({
                    data : updatedata
                })
        }
   
      
    }

   

   


    render(){

        return(
            <React.Fragment>

<section className="list">

                    <div className="wrap">
                        {
                            this.state.data ?
                            this.state.data.map((items) =>
                            <div className="userBox" key={items.id}>
                            <figure>
                                <img src={iconfinder}></img> 
                                <figcaption>
                                     <div className="userInfo">
                                        <p>{items.name}</p>
                                        <p>{items.username}</p>
                                        <p>{items.email}</p>
                                         <p>{items.website}</p>
                                     </div>

                                </figcaption>
                            
                             </figure>
                             
                                 <div className="btns">
                                     
                                        <span className="seeMore"><Link to={`/detail/${items.id}`}><i class="fas fa-external-link-alt"></i> More</Link></span>
                                        <span value={items.id} className="delete" onClick={(e) =>window.confirm("Are you sure you want to delete this user?") && this.deleteUser(items.id)}><i class="fas fa-user-times"></i>delete</span>
                                    
                                 </div>
                      </div> 
                      ) :
                      <h3>loading...</h3>
                        }
                 
                    </div>
               </section>

            </React.Fragment>

        );
    }
}
export default UserList;