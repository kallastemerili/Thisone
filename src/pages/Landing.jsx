export default function Landing({ navigate }) {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600')] bg-cover bg-center">
      <div className="bg-white/80 p-10 rounded-2xl max-w-3xl mx-4">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Paradise Nursery</h1>
        <p className="mb-6 text-gray-700">Welcome to Paradise Nursery — your online oasis for beautiful, healthy houseplants.</p>
        <button onClick={() => navigate('products')} className="px-5 py-2 bg-green-600 text-white rounded">
          Get Started
        </button>
      </div>
    </main>
  );
}
