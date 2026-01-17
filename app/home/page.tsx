import Header from './_components/Header';
import Hero from './_components/Hero';
import JournalIssues from './_components/JournalIssues';
import './Home.scss';

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <JournalIssues />
      </main>
    </>
  );
}
