import Range from "./components/range/Range";
import Signal from "./components/signal/Signal";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <main>
        <div className={styles.widget__container}>
          <Range />
          <Signal />
        </div>
      </main>
    </div>
  );
}

export default App;
