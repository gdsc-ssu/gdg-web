import NavBar from '@/app/components/NavBar';
import Footer from '../components/common/Footer';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
} 