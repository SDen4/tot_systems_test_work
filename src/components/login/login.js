import React, {Component} from 'react';
import authorisation from '../../scripts/authorisation';


class Login extends Component {
    state = {
        login: '',
        password: '',
        errorLogin: false,
        errorPassword: false,
        errorBoth: false
    }
    render() {
        const errorBoth = this.state.errorBoth && <div className= 'login__error_uncorrect_both'>
                Не верный логин или пароль
            </div>
        return (
            <div className='login'>
                <h1 className='login__title'>Planctonics Company Ltd</h1>
                <div className='login__block'>
                    <div className='login__wrapper'>
                        <div className='login__subtitle'>Авторизация</div>
                        <div className='login__content'>
                            <form className='login__form' onSubmit={this.enter}>
                                <label className='login__form_data'>
                                    <div className='login__form_pic login__form_pic_login'></div>
                                    <div className='login__form_info'>
                                        <div className='login__form_name'>Пользователь</div>
                                        <input
                                            className='login__form_input'
                                            type='text'
                                            placeholder='Введите имя пользователя'
                                            name='login'
                                            value={this.state.login}
                                            onChange={this.handleChangeLogin}
                                        ></input>
                                        <div className={`${this.state.errorLogin ? 'login__error' : 'login__error_unactive'}`}>
                                            Заполните поле 'Имя пользователя'
                                        </div>
                                    </div>
                                </label>
                                {errorBoth}
                                <label className='login__form_data'>
                                    <div className='login__form_pic login__form_pic_password'></div>
                                    <div className='login__form_info'>
                                        <div className='login__form_name'>Пароль</div>
                                        <input
                                            className='login__form_input'
                                            type='password'
                                            placeholder='Введите пароль'
                                            name='password'
                                            value={this.state.password}
                                            onChange={this.handleChangePassword}
                                        ></input>
                                        <div className={`${this.state.errorPassword ? 'login__error' : 'login__error_unactive'}`}>
                                            Заполните поле 'Пароль'
                                        </div>
                                    </div>
                                </label>
                                <button className='button' type='submit'>Войти</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleChangeLogin = (event) => {
        this.setState({
            login: event.target.value
        }, this.validationLogin)
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        }, this.validationPassword)
    }

    // validation login //
    validationLogin = () => {
        if (!this.state.login) {
            this.setState({errorLogin: true});
        } else {
            this.setState({errorLogin: false});
            this.setState({errorBoth: false});
        }
    }

    // validation password //
    validationPassword = () => {
        if (!this.state.password) {
            this.setState({errorPassword: true});
        } else {
            this.setState({errorPassword: false});
            this.setState({errorBoth: false});
        }
    }

    // validation both //
    validationBoth = () => {
        if(this.state.login === '' || this.state.password === '') return;
        if(this.state.login !== authorisation.login || this.state.password !== authorisation.password) {
            this.setState({errorBoth: true});
        };
    }

    // authorisation //
    // it's just an imitation of authorisation!!!
    // for demo version!!!
    enter = (event) => {
        console.log('login: ' + this.state.login);
        console.log('passw: ' + this.state.password);
        console.log('both: ' + this.state.errorBoth);

        event.preventDefault();

        this.validationLogin();
        this.validationPassword();
        this.validationBoth();
        if(this.state.login === authorisation.login && this.state.password === authorisation.password) {
            this.props.enter();
            this.props.loginName(authorisation.login);
        };
    }
};

export default Login;