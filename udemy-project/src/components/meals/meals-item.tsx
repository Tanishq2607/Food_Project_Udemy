import Link from 'next/link';
import Image from 'next/image';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <header>
        <div className="relative w-full h-64">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover"
          />
        </div>
        <div className="p-4 bg-amber-50 border-b border-amber-100">
          <h2 className="text-xl font-bold text-amber-800 mb-1">{title}</h2>
          <p className="text-sm text-gray-600">by {creator}</p>
        </div>
      </header>
      <div className="p-4">
        <p className="text-gray-700 mb-4">{summary}</p>
        <div className="text-right">
          <Link 
            href={`/meals/${slug}`}
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-full text-sm transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}