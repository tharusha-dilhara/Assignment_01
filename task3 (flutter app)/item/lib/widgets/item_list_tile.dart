import 'package:flutter/material.dart';
import '../models/item.dart';

class ItemListTile extends StatelessWidget {
  final Item item;
  final VoidCallback onTap;

  const ItemListTile({
    super.key,
    required this.item,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
      child: ListTile(
        contentPadding: const EdgeInsets.all(16),
        leading: ClipRRect(
          borderRadius: BorderRadius.circular(8),
          child: Image.network(
            item.imageUrl,
            width: 80,
            height: 80,
            fit: BoxFit.cover,
            errorBuilder: (ctx, error, stackTrace) => const Icon(Icons.error),
          ),
        ),
        title: Text(
          item.name,
          style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
        ),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              '\$${item.price.toStringAsFixed(2)}',
              style: const TextStyle(
                color: Colors.green,
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Row(
              children: [
                Icon(Icons.star, color: Colors.amber[600], size: 16),
                Text(' ${item.rating.toStringAsFixed(1)}'),
                Text(' (${item.reviews} reviews)',
                    style: const TextStyle(color: Colors.grey)),
              ],
            ),
          ],
        ),
        trailing: const Icon(Icons.chevron_right),
        onTap: onTap,
      ),
    );
  }
}