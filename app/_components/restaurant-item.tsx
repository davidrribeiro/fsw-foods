import { Restaurant } from "@prisma/client";
import { BikeIcon, Heart, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="min-w-[266px] max-w-[266px] space-y-3">
      <div className="relative h-[136px] w-full">
        <Image
          src={restaurant.imageUrl}
          fill
          className="object-cover rounded-lg shadow-md"
          alt={restaurant.name}
        />
        <div className="absolute top-2 left-2 flex items-center bg-white text-black px-2 py-1 rounded-full">
          <StarIcon size={16} className="fill-yellow-400 text-yellow-400" />
          <span className=" text-xs font-bold">5.0</span>
        </div>
        <Button
          size="icon"
          className="absolute right-2 top-2 bg-gray-700 rounded-full"
        >
          <HeartIcon size={16} className="fill-white" />
        </Button>
      </div>
      <div>
        <h3 className="text-sm font-semibold">{restaurant.name}</h3>
        <div className="flex gap-3">
          <div className="flex gap-1 items-center">
            <BikeIcon size={14} className="text-primary" />
            <span className="text-xs text-muted-foreground">
              {Number(restaurant.deliveryFee) === 0
                ? "Grátis"
                : formatCurrency(Number(restaurant.deliveryFee))}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <TimerIcon size={14} className="text-primary" />
            <span className="text-muted-foreground text-sm">
              {restaurant.deliveryTimeMinutes} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
