import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className = {`${styles.navigation}`}>
        <div className={`${styles.logo}`}>
            <img src ='/images/logo.png' alt="logo_image" />
        </div>
        <div>
            <ul className="menu">
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation