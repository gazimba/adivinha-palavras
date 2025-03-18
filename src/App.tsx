import './global.css';
import { Header } from "./components/Header";
import styles from './app.module.css';

export function App() {
    function handleRestartGame() {

    }
    return (
        <div className={styles.container}>
            <main>
                <Header current={5} max={10} onRestart={handleRestartGame} />
            </main>
        </div>
    )
}