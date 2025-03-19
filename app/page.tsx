import Link from "next/link";
import Image from "next/image";

import img1 from "./img/IMG_6693.jpeg";
import img2 from "./img/IMG_6700.jpeg";
import img3 from "./img/IMG_6702.jpeg";
import img4 from "./img/IMG_6703.jpeg";
import img5 from "./img/IMG_6704.jpeg";
import img6 from "./img/IMG_8862.jpg";
import img7 from "./img/IMG_8863.jpg";
import img8 from "./img/IMG_8864.jpg";
import img9 from "./img/IMG_8865.jpg";
import img10 from "./img/IMG_8866.jpg";
import img11 from "./img/IMG_8867.jpg";
import img13 from "./img/IMG_8869.jpg";
import img14 from "./img/IMG_8870.jpg";
import img15 from "./img/IMG_8871.jpg";
import img16 from "./img/IMG_8872.jpg";
import img17 from "./img/IMG_8873.jpg";
import img18 from "./img/IMG_8874.jpg";
import img19 from "./img/IMG_8875.jpg";

type Jewelery = {
  img: typeof img1;
  name: string;
  price: number;
  sold?: boolean;
};

const items: Jewelery[] = [
  { img: img5, name: "taco face", price: 8, sold: true },
  { img: img6, name: "red beaded bracelet", price: 7 },
  { img: img1, name: "purple keychain", price: 4, sold: true },
  { img: img7, name: "stone bead earrings", price: 3 },
  { img: img8, name: "rainbow earrings", price: 3 },
  { img: img9, name: "double amazing earrings", price: 3 },
  { img: img10, name: "long purple perfection", price: 3 },
  { img: img11, name: "short purple perfection", price: 3 },
  { img: img2, name: "ring", price: 2, sold: true },
  { img: img13, name: "color field / color splatter", price: 14 },
  { img: img3, name: "loopty chain", price: 6, sold: true },
  { img: img14, name: "easter potholder", price: 10 },
  { img: img15, name: "thanksgiving potholder", price: 10 },
  { img: img16, name: "color chain potholder", price: 10 },
  { img: img17, name: "color mix potholder", price: 10 },
  { img: img18, name: "rainbow potholder", price: 10 },
  { img: img19, name: "color combination potholder", price: 10 },
  { img: img4, name: "llama sparkles", price: 15, sold: true },
];

export default function Home() {
  return (
    <div>
      <h1 style={{ fontSize: "48px" }}>
        Hi, my name is Zoya and this is my store
      </h1>
      <div style={{ fontSize: "18px", lineHeight: "1.5" }}>
        <p>
          I have a store that sells jewelery of all kinds: braided, beaded, and
          all sorts.
        </p>
        <p>
          If you're interested, you can come to my store and look at what I
          have.
        </p>
        <p>
          <em>
            Note from dad: to buy,{" "}
            <Link href="https://grin.contact">message me</Link> with the item(s)
            you want and your mailing address. First come, first serve.
          </em>
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-around",
        }}
      >
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

const Item = (item: Jewelery) => {
  return (
    <div style={{ marginBottom: "60px", opacity: item.sold ? "50%" : "unset" }}>
      <h1>
        {item.sold ? (
          <>
            <span style={{ textDecoration: "line-through", fontWeight: "400" }}>
              {item.name} - ${item.price}
            </span>{" "}
            sold
          </>
        ) : (
          <>
            {item.name} - ${item.price}
          </>
        )}
      </h1>
      <div style={{ maxWidth: "500px" }}>
        <a href={item.img.src} target="_blank" rel="noreferrer">
          <Image
            src={item.img}
            alt={item.name}
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </a>
      </div>
    </div>
  );
};
