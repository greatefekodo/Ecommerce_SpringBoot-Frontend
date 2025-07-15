import { team } from "../utils/constant";
import ProductCard from "./shared/ProductCard";

const Products = [
  {
    image: "https://images.pexels.com/photos/12123390/pexels-photo-12123390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    productName: "iPhone 13 Pro Max",
    description:
      "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features for breathtaking photos.",
    specialPrice: 720,
    price: 780,
  },
  {
    image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    productName: "Samsung Galaxy S21",
    description:
      "Experience the brilliance of the Samsung Galaxy S21 with its vibrant AMOLED display, powerful camera, and sleek design that fits perfectly in your hand.",
    specialPrice: 699,
    price: 799,
  },
  {
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    productName: "Google Pixel 6",
    description:
      "The Google Pixel 6 boasts cutting-edge AI features, exceptional photo quality, and a stunning display, making it a perfect choice for Android enthusiasts.",
    price: 599,
    specialPrice: 400,
  },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* About Us Heading */}
      <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
        About us
      </h1>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-lg mb-4">
            Welcome to our e-commerce store! We are dedicated to provide the
            best products and services to our customers. Our mission is to
            offer a seamless shopping experience while ensuring the highest
            quality of our offerings.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={team}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Our Products Section */}
      <div className="py-7 space-y-8">
        <h1 className="text-slate-800 text-4xl font-bold text-center mb-10">
          Our Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              productName={product.productName}
              description={product.description}
              specialPrice={product.specialPrice}
              price={product.price}
              about
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
