import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function UpcomingEvents() {
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
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: true })
    .limit(3);

  if (!events || events.length === 0) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-2">Upcoming Events</h2>
        <p>No upcoming events.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Upcoming Events</h2>
      <div className="space-y-2">
        {events.map((event) => (
          <div key={event.id}>
            <h3 className="font-bold">{event.name}</h3>
            <p>{`${new Date(event.date).toLocaleDateString()} at ${event.location}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
