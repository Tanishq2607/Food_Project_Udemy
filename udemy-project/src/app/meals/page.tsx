import MealsGrid from "@/components/meals/meals-grid";
import Link from "next/link";
import { getMeals } from "../../../lib/meals";

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
      <header className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-800">
          Delicious Meals, created{" "}
          <span className="text-amber-600">by you</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p>
          <Link 
            href="/meals/share" 
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 inline-block"
          >
            Share your favourite Recipe
          </Link>
        </p>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-16">
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}