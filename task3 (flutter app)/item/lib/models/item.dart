class Item {
  final String id;
  final String name;
  final String description;
  final double price;
  final String imageUrl;
  final double rating;
  final int reviews;
  final String category;

  Item({
    required this.id,
    required this.name,
    required this.description,
    required this.price,
    required this.imageUrl,
    this.rating = 0.0,
    this.reviews = 0,
    required this.category,
  });
}