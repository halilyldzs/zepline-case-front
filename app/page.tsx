'use client';

import { useState } from 'react';
import Badge from "@/components/ui/Badge";
import Pagination from "@/components/ui/Pagination";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-8 p-8">
      <h1>Badge</h1>
      
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 flex-wrap">
          <Badge variant="info">YENİ</Badge>
          <Badge variant="primary">ÖZEL SAYI</Badge>
          <Badge variant="warning">Şehir</Badge>
          <Badge variant="success">Çevre</Badge>
          <Badge variant="primary">İklim</Badge>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Badge variant="soft">Araştırma Makalesi</Badge>
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

      <div className="flex flex-col gap-8">
        <h1>Buttons</h1>
        
        <div className="flex flex-col gap-4">
          <h2>Filled Variant - All Colors</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="filled" color="primary">Primary</Button>
            <Button variant="filled" color="primary-dark">Primary Dark</Button>
            <Button variant="filled" color="success">Success</Button>
            <Button variant="filled" color="success-dark">Success Dark</Button>
            <Button variant="filled" color="danger">Danger</Button>
            <Button variant="filled" color="danger-dark">Danger Dark</Button>
            <Button variant="filled" color="warning">Warning</Button>
            <Button variant="filled" color="info">Info</Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2>Outline Variant - All Colors</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="outline" color="primary">Primary</Button>
            <Button variant="outline" color="primary-dark">Primary Dark</Button>
            <Button variant="outline" color="success">Success</Button>
            <Button variant="outline" color="success-dark">Success Dark</Button>
            <Button variant="outline" color="danger">Danger</Button>
            <Button variant="outline" color="danger-dark">Danger Dark</Button>
            <Button variant="outline" color="warning">Warning</Button>
            <Button variant="outline" color="info">Info</Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2>Text Only Buttons</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="filled">Button</Button>
            <Button variant="outline">Button</Button>
            <Button variant="filled" color="success">Button</Button>
            <Button variant="filled" color="danger">Button</Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2>Left Icon Buttons</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="filled" leftIcon="home">Dergi Kurulu</Button>
            <Button variant="filled" leftIcon="eye">Görüntüle</Button>
            <Button variant="filled" color="success" leftIcon="author">Yazar Rehberi</Button>
            <Button variant="outline" leftIcon="home">Dergi Kurulu</Button>
            <Button variant="outline" leftIcon="eye">Görüntüle</Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2>Right Icon Buttons</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="filled" rightIcon="right">Detay</Button>
            <Button variant="filled" color="danger" rightIcon="right">Gönder</Button>
            <Button variant="outline" rightIcon="right">Detay</Button>
            <Button variant="outline" color="primary" rightIcon="right">Detay</Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2>Both Icons Buttons</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="filled" leftIcon="eye" rightIcon="right">Görüntüle</Button>
            <Button variant="filled" color="success" leftIcon="author" rightIcon="right">Yazar Rehberi</Button>
            <Button variant="outline" leftIcon="home" rightIcon="right">Dergi Kurulu</Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2>Circular Icon Buttons - Outline</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="outline" shape="circle" leftIcon="download" />
            <Button variant="outline" shape="circle" leftIcon="email" />
            <Button variant="outline" shape="circle" leftIcon="right" />
            <Button variant="outline" shape="circle" leftIcon="search" />
            <Button variant="outline" shape="circle" leftIcon="linkedin" />
            <Button variant="outline" shape="circle" leftIcon="instagram" />
            <Button variant="outline" shape="circle" leftIcon="facebook" />
            <Button variant="outline" shape="circle" leftIcon="youtube" />
            <Button variant="outline" shape="circle" leftIcon="copy" />
            <Button variant="outline" shape="circle" leftIcon="menu" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2>Circular Icon Buttons - Filled</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="filled" shape="circle" leftIcon="download" />
            <Button variant="filled" shape="circle" leftIcon="email" />
            <Button variant="filled" shape="circle" leftIcon="right" />
            <Button variant="filled" color="success" shape="circle" leftIcon="check" />
            <Button variant="filled" color="danger" shape="circle" leftIcon="error" />
            <Button variant="filled" color="warning" shape="circle" leftIcon="warning" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2>Disabled Buttons</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="filled" disabled>Disabled</Button>
            <Button variant="outline" disabled>Disabled</Button>
            <Button variant="filled" leftIcon="home" disabled>Disabled</Button>
            <Button variant="filled" shape="circle" leftIcon="download" disabled />
          </div>
        </div>
      </div>
    </div>
  );
}
