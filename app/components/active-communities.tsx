import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function ActiveCommunities() {
  const cookieStore = await cookies();
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
  const { data: communities } = await supabase
    .from("communities")
    .select("*")
    .limit(3);

  if (!communities || communities.length === 0) {
    return (
      <div>
        <h2 className="mb-2 text-xl font-bold">Active Communities</h2>
        <p>No active communities.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-2 text-xl font-bold">Active Communities</h2>
      <div className="space-y-2">
        {communities.map((community) => (
          <div key={community.id}>
            <a href={`/communities/${community.slug}`}>{community.name}</a>
            <p className="text-sm text-gray-500">{community.member_count} members</p>
          </div>
        ))}
      </div>
    </div>
  );
}
