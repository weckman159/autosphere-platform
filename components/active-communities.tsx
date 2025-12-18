import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function ActiveCommunities() {
  const supabase = createServerComponentClient({ cookies });
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
