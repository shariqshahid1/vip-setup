import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { IMAGES, site } from "@/lib/site";

export default function MapSection() {
  return (
    <div className="max-w-container-max mx-auto px-gutter">
      <Reveal direction="up">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl group">
          <Image
            className="w-full h-full object-cover"
            src={IMAGES.map}
            alt="Stylized map showing the location of VIP Food Setup in the city center"
            fill
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-lg py-md rounded-2xl shadow-2xl flex items-center gap-md max-w-[calc(100%-48px)]">
            <div className="relative w-12 h-12 shrink-0">
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-40" />
              <div className="absolute inset-0 bg-primary rounded-full flex items-center justify-center">
                <Icon name="location_on" className="text-white" />
              </div>
            </div>
            <div className="ml-1">
              <h4 className="font-bold text-on-surface">VIP Food HQ</h4>
              <p className="text-sm text-secondary">
                {site.address}, {site.city}
              </p>
            </div>
          </div>
          <div className="absolute bottom-md right-md bg-white p-md rounded-xl shadow-lg">
            <p className="font-bold text-sm text-on-surface">Open 24/7</p>
            <p className="text-xs text-secondary">Always here for your cravings</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
