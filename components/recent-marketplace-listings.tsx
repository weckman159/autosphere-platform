import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function RecentMarketplaceListings() {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    },
  );
  const { data: listings } = await supabase
    .from("marketplace_listings")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  if (!listings || listings.length === 0) {
    return (
      <div>
        <h2 className="mb-2 text-xl font-bold">Recent Marketplace Listings</h2>
        <p>No listings found.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-2 text-xl font-bold">Recent Marketplace Listings</h2>
      <div className="space-y-2">
        {listings.map((listing) => (
          <div key={listing.id} className="flex items-center space-x-2">
            <img
              src={listing.imageUrl}
              alt={listing.title}
              className="h-16 w-16 rounded-md object-cover"
            />
            <div>
              <h3 className="font-bold">{listing.title}</h3>
              <p>{`$${listing.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
