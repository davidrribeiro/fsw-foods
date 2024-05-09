import Header from "./_components/header";
import Search from "./_components/search";
import CategoryList from "./_components/category-list";
import ProductList from "./_components/product-list";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { db } from "./_lib/prisma";
import BannerPromo from "./_components/banner-promo";

export default async function Home() {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });
  return (
    <div>
      <Header />
      <div className="px-5 pt6">
        <Search />
      </div>
      <div className="px-5 pt6">
        <CategoryList />
      </div>
      <div className="px-5 pt-6">
        <BannerPromo src="/promo-banner-01.png" alt="Banner promo" />
      </div>
      <div className="pt-6 space-y-4">
        <div className="px-5 flex justify-between items-center">
          <h2 className="font-semibold">Pedidos recomendados</h2>
          <Button
            variant="ghost"
            className="text-primary px-0 hover:bg-transparent h-fit"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <ProductList products={products} />
      </div>
      <div className="px-5 pt-6">
        <BannerPromo src="/promo-banner-02.png" alt="Banner promo" />
      </div>
    </div>
  );
}
