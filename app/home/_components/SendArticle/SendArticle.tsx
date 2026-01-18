import Image from 'next/image';
import './SendArticle.scss';
import SendArticleContent from './SendArticleContent';

export default function SendArticle() {
  return (
    <section className="send-article container">
      <Image
        src="/images/article-journals.png"
        alt="Send Article"
        width={514}
        height={439}
        className="send-article__image"
      />

      <div className="send-article__content-wrapper">
        <SendArticleContent />
      </div>

      <Image
        src="/images/send-article2.png"
        alt="Send Article 2"
        width={306}
        height={465}
        className="send-article__image2"
      />
    </section>
  );
}
