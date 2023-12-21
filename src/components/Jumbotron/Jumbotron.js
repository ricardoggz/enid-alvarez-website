import { Container } from "../../components"
import styles from './jumbotron.module.css'

export const Jumbotron = ()=>{
    return(
        <Container>
            <div className={styles.jumbotron}>
            <h1>Bolsos a crochet</h1>
            </div>
        </Container>
    )
}