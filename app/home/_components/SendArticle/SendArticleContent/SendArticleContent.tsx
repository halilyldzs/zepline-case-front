import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import React from 'react';
import './SendArticleContent.scss';

export default function SendArticleContent() {
  return (
    <div className="send-article-content">
      <Icon name="promotion" className="send-article-content__icon" />
      <h2 className="send-article-content__title">Makale Çağrısı</h2>
      <p className="send-article-content__subtitle">Türkiye Ulusal Dijital Veri ve Altyapıları</p>
      <p className="send-article-content__description">
        Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji
        altyapıları, yapay zekâ uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler
        ve dijital dönüşüm odaklı özgün, güncel ve disiplinlerarası akademik
        çalışmalar değerlendirilecektir.
      </p>
      <Button
        variant="filled"
        color="danger"
        className="send-article-content__button"
        rightIcon="right"
      >
        Makale Gönder
      </Button>
    </div>
  );
}
