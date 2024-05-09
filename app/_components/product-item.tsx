import { Prisma } from "@prisma/client";
import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";
import { ArrowDown, ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="space-y-2 w-[150px] min-w-[150px]">
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover rounded-lg shadow-md"
        />
        {product.discountPercentage > 0 && (
          <div className="absolute top-2 left-2 flex items-center bg-primary text-white px-2 py-1 rounded-full">
            <ArrowDownIcon size={16} />
            <span className=" text-xs font-bold">
              {product.discountPercentage}%
            </span>
          </div>
        )}
      </div>
      <div>
        <h2 className="text-sm truncate">{product.name}</h2>
      </div>
      <div className="flex gap-1 items-center">
        <h3 className="font-bold">
          {formatCurrency(calculateProductTotalPrice(product))}
        </h3>
        {product.discountPercentage > 0 && (
          <span className="line-through text-muted-foreground text-sm">
            {formatCurrency(Number(product.price))}
          </span>
        )}
      </div>
      <span className="text-muted-foreground text-xs">
        {product.restaurant.name}
      </span>
    </div>
  );
};

export default ProductItem;
