import { ways } from "../../data" 
import WayToTeach from "../WayToTeach/WayToTeach"
import styles from './TeachWay.module.css'

export default function TeachWay () {
    return (
        <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Про React</h3>
          <ul>
            {ways.map((way) => (
              <WayToTeach
                key={way.title} 
                {...way} />
            ))}
          </ul>
      </section>
    )
}