import React from 'react'

const Login = () => {
    return (
        <div className='login__container'>
            <form className="login">
                <div className='login__title'>
                    <h1>Hello Administrator</h1>
                </div>
                <div className='login__input'>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                </div>
                <div className='login__button'>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;