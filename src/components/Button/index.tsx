import { ComponentProps } from 'react';
import styles from './styles.module.css';

type props = ComponentProps<'button'> & {
    title: string;
}


export function Button({title, ...rest}: props) {
    return (
        <button type="button" className={styles.button} {...rest}>{title}</button>
    )
}