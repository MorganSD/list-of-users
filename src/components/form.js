import React, { Component } from 'react';
import { Redirect } from 'react-router';


class Form extends React.Component{
constructor (){
    super();
    this.state = {
        newUser :"" ,
        newlist : JSON.parse(localStorage.getItem('users')),
        redirectState : false
    }
    
    
}

addUser(e){
    e.preventDefault() ;

    
    const newlist=[...this.state.newlist]
    
   
   
    const newUser ={

        id: 10 + Math.floor(Math.random() * 100),  
        name: this.refs.uName.value,
        username: this.refs.uUsername.value,
        email: this.refs.uEmail.value,
        website: this.refs.uWebsite.value,
        phone: this.refs.uPhone.value,

        address :{
            street:this.refs.uStreet.value,
            suite: this.refs.uSuite.value,
            city: this.refs.uCity.value,
            zipcode: this.refs.uZipcode.value
        },
        
        company :{
            name : this.refs.cName.value,
            catchPhrase :this.refs.cPhrase.value,
            bs : this.refs.cBusiness.value
        }
      

    }
      
    newlist.push(newUser);
    this.setState({
        newUser:"",
        newlist,
        redirectState :true
    })
    console.log(newlist);
    alert('registration completed ')
}

componentWillUpdate(nextProps , nextState){
    localStorage.setItem("users" , JSON.stringify(nextState.newlist))

}
render(){
    const { from } = this.props.location.state || '/'
    const { redirectState} = this.state
    return(
        <React.Fragment>
            <div className="wrap">
                
                <div className="form">
                <h1>register new user</h1>
                <p>Please provide all required details to register new user
                </p>
                <form className="form-content" onSubmit={(e) => {this.addUser(e)}}>
                    <h3 className="title">personal info:</h3>
                    <div className="row">
                         <span>
                             <input id="name" ref = "uName" required/>
                             <label for="name">Name *</label>
                        </span>
                        <span>
                            <input id="username" ref="uUsername" required/>
                            <label for="username">username *</label>
                        </span>
                    </div>
                    <h3 className="title">contact info:</h3>
                    <div className="row">
                    <span>
                       
                            <input ref="email" type="email" ref="uEmail" required/>
                            <label for="email">email *</label>
                        </span>
                        <span>
                            <input id="website" ref="uWebsite"/>
                            <label for="website">website </label>
                        </span>

                        <span>
                             <input id="phone" type="tel" ref="uPhone" required/>
                             <label for="phone">phone *</label>
                        </span>
                    </div>
                    <h3 className="title">address :</h3>
                    <div className="row">

                        <span>
                        <input id="street" ref="uStreet"/>
                            <label for="street">street </label>
                            
                        </span>

                        <span>
                        <input id="suite" ref="uSuite"/>
                            <label for="suite">suite </label>
                            
                        </span>

                        <span>
                        <input id="city" ref="uCity"/>
                            <label for="city">city </label>
                            
                        </span>
                        <span>
                            <input id="zipcode" ref="uZipcode"/>   
                             <label for="zipcode">zipcode </label>
                            
                         </span>
                    </div>
                    <h3 className="title">company info:</h3>
                    <div className="row">
                          <span>
                              <input id="company-name" ref="cName" required/>
                              <label for="company-name">company name *</label>
                       
                            </span>
                            <span>
                                 <input id="company-phrase" ref="cPhrase"/>
                                <label for="company-phrase">company phrase </label>
                       
                            </span>
                            <span>

                                 <input id="company-bs" ref="cBusiness" />
                                 <label for="company-bs">company-business </label>

                            </span>
                    </div>

                    <div className="row buttons">
                        <input type="submit" />
                        <input type="reset" />
                    </div>
                </form>

                {redirectState && (
          <Redirect to={from}/>
        )}
                </div>
            </div>



        </React.Fragment>
      
    );
}


}
export default Form;