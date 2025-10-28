import ProductCard from '../components/ProductCard';

export default function ProductsPage({ products, onAdd }) {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {categories.map((cat) => (
        <section key={cat} className="mb-8">
          <h3 className="text-xl font-semibold mb-3">{cat}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.filter((p) => p.category === cat).map((p) => (
              <ProductCard key={p.id} product={p} onAdd={onAdd} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
