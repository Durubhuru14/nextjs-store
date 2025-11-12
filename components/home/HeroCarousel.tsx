import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";

const carouselImages = [hero1, hero2, hero3, hero4];

function HeroCarousel() {
  return (
    <div className="hidden lg:block w-full overflow-hidden">
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {carouselImages.map((image, index) => {
              return (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-2">
                      <Image
                        src={image}
                        priority
                        alt={`Hero image ${index + 1}`}
                        className="w-full h-[24rem] rounded-md object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </div>
  );
}
export default HeroCarousel;