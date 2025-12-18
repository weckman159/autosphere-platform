import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function UpcomingEvents() {
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
          <div key={event.id} className="border rounded p-2">
            <h3 className="font-bold">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
