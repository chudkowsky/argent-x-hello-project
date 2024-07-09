export const ABI = [
  {
    "type": "impl",
    "name": "HelloStarknetImpl",
    "interface_name": "hello_contract::IHelloStarknet"
  },
  {
    "type": "interface",
    "name": "hello_contract::IHelloStarknet",
    "items": [
      {
        "type": "function",
        "name": "increase_balance",
        "inputs": [
          {
            "name": "amount",
            "type": "core::felt252"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_balance",
        "inputs": [],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      }
    ]
  },
  {
    "type": "event",
    "name": "hello_contract::HelloStarknet::Event",
    "kind": "enum",
    "variants": []
  }
] as const;
