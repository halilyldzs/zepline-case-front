import Link from 'next/link';
import './SkipLink.scss';

export default function SkipLink() {
  return (
    <Link href="#main-content" className="skip-link">
      Ana içeriğe geç
    </Link>
  );
}
