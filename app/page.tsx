import CarOfTheDay from '@/components/car-of-the-day';
import Header from '@/components/header';
import { ImageUpload } from '@/components/image-upload';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to Autosphere</h1>
        <CarOfTheDay />
        <ImageUpload />
      </main>
    </div>
  );
}
