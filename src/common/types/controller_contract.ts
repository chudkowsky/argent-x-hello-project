export const ABI = [
  {
    "type": "impl",
    "name": "AccountImpl",
    "interface_name": "controller::account::IAccount"
  },
  {
    "type": "struct",
    "name": "core::array::Span::<core::felt252>",
    "members": [
      {
        "name": "snapshot",
        "type": "@core::array::Array::<core::felt252>"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::starknet::account::Call",
    "members": [
      {
        "name": "to",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "selector",
        "type": "core::felt252"
      },
      {
        "name": "calldata",
        "type": "core::array::Span::<core::felt252>"
      }
    ]
  },
  {
    "type": "interface",
    "name": "controller::account::IAccount",
    "items": [
      {
        "type": "function",
        "name": "__validate__",
        "inputs": [
          {
            "name": "calls",
            "type": "core::array::Array::<core::starknet::account::Call>"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "__execute__",
        "inputs": [
          {
            "name": "calls",
            "type": "core::array::Array::<core::starknet::account::Call>"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<core::array::Span::<core::felt252>>"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "is_valid_signature",
        "inputs": [
          {
            "name": "hash",
            "type": "core::felt252"
          },
          {
            "name": "signature",
            "type": "core::array::Array::<core::felt252>"
          }
        ],
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
    "type": "impl",
    "name": "CartridgeAccountImpl",
    "interface_name": "controller::account::ICartridgeAccount"
  },
  {
    "type": "struct",
    "name": "controller_auth::signer::StarknetSigner",
    "members": [
      {
        "name": "pubkey",
        "type": "core::zeroable::NonZero::<core::felt252>"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::starknet::eth_address::EthAddress",
    "members": [
      {
        "name": "address",
        "type": "core::felt252"
      }
    ]
  },
  {
    "type": "struct",
    "name": "controller_auth::signer::Secp256k1Signer",
    "members": [
      {
        "name": "pubkey_hash",
        "type": "core::starknet::eth_address::EthAddress"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::array::Span::<core::integer::u8>",
    "members": [
      {
        "name": "snapshot",
        "type": "@core::array::Array::<core::integer::u8>"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::integer::u256",
    "members": [
      {
        "name": "low",
        "type": "core::integer::u128"
      },
      {
        "name": "high",
        "type": "core::integer::u128"
      }
    ]
  },
  {
    "type": "struct",
    "name": "controller_auth::signer::WebauthnSigner",
    "members": [
      {
        "name": "origin",
        "type": "core::array::Span::<core::integer::u8>"
      },
      {
        "name": "rp_id_hash",
        "type": "core::zeroable::NonZero::<core::integer::u256>"
      },
      {
        "name": "pubkey",
        "type": "core::zeroable::NonZero::<core::integer::u256>"
      }
    ]
  },
  {
    "type": "enum",
    "name": "controller_auth::signer::Signer",
    "variants": [
      {
        "name": "Starknet",
        "type": "controller_auth::signer::StarknetSigner"
      },
      {
        "name": "Secp256k1",
        "type": "controller_auth::signer::Secp256k1Signer"
      },
      {
        "name": "Webauthn",
        "type": "controller_auth::signer::WebauthnSigner"
      },
      {
        "name": "Unimplemented",
        "type": "()"
      }
    ]
  },
  {
    "type": "enum",
    "name": "core::option::Option::<controller_auth::signer::Signer>",
    "variants": [
      {
        "name": "Some",
        "type": "controller_auth::signer::Signer"
      },
      {
        "name": "None",
        "type": "()"
      }
    ]
  },
  {
    "type": "interface",
    "name": "controller::account::ICartridgeAccount",
    "items": [
      {
        "type": "function",
        "name": "__validate_declare__",
        "inputs": [
          {
            "name": "class_hash",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "__validate_deploy__",
        "inputs": [
          {
            "name": "class_hash",
            "type": "core::felt252"
          },
          {
            "name": "contract_address_salt",
            "type": "core::felt252"
          },
          {
            "name": "owner",
            "type": "controller_auth::signer::Signer"
          },
          {
            "name": "guardian",
            "type": "core::option::Option::<controller_auth::signer::Signer>"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "external"
      }
    ]
  },
  {
    "type": "impl",
    "name": "UserAccountImpl",
    "interface_name": "controller::account::IUserAccount"
  },
  {
    "type": "struct",
    "name": "controller_auth::signer::StarknetSignature",
    "members": [
      {
        "name": "r",
        "type": "core::felt252"
      },
      {
        "name": "s",
        "type": "core::felt252"
      }
    ]
  },
  {
    "type": "enum",
    "name": "core::bool",
    "variants": [
      {
        "name": "False",
        "type": "()"
      },
      {
        "name": "True",
        "type": "()"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::starknet::secp256_trait::Signature",
    "members": [
      {
        "name": "r",
        "type": "core::integer::u256"
      },
      {
        "name": "s",
        "type": "core::integer::u256"
      },
      {
        "name": "y_parity",
        "type": "core::bool"
      }
    ]
  },
  {
    "type": "struct",
    "name": "controller_auth::webauthn::WebauthnAssertion",
    "members": [
      {
        "name": "authenticator_data",
        "type": "core::array::Span::<core::integer::u8>"
      },
      {
        "name": "client_data_json",
        "type": "core::array::Span::<core::integer::u8>"
      },
      {
        "name": "signature",
        "type": "core::starknet::secp256_trait::Signature"
      },
      {
        "name": "type_offset",
        "type": "core::integer::u32"
      },
      {
        "name": "challenge_offset",
        "type": "core::integer::u32"
      },
      {
        "name": "challenge_length",
        "type": "core::integer::u32"
      },
      {
        "name": "origin_offset",
        "type": "core::integer::u32"
      },
      {
        "name": "origin_length",
        "type": "core::integer::u32"
      }
    ]
  },
  {
    "type": "enum",
    "name": "controller_auth::signer::SignerSignature",
    "variants": [
      {
        "name": "Starknet",
        "type": "(controller_auth::signer::StarknetSigner, controller_auth::signer::StarknetSignature)"
      },
      {
        "name": "Secp256k1",
        "type": "(controller_auth::signer::Secp256k1Signer, core::starknet::secp256_trait::Signature)"
      },
      {
        "name": "Webauthn",
        "type": "(controller_auth::signer::WebauthnSigner, controller_auth::webauthn::WebauthnAssertion)"
      },
      {
        "name": "Unimplemented",
        "type": "()"
      }
    ]
  },
  {
    "type": "enum",
    "name": "controller_auth::signer::SignerType",
    "variants": [
      {
        "name": "Starknet",
        "type": "()"
      },
      {
        "name": "Secp256k1",
        "type": "()"
      },
      {
        "name": "Webauthn",
        "type": "()"
      },
      {
        "name": "Unimplemented",
        "type": "()"
      }
    ]
  },
  {
    "type": "interface",
    "name": "controller::account::IUserAccount",
    "items": [
      {
        "type": "function",
        "name": "change_owner",
        "inputs": [
          {
            "name": "signer_signature",
            "type": "controller_auth::signer::SignerSignature"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_owner",
        "inputs": [],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_owner_type",
        "inputs": [],
        "outputs": [
          {
            "type": "controller_auth::signer::SignerType"
          }
        ],
        "state_mutability": "view"
      }
    ]
  },
  {
    "type": "impl",
    "name": "UpgradeableImpl",
    "interface_name": "openzeppelin::upgrades::interface::IUpgradeable"
  },
  {
    "type": "interface",
    "name": "openzeppelin::upgrades::interface::IUpgradeable",
    "items": [
      {
        "type": "function",
        "name": "upgrade",
        "inputs": [
          {
            "name": "new_class_hash",
            "type": "core::starknet::class_hash::ClassHash"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      }
    ]
  },
  {
    "type": "impl",
    "name": "SessionImpl",
    "interface_name": "controller::session::interface::ISession"
  },
  {
    "type": "struct",
    "name": "controller::session::interface::Session",
    "members": [
      {
        "name": "expires_at",
        "type": "core::integer::u64"
      },
      {
        "name": "allowed_methods_root",
        "type": "core::felt252"
      },
      {
        "name": "metadata_hash",
        "type": "core::felt252"
      },
      {
        "name": "session_key_guid",
        "type": "core::felt252"
      }
    ]
  },
  {
    "type": "interface",
    "name": "controller::session::interface::ISession",
    "items": [
      {
        "type": "function",
        "name": "revoke_session",
        "inputs": [
          {
            "name": "session_hash",
            "type": "core::felt252"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "register_session",
        "inputs": [
          {
            "name": "session",
            "type": "controller::session::interface::Session"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "is_session_revoked",
        "inputs": [
          {
            "name": "session_hash",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "core::bool"
          }
        ],
        "state_mutability": "view"
      }
    ]
  },
  {
    "type": "impl",
    "name": "ExecuteFromOutside",
    "interface_name": "controller::outside_execution::interface::IOutsideExecution"
  },
  {
    "type": "struct",
    "name": "core::array::Span::<core::starknet::account::Call>",
    "members": [
      {
        "name": "snapshot",
        "type": "@core::array::Array::<core::starknet::account::Call>"
      }
    ]
  },
  {
    "type": "struct",
    "name": "controller::outside_execution::interface::OutsideExecution",
    "members": [
      {
        "name": "caller",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "nonce",
        "type": "core::felt252"
      },
      {
        "name": "execute_after",
        "type": "core::integer::u64"
      },
      {
        "name": "execute_before",
        "type": "core::integer::u64"
      },
      {
        "name": "calls",
        "type": "core::array::Span::<core::starknet::account::Call>"
      }
    ]
  },
  {
    "type": "interface",
    "name": "controller::outside_execution::interface::IOutsideExecution",
    "items": [
      {
        "type": "function",
        "name": "execute_from_outside_v2",
        "inputs": [
          {
            "name": "outside_execution",
            "type": "controller::outside_execution::interface::OutsideExecution"
          },
          {
            "name": "signature",
            "type": "core::array::Span::<core::felt252>"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<core::array::Span::<core::felt252>>"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "is_valid_outside_execution_nonce",
        "inputs": [
          {
            "name": "nonce",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "core::bool"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_outside_execution_message_hash_rev_1",
        "inputs": [
          {
            "name": "outside_execution",
            "type": "controller::outside_execution::interface::OutsideExecution"
          }
        ],
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
    "type": "impl",
    "name": "ExternalOwners",
    "interface_name": "controller::external_owners::interface::IExternalOwners"
  },
  {
    "type": "interface",
    "name": "controller::external_owners::interface::IExternalOwners",
    "items": [
      {
        "type": "function",
        "name": "register_external_owner",
        "inputs": [
          {
            "name": "external_owner_address",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "remove_external_owner",
        "inputs": [
          {
            "name": "external_owner_address",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "is_registered_external_owner",
        "inputs": [
          {
            "name": "external_owner_address",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::bool"
          }
        ],
        "state_mutability": "view"
      }
    ]
  },
  {
    "type": "impl",
    "name": "DelegateAccount",
    "interface_name": "controller::delegate_account::interface::IDelegateAccount"
  },
  {
    "type": "interface",
    "name": "controller::delegate_account::interface::IDelegateAccount",
    "items": [
      {
        "type": "function",
        "name": "set_delegate_account",
        "inputs": [
          {
            "name": "delegate_address",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "delegate_account",
        "inputs": [],
        "outputs": [
          {
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "state_mutability": "view"
      }
    ]
  },
  {
    "type": "impl",
    "name": "SRC5",
    "interface_name": "controller::src5::ISRC5"
  },
  {
    "type": "interface",
    "name": "controller::src5::ISRC5",
    "items": [
      {
        "type": "function",
        "name": "supports_interface",
        "inputs": [
          {
            "name": "interface_id",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "core::bool"
          }
        ],
        "state_mutability": "view"
      }
    ]
  },
  {
    "type": "constructor",
    "name": "constructor",
    "inputs": [
      {
        "name": "owner",
        "type": "controller_auth::signer::Signer"
      },
      {
        "name": "guardian",
        "type": "core::option::Option::<controller_auth::signer::Signer>"
      }
    ]
  },
  {
    "type": "event",
    "name": "controller::account::CartridgeAccount::OwnerChanged",
    "kind": "struct",
    "members": [
      {
        "name": "new_owner",
        "type": "core::felt252",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "controller::account::CartridgeAccount::OwnerChangedGuid",
    "kind": "struct",
    "members": [
      {
        "name": "new_owner_guid",
        "type": "core::felt252",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "controller::account::CartridgeAccount::SignerLinked",
    "kind": "struct",
    "members": [
      {
        "name": "signer_guid",
        "type": "core::felt252",
        "kind": "key"
      },
      {
        "name": "signer",
        "type": "controller_auth::signer::Signer",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "controller::session::lib::session_component::SessionRevoked",
    "kind": "struct",
    "members": [
      {
        "name": "session_hash",
        "type": "core::felt252",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "controller::session::lib::session_component::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "SessionRevoked",
        "type": "controller::session::lib::session_component::SessionRevoked",
        "kind": "nested"
      }
    ]
  },
  {
    "type": "event",
    "name": "controller::external_owners::external_owners::external_owners_component::ExternalOwnerRegistered",
    "kind": "struct",
    "members": [
      {
        "name": "address",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "controller::external_owners::external_owners::external_owners_component::ExternalOwnerRemoved",
    "kind": "struct",
    "members": [
      {
        "name": "address",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "controller::external_owners::external_owners::external_owners_component::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "ExternalOwnerRegistered",
        "type": "controller::external_owners::external_owners::external_owners_component::ExternalOwnerRegistered",
        "kind": "nested"
      },
      {
        "name": "ExternalOwnerRemoved",
        "type": "controller::external_owners::external_owners::external_owners_component::ExternalOwnerRemoved",
        "kind": "nested"
      }
    ]
  },
  {
    "type": "event",
    "name": "controller::outside_execution::outside_execution::outside_execution_component::Event",
    "kind": "enum",
    "variants": []
  },
  {
    "type": "event",
    "name": "controller::delegate_account::delegate_account::delegate_account_component::DelegateAccountChanged",
    "kind": "struct",
    "members": [
      {
        "name": "address",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "controller::delegate_account::delegate_account::delegate_account_component::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "DelegateAccountChanged",
        "type": "controller::delegate_account::delegate_account::delegate_account_component::DelegateAccountChanged",
        "kind": "nested"
      }
    ]
  },
  {
    "type": "event",
    "name": "controller::src5::src5_component::Event",
    "kind": "enum",
    "variants": []
  },
  {
    "type": "event",
    "name": "openzeppelin::upgrades::upgradeable::UpgradeableComponent::Upgraded",
    "kind": "struct",
    "members": [
      {
        "name": "class_hash",
        "type": "core::starknet::class_hash::ClassHash",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin::upgrades::upgradeable::UpgradeableComponent::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "Upgraded",
        "type": "openzeppelin::upgrades::upgradeable::UpgradeableComponent::Upgraded",
        "kind": "nested"
      }
    ]
  },
  {
    "type": "event",
    "name": "controller::account::CartridgeAccount::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "OwnerChanged",
        "type": "controller::account::CartridgeAccount::OwnerChanged",
        "kind": "nested"
      },
      {
        "name": "OwnerChangedGuid",
        "type": "controller::account::CartridgeAccount::OwnerChangedGuid",
        "kind": "nested"
      },
      {
        "name": "SignerLinked",
        "type": "controller::account::CartridgeAccount::SignerLinked",
        "kind": "nested"
      },
      {
        "name": "SessionEvent",
        "type": "controller::session::lib::session_component::Event",
        "kind": "flat"
      },
      {
        "name": "ExternalOwnersEvent",
        "type": "controller::external_owners::external_owners::external_owners_component::Event",
        "kind": "flat"
      },
      {
        "name": "ExecuteFromOutsideEvents",
        "type": "controller::outside_execution::outside_execution::outside_execution_component::Event",
        "kind": "flat"
      },
      {
        "name": "DelegateAccountEvents",
        "type": "controller::delegate_account::delegate_account::delegate_account_component::Event",
        "kind": "flat"
      },
      {
        "name": "SRC5Events",
        "type": "controller::src5::src5_component::Event",
        "kind": "flat"
      },
      {
        "name": "UpgradeableEvent",
        "type": "openzeppelin::upgrades::upgradeable::UpgradeableComponent::Event",
        "kind": "flat"
      }
    ]
  }
] as const;
