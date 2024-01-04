import styles from './WayToTeach.module.css'

export default function WayToteach({title, description}) {
    return (
        <li>
            <p className={styles.way}>
                <strong className={styles.wayStrong}>{title}</strong>
                <br/> 
                {description}     
            </p>
        </li>
    )
}