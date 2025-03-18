import styles from './tip.module.css';
import tipIcon from '../../assets/tip.svg';

type Props = {
    tip: string;
}

export function Tips({tip}: Props) {
    return (
        <div className={styles.tip}>
            <img src={tipIcon} alt="Icone da dica"  />
            <div>
                <h3>Dica</h3>
                <p>{tip}</p>
            </div>
        </div>
    )
}