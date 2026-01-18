export interface LatestArticlesListData {
  id: string;
  categories: string[];
  title: string;
  pageRange: {
    start: number;
    end: number;
  };
  authors: string[];
}

export const latestArticlesMockData: LatestArticlesListData[] = [
  {
    id: '1',
    categories: ['İklim', 'Araştırma Makalesi'],
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pageRange: {
      start: 12,
      end: 28,
    },
    authors: ['Elif Başkaya Acar', 'Emre Taran', 'Halil Başar'],
  },
  {
    id: '2',
    categories: ['Dijital Dönüşüm', 'Araştırma Makalesi'],
    title: 'Yapay Zeka ve Veri Analitiği Uygulamaları',
    pageRange: {
      start: 29,
      end: 45,
    },
    authors: ['Ahmet Yılmaz', 'Zeynep Demir'],
  },
  {
    id: '3',
    categories: ['Siber Güvenlik', 'Derleme'],
    title: 'Kamu Sektöründe Dijital Altyapı Güvenliği',
    pageRange: {
      start: 46,
      end: 62,
    },
    authors: ['Mehmet Kaya', 'Ayşe Öztürk', 'Can Yıldız'],
  },
  {
    id: '4',
    categories: ['Büyük Veri', 'Araştırma Makalesi'],
    title: 'Akıllı Şehirler ve IoT Uygulamaları',
    pageRange: {
      start: 63,
      end: 79,
    },
    authors: ['Fatma Şahin', 'Ali Çelik', 'Selin Yıldız', 'Burak Kaya'],
  },
];
