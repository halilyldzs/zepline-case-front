import Image from 'next/image';
import './SendArticle.scss';

export default function SendArticle() {
  return (
    <section className="send-article container">
      <Image src="/images/article-journals.png" alt="Send Article" width={514} height={439} />
    </section>
  );
}
