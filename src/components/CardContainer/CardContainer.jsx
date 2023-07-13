import styles from './CardCt.module.css'
import Card from '../Card/Index'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const users = [
    {name: "gabriel", age: 23},{name: "Maria", age: 54},{}
]

function CardContainer({liftState}){
    const [users, setUsers] = useState([])

    useEffect(()=>{
        async function getUsers(){
            try{
                const response = await axios.get('https://api-first-fullstack-app.onrender.com')
                .then((res) => setUsers(res.data))
                .catch((error)=>{
                    console.error(error);
                })

            }catch(err){
                console.error('Erro ao obter usuários ==> ' + err.message)
            }

        }
        getUsers();

    }, [liftState])

    return(
        <div className={styles.card_ct}>
            {users.map((user, i) =>{
                return <Card key={i} userN={i + 1} name={user.name} age={user.age} />
            })}
        </div>
    )
}

export default CardContainer;