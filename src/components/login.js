import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div className='login'>
                <h1 className="login__title">Planctonics Company Ltd.</h1>
                <div className='login__block'>
                    <button className='button__login_close'></button>
                    <div className='login__wrapper'>
                        <div className='login__subtitle'>Авторизация</div>
                        <div className='login__content'>
                            <form 
                                className='login__form'
                                onSubmit={this.enter}
                            >
                                <label className='login__form_data'>
                                    <div className='login__form_pic login__form_pic_login'></div>
                                    <div className='login__form_info'>
                                        <div className='login__form_name'>Login</div>
                                        <input className='login__form_input' type='text' placeholder='Enter login'></input>
                                        <div className='login__error'>Enter login</div>
                                    </div>
                                </label>
                                <label className='login__form_data'>
                                    <div className='login__form_pic login__form_pic_password'></div>
                                    <div className='login__form_info'>
                                        <div className='login__form_name'>Password</div>
                                        <input className='login__form_input' type='password' placeholder='Enter password'></input>
                                        <div className='login__error'>Enter password</div>
                                    </div>
                                </label>
                                <button className='button' type='submit'>Enter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    enter = (event) => {
        event.preventDefault();
        this.props.enter();
    }
};

export default Login;