import Header from './_components/Header';
import Hero from './_components/Hero';
import JournalIssues from './_components/JournalIssues';
import LatestArticles from './_components/LatestArticles';
import SendArticle from './_components/SendArticle';
import Footer from './_components/Footer';
import './Home.scss';

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <JournalIssues />
        <SendArticle />
        <LatestArticles />
      </main>
      <Footer />
    </>
  );
}
