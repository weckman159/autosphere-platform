import { useState } from 'react';
import { Upload, Car, Calendar, Users, ShoppingBag, MapPin, Clock } from 'lucide-react';

const mockCars = [
  { id: 1, year: 2022, make: 'Porsche', model: '911 Turbo S', imageUrl: 'https://placehold.co/600x400/1A1A1A/00C2A8?text=Porsche+911' },
  { id: 2, year: 2023, make: 'BMW', model: 'M4 Competition', imageUrl: 'https://placehold.co/600x400/1A1A1A/00C2A8?text=BMW+M4' },
  { id: 3, year: 2021, make: 'Audi', model: 'RS6 Avant', imageUrl: 'https://placehold.co/600x400/1A1A1A/00C2A8?text=Audi+RS6' },
];

const mockListings = [
  { id: '1', title: '2022 Tesla Model S Plaid', price: 89990, imageUrl: 'https://placehold.co/200x200/1A1A1A/00C2A8?text=Tesla' },
  { id: '2', title: '2020 Mercedes-AMG C63', price: 54900, imageUrl: 'https://placehold.co/200x200/1A1A1A/00C2A8?text=AMG' },
  { id: '3', title: '2023 Ford Mustang Mach-E', price: 45000, imageUrl: 'https://placehold.co/200x200/1A1A1A/00C2A8?text=Mustang' },
];

const mockEvents = [
  { id: 'e1', name: 'Berlin Classic Car Meet', date: '2025-12-28', location: 'Tempelhofer Feld' },
  { id: 'e2', name: 'Munich Drift Night', date: '2026-01-10', location: 'Olympiapark' },
  { id: 'e3', name: 'Hamburg Tuning Expo', date: '2026-02-15', location: 'Messe Hamburg' },
];

const mockCommunities = [
  { id: 'c1', name: 'Porsche Club Germany', members: 4280 },
  { id: 'c2', name: 'BMW M Enthusiasts', members: 3150 },
  { id: 'c3', name: 'Tesla Owners Berlin', members: 1920 },
];

export default function App() {
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setUploadedUrl(url);
    }
  };

  const randomCar = mockCars[Math.floor(Math.random() * mockCars.length)];

  return (
    <div className="min-h-screen bg-[#121212] text-[#F5F5F5] font-sans">
      {/* Header */}
      <header className="bg-[#1A1A1A] border-b border-[#333333] px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Car className="text-[#00C2A8] w-8 h-8" />
            <h1 className="text-2xl font-bold tracking-tight">AutoSphere</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-[#00C2A8] transition">Garage</a>
            <a href="#" className="hover:text-[#00C2A8] transition">Marketplace</a>
            <a href="#" className="hover:text-[#00C2A8] transition">Communities</a>
            <a href="#" className="hover:text-[#00C2A8] transition">Events</a>
            <a href="#" className="hover:text-[#00C2A8] transition">Profile</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#2A2A2A] p-6 rounded-xl premium-card">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Upload className="w-5 h-5 text-[#00C2A8]" />
                Upload Your Ride
              </h2>
              <div className="space-y-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-[#B0B0B0] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#00C2A8] file:text-[#1A1A1A] file:font-semibold hover:file:bg-[#00A896] transition"
                />
                {uploadedUrl && (
                  <div className="mt-4 border border-[#404040] rounded-lg overflow-hidden max-w-md">
                    <img src={uploadedUrl} alt="Uploaded preview" className="w-full h-48 object-cover" />
                  </div>
                )}
              </div>
            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-xl premium-card">
              <h2 className="text-2xl font-bold mb-4">Your Garage</h2>
              <p className="text-[#B0B0B0]">Add your vehicles to showcase them to the community.</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Car of the Day */}
            <div className="bg-[#2A2A2A] p-6 rounded-xl premium-card hover:shadow-glow-teal transition-all">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-[#00C2A8]" />
                Car of the Day
              </h2>
              <img
                src={randomCar.imageUrl}
                alt={`${randomCar.make} ${randomCar.model}`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{randomCar.year} {randomCar.make} {randomCar.model}</h3>
            </div>

            {/* Recent Listings */}
            <div className="bg-[#2A2A2A] p-6 rounded-xl premium-card">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#00C2A8]" />
                Recent Listings
              </h2>
              <div className="space-y-4">
                {mockListings.map((item) => (
                  <div key={item.id} className="flex gap-3 cursor-pointer hover:bg-[#333333] p-2 rounded-lg transition">
                    <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-[#00C2A8] font-bold">${item.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-[#2A2A2A] p-6 rounded-xl premium-card">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#00C2A8]" />
                Upcoming Events
              </h2>
              <div className="space-y-3">
                {mockEvents.map((event) => (
                  <div key={event.id} className="text-sm">
                    <div className="font-semibold">{event.name}</div>
                    <div className="flex items-center text-[#B0B0B0] gap-1 mt-1">
                      <Clock className="w-3 h-3" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-[#B0B0B0] gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Communities */}
            <div className="bg-[#2A2A2A] p-6 rounded-xl premium-card">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#00C2A8]" />
                Active Communities
              </h2>
              <div className="space-y-2">
                {mockCommunities.map((comm) => (
                  <div key={comm.id} className="flex justify-between">
                    <span>{comm.name}</span>
                    <span className="text-[#00C2A8] font-medium">{comm.members.toLocaleString()} members</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}