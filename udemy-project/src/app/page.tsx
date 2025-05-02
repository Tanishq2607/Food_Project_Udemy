import Link from "next/link";
import ImageSlideshow from "@/components/images/image-slides";

export default function Home() {
  return (
    <>
      {/* Hero Section with ImageSlideshow */}
      <header className="relative flex flex-col lg:flex-row bg-gradient-to-b from-amber-700 to-amber-900 text-white">
        {/* Image Slideshow Container - takes full width on mobile, half on desktop */}
        <div className="w-full lg:w-1/2">
          <ImageSlideshow />
        </div>

        {/* Header Content - centered on mobile, right side on desktop */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Next Level Food for Next Level Foodies</h1>
              <p className="text-xl text-amber-200">Taste and Share food all over the world</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/community" 
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 text-center"
              >
                Join the Community
              </Link>
              <Link 
                href="/meals" 
                className="bg-white hover:bg-gray-100 text-amber-800 font-semibold py-3 px-6 rounded-full transition duration-300 text-center"
              >
                Explore Meals
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* How it Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-800">How it works</h2>
          <div className="bg-amber-50 p-8 rounded-lg shadow-md">
            <p className="text-lg mb-4 text-gray-700">
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes, and to
              connect with other food lovers.
            </p>
            <p className="text-lg text-gray-700">
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </div>
        </section>

        {/* Why NextLevel Food Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-800">Why NextLevel Food?</h2>
          <div className="bg-amber-50 p-8 rounded-lg shadow-md">
            <p className="text-lg mb-4 text-gray-700">
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes, and to
              connect with other food lovers.
            </p>
            <p className="text-lg text-gray-700">
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}