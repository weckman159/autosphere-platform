import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function UpcomingEvents() {
  const supabase = createSupabaseServerClient();
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: true })
    .limit(3);

  if (!events || events.length === 0) {
    return (
      <div>
        <h2 className="mb-2 text-xl font-bold">Upcoming Events</h2>
        <p>No upcoming events.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-2 text-xl font-bold">Upcoming Events</h2>
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
