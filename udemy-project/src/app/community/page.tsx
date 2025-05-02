import Link from "next/link";
import Image from "next/image";
import cheeseCake from "../../../public/cheeseCake.webp";
import veganBowl from "../../../public/veganBowl.jpeg";
import pasta from "../../../public/pasta.jpeg";

export default function CommunityPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-800 mb-4">Welcome to the Community</h1>
        <p className="text-lg text-gray-700">
          Join food lovers from around the world. Share your recipes, get inspired, and connect with fellow foodies!
        </p>
      </section>

      {/* Featured Community Posts */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-amber-700 mb-6">Featured Posts</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Delicious Pasta by Chef John",
              description:
                "A quick and easy homemade pasta recipe that’s sure to impress. Made with love and parmesan!",
              image: pasta,
            },
            {
              title: "Tasty Vegan Bowl by Anna",
              description:
                "A vibrant mix of roasted veggies, quinoa, and a creamy tahini dressing. Perfect for lunch!",
              image: veganBowl,
            },
            {
              title: "Classic Cheesecake by Emma",
              description:
                "Creamy and rich with a graham cracker crust. A timeless dessert for any occasion.",
              image: cheeseCake,
            },
          ].map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden border border-amber-100 hover:shadow-lg transition"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full object-cover h-48"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Link href="#" className="text-amber-600 hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-amber-100 py-10 px-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-amber-900 mb-4">Ready to Share Your Dish?</h2>
        <p className="text-gray-700 mb-6">Create a post and inspire the community with your favorite recipe.</p>
        <Link
          href="/community"
          className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-full font-semibold transition"
        >
          Create a Post
        </Link>
      </section>
    </main>
  );
}
