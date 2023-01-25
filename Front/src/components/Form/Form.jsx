import styles from "./Form.module.css"
import { Validate } from "./Validation";
import React from "react";

export default function Form(props) {

    const [userData, setUserData] = React.useState({ 
        username: '', 
        password: '' 
    });

    const [errors, setErrors] = React.useState({
        username: '',
        password: ""
    });

    

    const handleSubmit = (event) => {
        event.preventDefault()
        return props.login(userData)

    }

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(Validate({
            ...errors,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <div className={styles.divPrincipal}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Please log in</label>
                <hr />
                <div>
                    <label htmlFor="username">Username: </label>
                    <input 
                        type="text" 
                        name="username" 
                        className={errors.username && 'warning'}
                        value={userData.username} 
                        onChange={handleInputChange} 
                        placeholder ="Escribe tu usuario..."
                    ></input>
                    <p className={styles.danger}>{errors.username}</p>
                </div>
                <br />
                <div>
                    <label htmlFor="password">password: </label>
                    <input 
                        type="password" 
                        name="password" 
                        className={errors.password && 'warning'}
                        value={userData.password} 
                        onChange={handleInputChange} 
                        placeholder ="Escribe tu contraseña..."
                    ></input>
                    <p className={styles.danger}>{errors.password}</p>
                </div>
                <br />
                <button>LOGIN</button>
            </form>
            
        </div>
    )
}