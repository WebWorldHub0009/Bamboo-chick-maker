// ✅ Import your product images
import bambooJafhari from "../assets/product/jaf.jpg";
import dwali from "../assets/product/dchick.jpg"
import kabutar from "../assets/product/pigeon.jpg"
import roller from "../assets/product/pigeon.jpg"
import bambo from "../assets/product/hut.jpg"
import fchick from "../assets/product/fchick.jpg"

// ✅ Extra 5 premium products
import garden from "../assets/service/bcos.jpg";
import shade from "../assets/service/cb.jpg";
import patio from "../assets/service/zb.jpg";
import eco from "../assets/service/bc.jpg";
import designer from "../assets/service/bod.jpg";

const bambooServicesData = [
  {
    id: 1,
    slug: "bamboo-jafhari",
    name: "Bamboo Jafhari",
    heading: "Durable Bamboo Jafhari for Strong and Lasting Construction",
    quote: "Traditional strength crafted from nature’s best.",
    image: bambooJafhari,
    overview:
      "Bamboo Jafhari offers exceptional strength and reliability, making it ideal for outdoor enclosures, farms, and construction sites. Each panel is handcrafted with durable bamboo canes, ensuring long-lasting performance against weather elements while maintaining a natural, earthy aesthetic for your space.",
    features: [
      "Made from premium-grade natural bamboo",
      "Highly durable and weather-resistant",
      "Ideal for fencing and outdoor structures",
      "Eco-friendly and sustainable material",
    ],
    faqs: [
      {
        q: "Is Bamboo Jafhari suitable for outdoor use?",
        a: "Yes, it’s designed to withstand sunlight, rain, and other outdoor elements.",
      },
      {
        q: "Can it be customized in height and length?",
        a: "Absolutely! We provide custom sizing to match your project needs.",
      },
    ],
    cta: "Enquire Now",
  },
  {
    id: 2,
    slug: "design-wali-chick",
    name: "Design Wali Chick",
    heading: "Elegant Design Wali Chick for Stylish Interiors",
    quote: "Artistry and function woven beautifully together.",
    image: dwali,
    overview:
      "The Design Wali Chick blends creativity with craftsmanship, featuring artistic patterns that elevate the charm of any room or balcony. These elegant blinds add a decorative flair while controlling sunlight and providing privacy, making them perfect for modern and traditional spaces alike.",
    features: [
      "Decorative handwoven patterns",
      "Perfect for indoor and semi-outdoor areas",
      "Easy to roll up and maintain",
      "Available in multiple colors and designs",
    ],
    faqs: [
      {
        q: "Can I use these indoors and outdoors?",
        a: "Yes, they are suitable for both indoor and semi-outdoor spaces.",
      },
      {
        q: "Are they easy to clean?",
        a: "Simply dust them regularly or use a soft cloth for light cleaning.",
      },
    ],
    cta: "Enquire Now",
  },
  {
    id: 3,
    slug: "kabutar-jali",
    name: "Kabutar Jali",
    heading: "Protective Kabutar Jali for Bird Safety and Ventilation",
    quote: "Protection and air circulation in perfect balance.",
    image: kabutar,
    overview:
      "Kabutar Jali provides an effective solution to keep birds safe and secure while allowing excellent airflow. Built with high-quality materials and sturdy design, this jali is perfect for poultry farms, terraces, and open balconies where ventilation and protection go hand in hand.",
    features: [
      "Ensures proper ventilation and light flow",
      "Durable, rust-free construction",
      "Safe for birds and pets",
      "Easy to install and maintain",
    ],
    faqs: [
      {
        q: "Can it be used for balconies?",
        a: "Yes, it’s perfect for protecting balconies from bird intrusion.",
      },
      {
        q: "Is it safe for birds?",
        a: "Absolutely, the design ensures comfort and safety for birds.",
      },
    ],
    cta: "Enquire Now",
  },
  {
    id: 4,
    slug: "roller-blind",
    name: "Roller Blind",
    heading: "Modern Roller Blinds for Contemporary Interiors",
    quote: "Smooth control meets refined aesthetics.",
    image: roller,
    overview:
      "Our Roller Blinds are designed to deliver modern style and smooth functionality. Crafted from durable fabric and bamboo combinations, they offer precise control over light and privacy while enhancing the elegance of homes, offices, or showrooms with a minimalist touch.",
    features: [
      "Simple and elegant roller mechanism",
      "Light and privacy control",
      "Long-lasting and easy to maintain",
      "Available in various textures and shades",
    ],
    faqs: [
      {
        q: "Do these come with an auto-roll option?",
        a: "Yes, both manual and motorized options are available.",
      },
      {
        q: "Can roller blinds handle sunlight exposure?",
        a: "Yes, they are UV-protected and fade-resistant.",
      },
    ],
    cta: "Enquire Now",
  },
  {
    id: 5,
    slug: "bamboo-huts",
    name: "Bamboo Huts",
    heading: "Eco-Friendly Bamboo Huts for Outdoor Living",
    quote: "Nature’s architecture, built to inspire relaxation.",
    image: bambo,
    overview:
      "Bamboo Huts provide a serene and natural aesthetic perfect for resorts, gardens, and farms. Designed with eco-friendly materials, these huts ensure durability, insulation, and a unique tropical charm that blends luxury and simplicity effortlessly.",
    features: [
      "Handcrafted with treated bamboo",
      "Resistant to rain and sunlight",
      "Customizable design and size",
      "Ideal for resorts, gardens, and farms",
    ],
    faqs: [
      {
        q: "Are these huts waterproof?",
        a: "Yes, our huts are treated to withstand rain and moisture.",
      },
      {
        q: "Can I customize the design?",
        a: "Definitely! We create huts based on your layout and design needs.",
      },
    ],
    cta: "Enquire Now",
  },
  {
    id: 6,
    slug: "bird-net-fancy-chick-maker",
    name: "Bird Net & Fancy Chick Maker",
    heading: "Secure Bird Net & Fancy Chick Maker for Organized Spaces",
    quote: "Protect your flock with eco-smart solutions.",
    image: fchick,
    overview:
      "The Bird Net and Fancy Chick Maker ensure safety and order in bird farms or poultry setups. Made with eco-safe materials, they prevent unwanted intrusion, support proper airflow, and provide aesthetic appeal while maintaining hygienic conditions.",
    features: [
      "Eco-friendly and non-toxic material",
      "Strong mesh for durability",
      "Easy to install and wash",
      "Enhances safety and cleanliness",
    ],
    faqs: [
      {
        q: "Can it be used for home balconies?",
        a: "Yes, it’s perfect for keeping birds away while maintaining ventilation.",
      },
      {
        q: "Is the material long-lasting?",
        a: "Yes, it’s weatherproof and made for long-term usage.",
      },
    ],
    cta: "Enquire Now",
  },
  {
    id: 7,
    slug: "garden-bamboo-shades",
    name: "Garden Bamboo Shades",
    heading: "Beautiful Garden Bamboo Shades for Outdoor Elegance",
    quote: "Shade your garden the natural way.",
    image: garden,
    overview:
      "Garden Bamboo Shades are ideal for creating shaded zones that complement nature. Their natural color tone and handcrafted weave make them both decorative and functional — perfect for gardens, porches, and outdoor cafés needing aesthetic cooling solutions.",
    features: [
      "Protects against direct sunlight",
      "Adds natural elegance to outdoor spaces",
      "Customizable sizes and designs",
      "Durable for long-term outdoor use",
    ],
    faqs: [
      {
        q: "Do these shades block rain?",
        a: "They provide partial rain protection while allowing airflow.",
      },
      {
        q: "Can I roll them up easily?",
        a: "Yes, they come with smooth rolling functionality.",
      },
    ],
    cta: "Enquire Now",
  },
  {
    id: 8,
    slug: "pvc-bamboo-shade",
    name: "PVC Bamboo Shade",
    heading: "Weatherproof PVC Bamboo Shade for All Seasons",
    quote: "Durability meets eco-luxury.",
    image: shade,
    overview:
      "PVC Bamboo Shades are designed for year-round protection and style. With a combination of natural bamboo and synthetic PVC coating, they resist rain, heat, and UV exposure, making them a durable and modern choice for balconies, terraces, and shops.",
    features: [
      "Waterproof and UV-resistant coating",
      "Perfect for outdoor and semi-indoor spaces",
      "Low maintenance and long life",
      "Available in multiple designs and colors",
    ],
    faqs: [
      {
        q: "Do they fade in sunlight?",
        a: "No, they are UV-protected to maintain color for years.",
      },
      {
        q: "Is it heavy?",
        a: "No, the material is lightweight yet very strong.",
      },
    ],
    cta: "Enquire Now",
  },
  {
    id: 9,
    slug: "patio-chick-blinds",
    name: "Patio Chick Blinds",
    heading: "Stylish Patio Chick Blinds for Elegant Outdoors",
    quote: "Relax in shade and style.",
    image: patio,
    overview:
      "Patio Chick Blinds combine comfort and charm for your open-air areas. Built to control sunlight and add a cozy ambiance, they are ideal for patios, cafés, and verandas — delivering a refined natural look with handcrafted precision.",
    features: [
      "Provides ample shade and privacy",
      "Adds rustic charm to outdoor setups",
      "Easily rollable and lightweight",
      "Durable and handcrafted finish",
    ],
    faqs: [
      {
        q: "Are they suitable for commercial use?",
        a: "Yes, they’re perfect for cafés and outdoor lounges.",
      },
      {
        q: "Can I install them myself?",
        a: "Yes, installation is simple and DIY-friendly.",
      },
    ],
    cta: "Enquire Now",
  },
  {
    id: 10,
    slug: "eco-bamboo-partition",
    name: "Eco Bamboo Partition",
    heading: "Eco Bamboo Partition for Natural Privacy Solutions",
    quote: "Create serene spaces naturally.",
    image: eco,
    overview:
      "Eco Bamboo Partitions are sustainable dividers crafted for style and privacy. These handcrafted panels allow light flow while separating spaces gracefully, making them ideal for restaurants, offices, and eco-friendly homes.",
    features: [
      "Lightweight yet sturdy construction",
      "Natural bamboo finish for earthy aesthetics",
      "Custom sizing available",
      "Easy to install and reposition",
    ],
    faqs: [
      {
        q: "Can it be used as a movable divider?",
        a: "Yes, it’s designed for easy portability and setup.",
      },
      {
        q: "Does it require any maintenance?",
        a: "Minimal — just occasional cleaning with a soft cloth.",
      },
    ],
    cta: "Enquire Now",
  },
  {
    id: 11,
    slug: "designer-bamboo-ceiling",
    name: "Designer Bamboo Ceiling",
    heading: "Luxury Designer Bamboo Ceiling for Natural Interiors",
    quote: "Where design meets natural art.",
    image: designer,
    overview:
      "Designer Bamboo Ceilings elevate interiors with a sophisticated natural texture. Crafted with precision and treated for longevity, they enhance acoustics, add rustic charm, and bring a luxurious eco-vibe to your home or office.",
    features: [
      "Enhances visual and acoustic appeal",
      "Durable treated bamboo",
      "Perfect for homes, cafés, and resorts",
      "Custom finish and design options",
    ],
    faqs: [
      {
        q: "Is it suitable for indoor use?",
        a: "Yes, it’s perfect for both residential and commercial interiors.",
      },
      {
        q: "Does it resist moisture?",
        a: "Yes, it’s treated for humidity resistance and long life.",
      },
    ],
    cta: "Enquire Now",
  },
];

export default bambooServicesData;
