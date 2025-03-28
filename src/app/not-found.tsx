import styles from "./not-found.module.css"

export default function NotFound() {
    return (
        <div className={styles.container}>
            <dl>
                <dt className={styles.title}>Page is not founded</dt>
                <dd className={styles.text}>
                    The page you tried to access doesnot exist

                    <br />
                    Please, check url again
                </dd>
            </dl>
        </div>
    )
}