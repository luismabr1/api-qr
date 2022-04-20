import styles from './RejectIcon.module.css'
const RejectIcon = () => {
    return (
            <svg className={styles.rejectmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className={styles.rejectmark__circle} cx="26" cy="26" r="25" fill="none" />
                <path className={styles.rejectmark__check} fill="none" d="M16 16 36 36 M36 16 16 36" />
            </svg>
    );
};

export default RejectIcon;