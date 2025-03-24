import 'package:flutter/material.dart';
import 'package:item/models/item.dart';

class ItemProvider with ChangeNotifier {
  final List<Item> _items = [
    Item(
      id: '1',
      name: "Organic Apples",
      description: "Crisp, sweet organic apples from local farms",
      price: 4.99,
      imageUrl:
          'https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D',
      rating: 4.8,
      reviews: 235,
      category: 'Fruits',
    ),
    Item(
      id: '2',
      name: "Bananas",
      description: "Fresh yellow bananas rich in potassium",
      price: 1.99,
      imageUrl:
          'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hc3xlbnwwfHwwfHx8MA%3D%3D',
      rating: 4.5,
      reviews: 189,
      category: 'Fruits',
    ),
  ];

  List<Item> get items => _items;
}
