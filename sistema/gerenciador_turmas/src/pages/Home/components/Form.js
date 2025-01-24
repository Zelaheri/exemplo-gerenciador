import { useState } from "react";
import axios from 'axios';

function Form() {
    const [values, setValues] = useState();

    function handleChangeValues(value) {
        setValues((preValue) => ({
            ...preValue,
            [value.target.id]: value.target.value
        }))

        console.log(values);
    }

    function handleClick() {
        const email = 'admin';
        const senha = 'admin';

        axios.get(
            `http://localhost:3001/usuarios?login=${email}&senha=${senha}`
        ).then((response) => {
            if (response.data.length > 0) {
                console.log(response.data);
            }    
        })

        // if ((values.userInput === '') && (values.passInput === '')) {
        //     window.location.href = "./painel";
        // } else {
        //     window.alert("Usuário ou senha incorretos.")
        // }
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                id="userInput"
                placeholder="Usuário"
                type="text"
                onChange={handleChangeValues} />
            <input
                id="passInput"
                placeholder="Senha"
                type="password"
                onChange={handleChangeValues} />
            <button onClick={() => { handleClick() }}>Entrar</button>
        </form>
    )
}

export default Form;