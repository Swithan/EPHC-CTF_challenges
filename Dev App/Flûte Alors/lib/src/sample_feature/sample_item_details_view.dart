import 'package:flutter/material.dart';

/// Displays detailed information about a SampleItem.
class SampleItemDetailsView extends StatelessWidget {
  const SampleItemDetailsView({Key? key}) : super(key: key);

  static const routeName = '/sample_item';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Item Details'),
      ),
      body: const Center(
        child: Text('Nothing here'),
      ),
    );
  }
}

class IpItemDetailsView extends StatelessWidget {
  const IpItemDetailsView({Key? key}) : super(key: key);

  static const routeName = '/sample_item_ip';

  @override
  Widget build(BuildContext context) {
    final args = ModalRoute.of(context)!.settings.arguments;
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'You found a part of the IP',
          style: TextStyle(color: Colors.blue),
        ),
      ),
      body: Center(
        child: Text('You found part $args of the IP',
            style: const TextStyle(color: Colors.white)),
      ),
    );
  }
}

class SampleItemDetailView extends StatelessWidget {
  const SampleItemDetailView({Key? key}) : super(key: key);

  static const routeName = '/sample_item_flag';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'flag{Be1Ter_tHAn_r3aCt}',
          style: TextStyle(color: Colors.blue),
        ),
      ),
      body: const Center(
        child: Text('Nothing here'),
      ),
    );
  }
}
