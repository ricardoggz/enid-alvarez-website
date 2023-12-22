import styles from './container.module.css'

export const Container = ({children, dark, pink})=>{
    return (
        <section
            className={
                `
                ${styles.container}
                ${pink ? styles.pink : ''}
                `
            }
        >
            {children}
        </section>
    )
}