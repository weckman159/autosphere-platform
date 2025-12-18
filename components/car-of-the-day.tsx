import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function CarOfTheDay() {
  const supabase = createSupabaseServerClient();

  const { count: carCount } = await supabase
    .from("cars")
    .select("*", { count: "exact", head: true });

  if (carCount === null || carCount === 0) {
    return (
      <div className="rounded-lg border bg-white p-4 shadow-lg">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">Car of the Day</h2>
        <p className="text-gray-600">No cars found.</p>
      </div>
    );
  }

  const randomIndex = Math.floor(Math.random() * carCount);
  const { data: randomCar } = await supabase
    .from("cars")
    .select("*")
    .limit(1)
    .range(randomIndex, randomIndex)
    .single();

  if (!randomCar) {
    return (
      <div className="rounded-lg border bg-white p-4 shadow-lg">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">Car of the Day</h2>
        <p className="text-gray-600">No car found.</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">Car of the Day</h2>
      <img
        src={randomCar.imageUrl}
        alt={`${randomCar.make} ${randomCar.model}`}
        className="mb-4 h-64 w-full rounded-lg object-cover shadow-md"
      />
      <h3 className="text-xl font-semibold text-gray-700">{`${randomCar.year} ${randomCar.make} ${randomCar.model}`}</h3>
    </div>
  );
}
