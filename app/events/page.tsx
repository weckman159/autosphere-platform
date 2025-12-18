import { createSupabaseServerClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function EventsPage() {
  const supabase = await createSupabaseServerClient();
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: true });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">Upcoming Events</h1>

      {events && events.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <div className="rounded-lg border p-4 h-full">
                <h2 className="text-xl font-bold">{event.name}</h2>
                <p className="text-gray-600">
                  {new Date(event.date).toLocaleDateString()} at {event.location}
                </p>
                <p className="mt-2">{event.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No upcoming events.</p>
      )}
    </div>
  );
}
