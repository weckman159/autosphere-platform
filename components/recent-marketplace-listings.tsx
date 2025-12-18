import { createSupabaseServerClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function RecentMarketplaceListings() {
  const supabase = createSupabaseServerClient();
  const { data: listings } = await supabase
    .from("marketplace_listings")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  if (!listings || listings.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-4 shadow-lg">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">Recent Marketplace Listings</h2>
        <p className="text-gray-600">No listings found.</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-white p-4 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">Recent Marketplace Listings</h2>
      <div className="space-y-4">
        {listings.map((listing) => (
          <Link key={listing.id} href={`/marketplace/${listing.id}`}>
            <div className="flex transform-gpu cursor-pointer items-center space-x-4 rounded-lg border p-3 transition-shadow duration-300 hover:shadow-xl">
              <img
                src={listing.imageUrl}
                alt={listing.title}
                className="h-20 w-20 rounded-lg object-cover shadow-md"
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{listing.title}</h3>
                <p className="text-gray-600">{`$${listing.price}`}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
