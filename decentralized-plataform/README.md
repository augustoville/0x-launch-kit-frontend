# Land Decentralized

 This branch is 30 commits ahead, 1 commit behind VeriSafe:development.

## Land Dex

[![Chat with us on Discord](https://camo.githubusercontent.com/68e11ca9dd6710b207e1e39cd3c972f77fda91b2df9dc237ed64a473d40a703c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636861742d446973636f72642d626c756556696f6c65742e737667)](https://discord.gg/JqheZms) [![CircleCI](https://camo.githubusercontent.com/093f84b8ef4c0f3fe4c526e5308758ce780db8a955c1ce9f04569ece2065caee/68747470733a2f2f636972636c6563692e636f6d2f67682f307850726f6a6563742f30782d6c61756e63682d6b69742d66726f6e74656e642e7376673f7374796c653d737667)](https://circleci.com/gh/0xProject/0x-launch-kit-frontend) [![dependencies Status](https://camo.githubusercontent.com/1019a9fbd9a145b59575ad53d16eab0691ec5188cc2fb63a868459019b69606b/68747470733a2f2f64617669642d646d2e6f72672f76657269736166652f766572696465782f7374617475732e737667)](https://david-dm.org/verisafe/veridex) [![devDependencies Status](https://camo.githubusercontent.com/4486dd45d8b1dc99e17741e4f1742f1654bd08894472bf21867c84e4d54035b4/68747470733a2f2f64617669642d646d2e6f72672f76657269736166652f766572696465782f6465762d7374617475732e737667)](https://david-dm.org/verisafe/veridex?type=dev) [![Coverage Status](https://camo.githubusercontent.com/ef76c34bb708b9b772c849d2c3d11b5daaf1c20cb3739c917a086da09e6806e1/68747470733a2f2f636f766572616c6c732e696f2f7265706f732f6769746875622f56657269536166652f566572694465782f62616467652e7376673f6272616e63683d646576656c6f706d656e74)](https://coveralls.io/github/VeriSafe/VeriDex?branch=development)

This project is forked from [veridex](https://github/verisafe/veridex) and it have a goal to be the most complete open-source 0x based dex out there.

This repo ships with both an ERC-20 token trading interface and an ERC-721 marketplace interface.

To use this fork the following actions are required:

* Add ESH, SDEX, DESH and 0x as pairs
* Lets us know you are using this fork
* Add a Powered by 0x and Switch
* Don't use another pool associated with this code besides the one on: [Veridex Pool](https://0x.org/zrx/staking/pool/16). If you are market maker you can join Veridex market pool at [Join as Maker](https://dex.verisafe.io/#/erc20/join-as-maker)

### Dex Wizard

Please follow these instructions if you plan to use your own domain: [DEX on your domain](https://github.com/SwitchOS/switchdex/blob/development/ADD_DEX_BY_DOMAIN.md)

### Adding token

Please follow all the instructions here: [ADD TOKEN](https://github.com/SwitchOS/switchdex/blob/development/ADD_TOKEN.md)

### Adding token to launchpad

Please follow all the instructions here: [ADD TOKEN LAUNCHPAD](https://github.com/SwitchOS/switchdex/blob/development/ADD_TOKEN_LAUNCHPAD.md)

### Deployed DEX's

List of deployed dex's using forks of this source code:

* [VeriDex](https://dex.verisafe.io/)
* [0xChange](https://0xchange.verisafe.io/)
* [Belifex](https://dex-belifex.com/)

If you are using the source code of this fork, please let me know! Help the project adding ESH as a pair on your fork!

If you have the URL of an existing relayer, you can use this frontend against it. After installing the dependencies, start the application with this command, replacing `RELAYER_URL` and `RELAYER_WS_URL` with the proper value:

```text
REACT_APP_RELAYER_URL='https://RELAYER_URL/' REACT_APP_RELAYER_WS_URL='wss://RELAYER_URL/' yarn start
```

### Usage

Clone this repository and install its dependencies:

You can optionally pass in any relayer endpoint that complies with the [0x Standard Relayer API](https://github.com/0xProject/standard-relayer-api). For example, if you want to show liquidity from 0x API:

```text
REACT_APP_RELAYER_URL='https://api.0x.org/sra' REACT_APP_RELAYER_WS_URL='wss://api.0x.org/sra' REACT_APP_NETWORK_ID=1 REACT_APP_CHAIN_ID=1 yarn start
```

#### Creating a relayer for development

If you don't have a relayer, you can start one locally for development. First create a `docker-compose.yml` file like this:

```text
version: '3'
services:
    ganache:
        image: 0xorg/ganache-cli
        ports:
            - '8545:8545'
    backend:
        image: 0xorg/launch-kit-backend:latest
        environment:
            HTTP_PORT: '3000'
            NETWORK_ID: '50'
            CHAIN_ID: '1337'
            WHITELIST_ALL_TOKENS: 'true'
            FEE_RECIPIENT: '0x0000000000000000000000000000000000000001'
            MAKER_FEE_UNIT_AMOUNT: '0'
            TAKER_FEE_UNIT_AMOUNT: '0'
            MESH_ENDPOINT: 'ws://mesh:60557'
        ports:
            - '3000:3000'
    mesh:
        image: 0xorg/mesh:7.2.1-beta-0xv3
        environment:
            ETHEREUM_RPC_URL: 'http://ganache:8545'
            ETHEREUM_CHAIN_ID: 1337
            VERBOSITY: 3
            RPC_ADDR: 'mesh:60557'
            # You can decrease the BLOCK_POLLING_INTERVAL for test networks to
            # improve performance. See https://0x-org.gitbook.io/mesh/ for more
            # Documentation about Mesh and its environment variables.
            BLOCK_POLLING_INTERVAL: '5s'
        ports:
            - '60557:60557'
            - '60558:60558'
            - '60559:60559'
```

and then run `docker-compose up`. This will create three containers: one has a ganache with the 0x contracts deployed and some test tokens, another one has an instance of the [launch kit](https://github.com/0xProject/0x-launch-kit) implementation of a relayer that connects to that ganache and finally a container for [0x-mesh](https://github.com/0xProject/0x-mesh) for order sharing and discovery on a p2p network.

After starting those containers, you can run the following in another terminal. A browser tab will open in the `http://localhost:3001` address. You'll need to connect MetaMask to `localhost:8545`.

```text
REACT_APP_RELAYER_URL='http://localhost:3000/v3' REACT_APP_RELAYER_WS_URL='ws://localhost:3000' yarn start
```

```text
git clone git@github.com:SwitchOS/veridex.git
cd Veridex
yarn
```

### TODO

This is a detailed list of planned features to add to this DEX \(includes Switch backend\) on long term:

*  List Dex Trades
*  Add troll box using ChatBro
*  Fully configuration of orderbook and sell and buy cards
*  Support multiple wallets, like Portis, Torus etc please see list of planned wallets below,
*  Add mobile support
*  Support to transfer tokens
*  Display prices and total holdings on wallet
*  Display median price
*  Add notifications
*  List descriptions for each project
*  List Market Trades
*  List Markets stats
*  List last prices for each token
*  Add Fiat on Ramp
*  Add 0x Instant to easy buy of assets
*  Adding graphs like Trading View
*  Support for mobile dapp browswers like Enjin and Coinbase
*  Mobile friendly
*  Connect to 0x mesh
*  Adding Account market stats
*  Click on buy and sell button to auto-fill
*  Create a costumized front page
*  Order Matching on the Frontend when doing limit orders
*  Page for trading competitions
*  Add instant as standalone
*  Code splitting
*  Report data to the most known crypto data aggregators \(In progress\)
*  Theme switcher
*  Dex Wizard
*  Upgrade 0x v3
*  [i18n](https://github.com/i18next/react-i18next)
*  Add [tour](https://github.com/elrumordelaluz/reactour)
*  Add crypto price calculator
*  Add Swap interface

### IDEAS FOR COMMUNITY DEVELOPERS

This is some ideas that community devs could work to add value to this dex on long term.

* \[\] Create simple swap interface with support for meta transactions Eg [Meta](https://0x.org/docs/guides/unlocking-meta-transaction-swaps)
* \[\] Add Token factory
* \[\] Wizard for Marketplace

### Planned Wallets Support

*  [Metamask](https://metamask.io/)
*  [Torus](https://docs.tor.us/developers/getting-started)
*  [Portis](https://developers.portis.io/)
*  [Fortmatic](https://developers.fortmatic.com/)
*  [WalletConnect](https://docs.walletconnect.org/)
*  [EnjinWallet](https://enjin.io/products/wallet)
*  [CoinbaseWallet](https://wallet.coinbase.com/)
*  [TrustWallet](https://trustwallet.com/)
*  [CipherBrowser](https://www.cipherbrowser.com/)

#### Using Switch relayer

```text

REACT_APP_RELAYER_URL='https://dex-backend.verisafe.io/v3' yarn start

```

[Switch OPEN API SPEC](https://switchos.github.io/veridex-api-spec/)

This relayer has additional endpoints to enable market view data with stats and candles. We will be adding as an opt-in option use these features in your frontend. That way you can use a Standard Relayer without any issues.

### Environment variables

You can create a `.env` file to set environment variables and configure the behavior of the dApp. Start by copying the example file \(`cp .env.example .env`\) and modify the ones you want. Some things you can configure are:

* `REACT_APP_RELAYER_URL`: The URL of the relayer used by the dApp. Defaults to `http://localhost:3000/v3`
* `REACT_APP_RELAYER_WS_URL`: The Websocket URL of the relayer used by the dApp. Defaults to `http://localhost:3000/`
* `REACT_APP_FEE_PERCENTAGE`: The fee percentage amount charged on 0x orders filled via the Forwarder. Note this is limited to `*/WETH` orders for the taker.
* `REACT_APP_FEE_RECIPIENT`: The address which receives the fees from the Forwarder.
* `REACT_APP_NETWORK_ID`: The network id to build the front end for. E.g `42` for Kovan, `50` for Ganache
* `REACT_APP_CHAIN_ID`: The chain id to build the front end for. E.g `42` for Kovan, `1337` for Ganache
* `REACT_APP_DEFAULT_ORDER_EXPIRY_SECONDS`: The expiration time for an order. Defaults to 1 day.

Check `.env.example` for the full list.

#### Using custom themes

If you want to add your own theme for the app, please read the [THEMES.md](https://github.com/SwitchOS/switchdex/blob/development/THEMES.md) file

#### Using custom Config on the DEX

If you want to config the app and markets, please read the [CONFIG.md](https://github.com/SwitchOS/switchdex/blob/development/CONFIG.md) file

```text

```

