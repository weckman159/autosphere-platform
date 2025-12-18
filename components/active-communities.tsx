import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function ActiveCommunities() {
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
    }
  );
  const { data: communities } = await supabase
    .from("communities")
    .select("*")
    .limit(3);

  if (!communities || communities.length === 0) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-2">Active Communities</h2>
        <p>No active communities.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Active Communities</h2>
      <div className="space-y-2">
        {communities.map((community) => (
          <div key={community.id}>
            <h3 className="font-bold">{community.name}</h3>
            <p>{community.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
