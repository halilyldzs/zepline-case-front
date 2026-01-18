import Hero from './_components/Hero';
import JournalIssues from './_components/JournalIssues';
import LatestArticles from './_components/LatestArticles';
import SendArticle from './_components/SendArticle';
import './Home.scss';

export default function Home() {
  return (
    <main className="main-content">
      <Hero />
      <JournalIssues />
      <SendArticle />
      <LatestArticles />
    </main>
  );
}
