import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';

export default function HeaderNav() {
  return (
    <div className="flex-1 flex items-center justify-between h-full px-4">
      <Link href="/" className="flex items-center justify-center">
        <Icon name="home" className="w-6 h-6 text-success" />
      </Link>

      <nav className="flex items-center gap-6">
        <Link href="#" className="text-gray-800 hover:opacity-80 text-[17px]">
          Amaç ve Kapsam
        </Link>
        <Link href="#" className="text-gray-800 hover:opacity-80 text-[17px]">
          Etik İlkeler ve Yayın Politikası
        </Link>
        <Link href="#" className="text-gray-800 hover:opacity-80 text-[17px]">
          Makale Çağrıları
        </Link>
        <Link href="#" className="text-gray-800 hover:opacity-80 text-[17px]">
          Sayılar
        </Link>
        <Link href="#" className="text-gray-800 hover:opacity-80 text-[17px]">
          İletişim
        </Link>
      </nav>

      <div className="flex items-center gap-2">
        <Button 
          variant="filled" 
          color="primary" 
          leftIcon="kurul"
          className="rounded-full"
        >
          Dergi Kurulu
        </Button>
        <Button 
          variant="filled" 
          color="success" 
          leftIcon="author"
          className="rounded-full"
        >
          Yazar Rehberi
        </Button>
        <Button 
          variant="outline" 
          color="primary" 
          shape="circle"
          leftIcon="search"
        />
      </div>
    </div>
  );
}
