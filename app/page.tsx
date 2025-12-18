import ActiveCommunities from "@/components/active-communities";
import CarOfTheDay from "@/components/car-of-the-day";
import Header from "@/components/header";
import { ImageUpload } from "@/components/image-upload";
import RecentMarketplaceListings from "@/components/recent-marketplace-listings";
import UpcomingEvents from "@/components/upcoming-events";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="mb-4 text-2xl font-bold">Welcome to Autosphere</h1>
          <ImageUpload />
        </div>
        <div className="space-y-4">
          <CarOfTheDay />
          <RecentMarketplaceListings />
          <UpcomingEvents />
          <ActiveCommunities />
        </div>
      </main>
    </div>
  );
}
