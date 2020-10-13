require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind hole grace infant flat taxi'; 
let testAccounts = [
"0x1fc5f50d2833a94fa4a53da9a907ca58a46b0c951555cb2e1e87862d177fb831",
"0x7ce297910fa08b0ce7833f2854912fb777d9c8b2e5a09326dad356c4e4d29fdf",
"0x7124b27faed43065cc3d3f4b084fe87b399ec58ecb3e903e229102242d5d3ebd",
"0x6e34c22bbb0a1b68cf1ee05e0ab406dcb980ff0b21079deb21a7cdff0cab5d9e",
"0xeea25549e5efbf4bab70fd0d89bc274b8805deb5af7b60e9170e748585ba705f",
"0x72035e6517b0e1e65039a3e3a1b45497f130013c566b5fbf9f3cd28ac62adea0",
"0x49d7c40a8143c5cfbc80429ed356860ad5077a00ea00a08bfaa856697f7a70a1",
"0xd15b392ab3a8598a0201b0d56a5cbd0ace3ce4cdc9acd6190652c9b2799e13fd",
"0xf541c023a8811a1b60b253b5e58e7edfc1c25e87e91833a77f11cb743821b0b3",
"0x4435cea630717615742840f0379d85706a790e57df2b66a8ae99b77e1df36b27"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
