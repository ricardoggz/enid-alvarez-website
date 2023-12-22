import styles from './phrase.module.css'
import { FaCheckCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { GiBrain } from "react-icons/gi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { Container } from "../Container/Container"

export const Phrase = ()=>{
    return (
        <Container>
            <h2 className="title">Tejer te hace feliz</h2>
            <div className={`${styles.phrases}`}>
                <div>
                    <h3>Los estudios lo demuestran...</h3>
                    <p>
                        Una de las razones por las cuales el crochet ha cobrado auge,
                        es por la maravillosa oportunidad que nos da de sentirnos plenos y contentos. 
                    </p>
                    <span>
                        <span className={styles.icon}><CiHeart /></span>
                        Menor depresión 70%</span>
                    <span>
                        <span className={styles.icon}><GiBrain/></span>
                        Mejores conexiones neuronales 67%</span>
                    <span>
                        <span className={styles.icon}><HiOutlineBellAlert/></span>
                        Mayor concentración 80%
                    </span>
                </div>
                <div>
                    <img src='tejiendo.jpeg'/>
                </div>
            </div>
        </Container>
    )
}