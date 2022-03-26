import Header from './components/Header';
import styles from './styles/app.module.css'
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container_inner}>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
