import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function EventDetailsPage({ params }: { params: { id: string } }) {
  const supabase = await createSupabaseServerClient();
  const { data: event } = await supabase
    .from("events")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-4 text-3xl font-bold">Event Not Found</h1>
        <p>Sorry, the event you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">{event.name}</h1>
      <p className="mb-4 text-gray-600">
        {new Date(event.date).toLocaleDateString()} at {event.location}
      </p>
      <p>{event.description}</p>
    </div>
  );
}
