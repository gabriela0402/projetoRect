import styles from './Cartao.module.css'

function Cartao(props){
    return(
        <div className={styles.cart}>
            <img src={props.foto} alt={props.nome} />
            <p>Nome: {props.nome} </p>
            <p>Profissão: {props.prof} </p>
            <p>Descrição: {props.desc} </p>
        </div>
    )
}

export default Cartao