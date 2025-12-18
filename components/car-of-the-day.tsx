import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function CarOfTheDay() {
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
  const { data: cars } = await supabase.from("cars").select("*");

  if (!cars || cars.length === 0) {
    return (
      <div>
        <h2 className="mb-2 text-xl font-bold">Car of the Day</h2>
        <p>No cars found.</p>
      </div>
    );
  }

  const randomCar = cars[Math.floor(Math.random() * cars.length)];

  return (
    <div>
      <h2 className="mb-2 text-xl font-bold">Car of the Day</h2>
      <img
        src={randomCar.imageUrl}
        alt={`${randomCar.make} ${randomCar.model}`}
        className="mb-2 h-64 w-full rounded-md object-cover"
      />
      <h3 className="text-lg font-bold">{`${randomCar.year} ${randomCar.make} ${randomCar.model}`}</h3>
    </div>
  );
}
