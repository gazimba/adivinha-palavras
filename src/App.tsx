import './global.css';
import { Header } from "./components/Header";
import styles from './app.module.css';
import { Tips } from './components/Tip';
import { Letter } from './components/Letter';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { LettersUsed } from './components/LettersUsed';

export function App() {
    function handleRestartGame() {

    }
    return (
        <div className={styles.container}>
            <main>
                <Header current={5} max={10} onRestart={handleRestartGame} />

                <Tips tip="Uma das linguagens de programação mais usadas." />

                <div className={styles.word}>
                    <Letter value="R" />
                    <Letter value="E" />
                    <Letter value="A" />
                    <Letter value="C" />
                    <Letter value="T" />
                </div>

                <h4>Palpite</h4>

                <div className={styles.guess}>
                    <Input autoFocus maxLength={1} placeholder='?'/>
                    <Button title="Confirmar" />
                </div>

                <LettersUsed />
            </main>
        </div>
    )
}