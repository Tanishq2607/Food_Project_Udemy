import MealItem from './meals-item';

export default function MealsGrid({ meals }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {meals.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </div>
  );
}