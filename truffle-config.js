// Allows us to use ES6 in our migrations and tests.
require('babel-register')
// const HDWalletProvider = require("truffle-hdwallet-provider");
const HDWalletProvider = require('@truffle/hdwallet-provider')
require("dotenv").config();
module.exports = {
    networks: {
        goerli: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    process.env.PROJECT_ENDPOINT,
                    address_index=0,
                    num_addresses=2
                );
            },
            network_id: 4,
            gas: 4500000,
            gasPrice: 10000000000,
        },
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        compilers: {
            solc: {
                version: "^0.5.0",
            },
        },
    },
};

// require('dotenv').config()
// module.exports = {
//   networks: {
//     goerli: {
//       provider: function () {
//         return new HDWalletProvider(
//           process.env.MNEMONIC,
//           process.env.PROJECT_ENDPOINT,
//           (address_index = 0),
//           (num_addresses = 2),
//         )
//       },
//       network_id: 4,
//       // gas: 4500000,
//       // gasPrice: 10000000000,
//     },
//     development: {
//       host: process.env.LOCAL_ENDPOINT.split(':')[1].slice(2),
//       port: process.env.LOCAL_ENDPOINT.split(':')[2],
//       network_id: '*',
//     },
//     compilers: {
//       solc: {
//         version: '^0.4.24',
//       },
//     },
//   },
// }

// require('babel-register');
// // const HDWalletProvider = require("truffle-hdwallet-provider");
// const HDWalletProvider = require("@truffle/hdwallet-provider");
// require('dotenv').config();

// const mnemonicPhrase = process.env.MNEMONIC;
// const localEndpoint = process.env.LOCAL_ENDPOINT;
// const projectEndpoint = "https://goerli.infura.io/v3/cce41680f86e4d969d4041250683881c";
// const networkId = process.env.NETWORK_ID;

// module.exports = {
//   networks: {
//     goerli: {
//       provider: function() {
//         return new HDWalletProvider({
//           mnemonic: {
//             phrase: mnemonicPhrase
//           },
//           providerOrUrl: projectEndpoint,
//           addressIndex: 0,
//           numberOfAddresses: 2
//         });
//       },
//       network_id: networkId,
//       gas: 8000000,
//       gasPrice: 1000000000
//     },
//     development: {
//       host: localEndpoint.split(':')[1].slice(2),
//       port: localEndpoint.split(':')[2],
//       network_id: '*'
//     }
//   },
//   compilers: {
//     solc: {
//       version: '^0.5.0'
//     }
//   }
// };
