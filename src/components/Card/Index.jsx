import styles from './Index.module.css'

function Card({name, age, userN}){
    return(
        <div className={styles.card}>
            <h1>User {userN}</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default Card;