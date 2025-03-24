import 'package:flutter/material.dart';
import 'package:item/providers/item_provider.dart';
import 'package:item/screens/details_screen.dart';
import 'package:item/widgets/item_list_tile.dart';
import 'package:provider/provider.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final itemProvider = Provider.of<ItemProvider>(context);
    return Scaffold(
      appBar: AppBar(
        title: const Text("E-Commerce App"),
        actions: [IconButton(icon: const Icon(Icons.search), onPressed: () {})],
      ),
      body: ListView.builder(
        itemCount: itemProvider.items.length,
        itemBuilder: (ctx, index) {
          final item = itemProvider.items[index];
          return ItemListTile(
            item: item,
            onTap:
                () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (ctx) => DetailsScreen(item: item),
                  ),
                ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.shopping_cart),
      ),
    );
  }
}
