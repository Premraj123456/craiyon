import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export function IGCwithSkeleton() {
  const get_the_rain = "okrain";
  const name = "goos";

  return <Skeleton className="w-full h-100 rounded-lg bg-gray-700 mt-4" />;
}
