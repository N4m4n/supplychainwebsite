import Image from "next/image";
import homePageImage from "../assets/home_page_image.png";

export function TradeVisual() {
  return (
    <div className="trade-visual">
      <Image
        alt="Global trade illustration with cargo ships, routes, Nigerian imports and exports, and the Nigerian flag"
        className="trade-visual-image"
        priority
        sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1080px) 48vw, 45vw"
        src={homePageImage}
      />
    </div>
  );
}
