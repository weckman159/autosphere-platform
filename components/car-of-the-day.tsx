import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function CarOfTheDay() {
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
  const { data: cars } = await supabase.from("cars").select("*");

  if (!cars || cars.length === 0) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-2">Car of the Day</h2>
        <p>No cars found.</p>
      </div>
    );
  }

  const randomCar = cars[Math.floor(Math.random() * cars.length)];

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Car of the Day</h2>
      <div className="border rounded-lg p-4">
        <h3 className="font-bold">{randomCar.make} {randomCar.model}</h3>
        <p className="text-sm text-gray-500">{randomCar.year}</p>
      </div>
    </div>
  );
}
