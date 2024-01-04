import Header from './components/Header/Header';
import styles from './App.module.css'
import TeachWay from './components/TeachWay/TeachWay';
import Differens from './components/Differens/Differens';
import TabsSection from './components/TabsSection/TabsSection';
import FeedBack from './components/FeedBack/FeedBack';
import { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('feedbak')
  return (
    <div className={styles.App}>
      <Header />
      <main>
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

      {tab === 'main' && (
        <>
          <TeachWay />
          <Differens />
        </>
      )}
      

      {tab === 'feedback' && <FeedBack />}
      </main>
    </div>
  );
}

