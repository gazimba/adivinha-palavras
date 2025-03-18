import './global.css';
import { Header } from "./components/Header";
import styles from './app.module.css';
import { Tips } from './components/Tip';
import { Letter } from './components/Letter';

export function App() {
    function handleRestartGame() {

    }
    return (
        <div className={styles.container}>
            <main>
                <Header current={5} max={10} onRestart={handleRestartGame} />
                <Tips tip="Uma das linguagens de programação mais usadas." />
                <Letter value="J" />
            </main>
        </div>
    )
}