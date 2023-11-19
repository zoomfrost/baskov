import Image from "next/image";
import photo from "@/public/promo.jpg";
import Link from "next/link";

export default function Home() {
  const descr = [
    {
      img: photo,
      text: "Our hotel is beautifully situated in a central historic building of Saint-Petersburg",
    },
    {
      img: photo,
      text: "Every room is uniquely designed with exquisite pastel hues and comfort in mind",
    },
    {
      img: photo,
      text: "Step outside and you’re right in the thick of St. Petersburg’s vibrant city life",
    },
  ];
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:px-6 max-sm:gap-y-6 gap-x-10 mb-36 px-4">
        <div className="grid auto-rows-auto max-sm:text-center max-md:text-sm text-md gap-y-4 items-center">
          <h2 className="text-white heading2 max-md:heading3">The Cabins</h2>
          <p className="text-white">
            Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
            designed by architect Sigurd Larsen. They all have an open space
            with a double bed, a double sofa bed, kitchen, separate toilet and
            an outdoor shower. On the roof, surrounded by treetops, there is a
            terrace, which is about nine meters above ground. The cottages are
            built around tall, old trees that go through the entire cottage from
            floor to ceiling.
          </p>
          <Link className="text-white" href="/about">
            Read more
          </Link>
        </div>
        <Image src={photo} alt="photo" />
      </div>
      <div className="flex-center gap-x-10 lg:gap-x-20 max-md:flex-col">
        {descr.map((item, i) => (
          <div className="w-60 lg:w-80 xl:w-96" key={i}>
            <Image src={item.img} className="grayscale bg-cover" alt="photo" />
            <p className="text-white mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
