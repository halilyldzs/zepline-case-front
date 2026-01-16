'use client';

import { useState } from 'react';
import CategoryBadge from "@/components/ui/CategoryBadge";
import Pagination from "@/components/ui/Pagination";
import Icon from "@/components/ui/Icon";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-8 p-8">
      <h1>Category Badge</h1>
      
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 flex-wrap">
          <CategoryBadge variant="info">YENİ</CategoryBadge>
          <CategoryBadge variant="primary">ÖZEL SAYI</CategoryBadge>
          <CategoryBadge variant="warning">Şehir</CategoryBadge>
          <CategoryBadge variant="success">Çevre</CategoryBadge>
          <CategoryBadge variant="primary">İklim</CategoryBadge>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <CategoryBadge variant="soft">Araştırma Makalesi</CategoryBadge>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1>Pagination</h1>
        <Pagination
          currentPage={currentPage}
          totalPages={99}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h1>Icons</h1>
        <div className="flex gap-4 flex-wrap">
          <Icon name="arrow-left" className="text-primary" />
          <Icon name="arrow-right" className="text-primary" />
          <Icon name="search" className="text-primary" />
          <Icon name="check" className="text-success" />
          <Icon name="home" className="text-primary w-6 h-6" />
          <Icon name="menu" className="text-gray" />
        </div>
      </div>
    </div>
  );
}
