import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = Event => {
        Event.preventDefault();

        this.setState({email:'',password:''});

    }

    handleChange = Event => {
        const {name,value} = Event.target;
        this.setState({[name]:[value]});
    }



    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>
                    
                    <FormInput type="password" value={this.state.password} handleChange={this.handleChange} label="password" required/>

                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;