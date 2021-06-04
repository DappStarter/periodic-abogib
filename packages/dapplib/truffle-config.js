require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remain clump hunt deputy flat general'; 
let testAccounts = [
"0x087c248a4b5efc83c460f95479c42df87f0e0ea80d20fecdff4eb2818752e231",
"0x3f5eaf93c56e1684b22d66387051e06cd0f2e0f652e5d58afb6095cabc8448ad",
"0x3ce585676fd05bd65a1e006ad5464a5a0c65b7ae0540773b9e137b639ec6457d",
"0xfeba5a013c1361b3a0b422dbffdcf0421d48325982cc965ad5b5ee835fb14ca9",
"0x0459c213776cb5c6f39e473accd118826add9daab85e8516b5c93bf4e233668f",
"0x65e595613b76e05e1d67245910369f45281b76ded20f14c9ac247b1771f8cdd1",
"0x5eb92adeb769046e803debc9d4ced73bf1f22951279f3bf2cc30014286e79fef",
"0x6621f78e7d556fa55858c7a4ea5a613883fea5f75cef47763b93f2be3825542f",
"0x39e5ed30572b18e7eecf4cf99af555f839c4bdf3678124966ea7e1db2638dce2",
"0xe64bd9b4fb4174808fff65e87c69628ce1523d902cb5c4901a8c5543e7b5b0e5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

