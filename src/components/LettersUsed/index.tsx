import { Letter } from '../Letter';
import styles from './styles.module.css';

export function LettersUsed () {
    return(
        <div className={styles.lettersUsed}>
            <h5>Letras Utilizadas</h5>
            <div>
                <Letter value="A" color='correct'/>
                <Letter value="A" color='wrong'/>
            </div>
        </div>
    )
}