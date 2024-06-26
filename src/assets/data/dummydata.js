export const productData = {
  product: {
    id: "12345",
    name: "Elegant Maxi Dress",
    description: "A beautiful and flowing maxi dress perfect for any occasion.",
    price: 79.99,
    currency: "USD",
    styleCode: "EMD001",
    sizes: [
      { size: "S", quantity: 10 },
      { size: "M", quantity: 15 },
      { size: "L", quantity: 5 },
      { size: "XL", quantity: 2 },
    ],
    colors: [
      { colorName: "Red", hex: "#FF0000" },
      { colorName: "Blue", hex: "#0000FF" },
      { colorName: "Black", hex: "#000000" },
    ],
    rating: {
      average: 4.5,
      count: 120,
    },
    reviews: [
      {
        reviewId: "r1",
        customerId: "c1",
        customerName: "Jane Doe",
        rating: 5,
        comment: "Absolutely love this dress! Perfect fit and great quality.",
        date: "2024-06-20",
      },
      {
        reviewId: "r2",
        customerId: "c2",
        customerName: "Mary Smith",
        rating: 4,
        comment: "Beautiful dress but slightly long for my height.",
        date: "2024-06-18",
      },
    ],
    customerLinkedPosts: [
      {
        postId: "p1",
        customerId: "c1",
        imageURL: "http://example.com/images/post1.jpg",
        caption: "Wearing my favorite dress at the beach!",
      },
      {
        postId: "p2",
        customerId: "c2",
        imageURL: "http://example.com/images/post2.jpg",
        caption: "Elegant dress for a summer wedding.",
      },
    ],
    availability: "In Stock",
    tags: ["maxi dress", "summer", "elegant", "formal"],
    category: "Dresses",
    brand: "Fashionista",
    material: "Polyester",
    careInstructions: "Machine wash cold, tumble dry low",
    additionalImages: [
      "http://example.com/images/dress1.jpg",
      "http://example.com/images/dress2.jpg",
    ],
    relatedProducts: [
      { productId: "67890", productName: "Stylish Midi Dress" },
      { productId: "11121", productName: "Casual Sundress" },
    ],
    dateAdded: "2024-05-01",
    lastUpdated: "2024-06-15",
  },
};
