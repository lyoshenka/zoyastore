import Link from "next/link";
import Image from "next/image";

import img1 from "./img/IMG_6693.jpeg";
import img2 from "./img/IMG_6694.jpeg";
import img3 from "./img/IMG_6695.jpeg";
import img4 from "./img/IMG_6696.jpeg";
import img5 from "./img/IMG_6697.jpeg";
import img6 from "./img/IMG_6698.jpeg";
import img7 from "./img/IMG_6699.jpeg";
import img8 from "./img/IMG_6700.jpeg";
import img9 from "./img/IMG_6701.jpeg";
import img10 from "./img/IMG_6702.jpeg";
import img11 from "./img/IMG_6703.jpeg";
import img12 from "./img/IMG_6704.jpeg";
import img13 from "./img/IMG_6705.jpeg";
import img14 from "./img/IMG_6706.jpeg";
import img15 from "./img/IMG_6707.jpeg";

type Jewelery = {
  img: typeof img1;
  name: string;
  price: number;
  sold?: boolean;
};

const items: Jewelery[] = [
  { img: img1, name: "purple keychain", price: 4 },
  { img: img2, name: "hoopy hoopy chain", price: 10 },
  { img: img3, name: "a bracelet", price: 3 },
  { img: img4, name: "brush chain", price: 12 },
  { img: img5, name: "cactusy beads", price: 15 },
  { img: img6, name: "earrings", price: 20, sold: false },
  { img: img7, name: "loop-de-loop", price: 1 },
  { img: img8, name: "ring", price: 2, sold: true },
  { img: img9, name: "golden velvet", price: 5 },
  { img: img10, name: "loopty chain", price: 6 },
  { img: img11, name: "llama sparkles", price: 15, sold: true },
  { img: img12, name: "taco face", price: 8 },
  { img: img13, name: "golden sparkle", price: 5 },
  { img: img14, name: "pom pom keychain", price: 4 },
  { img: img15, name: "pattern bead brush", price: 10 },
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
      </div>
    </div>
  );
};
