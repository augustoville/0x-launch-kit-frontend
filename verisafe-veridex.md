# VeriSafe/VeriDex

 @@ -1,35 +1,43 @@ \# Veridex \# SwitchDex  
 \[!\[Chat with us on Discord\]\(https://img.shields.io/badge/chat-Discord-blueViolet.svg\)\]\(https://discord.gg/JqheZms\) \[!\[CircleCI\]\(https://circleci.com/gh/0xProject/0x-launch-kit-frontend.svg?style=svg\)\]\(https://circleci.com/gh/0xProject/0x-launch-kit-frontend\) \[!\[dependencies Status\]\(https://david-dm.org/verisafe/veridex/status.svg\)\]\(https://david-dm.org/verisafe/veridex\) \[!\[devDependencies Status\]\(https://david-dm.org/verisafe/veridex/dev-status.svg\)\]\(https://david-dm.org/verisafe/veridex?type=dev\) \[!\[Coverage Status\]\(https://coveralls.io/repos/github/VeriSafe/VeriDex/badge.svg?branch=development\)\]\(https://coveralls.io/github/VeriSafe/VeriDex?branch=development\)  
 This project is forked from \[0x-launch-kit-fronted\]\(https://github/0xproject/0x-launch-kit-frontend\) and it have a goal to be the most complete open-source 0x based dex out there. The code here will try to be on sync with the 0x frontend, but with the additional features proposed on the TODO, tests will be include following 0x style. This project is forked from \[veridex\]\(https://github/verisafe/veridex\) and it have a goal to be the most complete open-source 0x based dex out there.  
 This source code is used on the \[VeriSafe Dex as a service\]\(https://steemit.com/zerox/@joaocampos/veridex-network-dex-as-a-service\).  
 This repo ships with both an ERC-20 token trading interface and an ERC-721 marketplace interface. However, for now, only improvements on ERC-20 token trading will be done. This repo ships with both an ERC-20 token trading interface and an ERC-721 marketplace interface.  
 To use this fork the following actions are required:  
 - Add VSF, 0xbitcoin and 0x as pairs - Add ESH, SDEX, DESH and 0x as pairs - Lets us know you are using this fork - Add a Powered by 0x and VeriSafe - Add a Powered by 0x and Switch - Don't use another pool associated with this code besides the one on: \[Veridex Pool\]\(https://0x.org/zrx/staking/pool/16\). If you are market maker you can join Veridex market pool at \[Join as Maker\]\(https://dex.verisafe.io/\#/erc20/join-as-maker\)  
 With your help, we can be self-sustainable and complete the long list of TODO's. If you want a feature that is not present on the TODO list, please open an issue requesting a feature request. \#\# Dex Wizard  
 Please follow these instructions if you plan to use your own domain: \[DEX on your domain\]\(ADD\_DEX\_BY\_DOMAIN.md\)  
 \#\# Adding token  
 Please follow all the instructions here: \[ADD TOKEN\]\(ADD\_TOKEN.md\)  
 \#\# Adding token to launchpad  
 Please follow all the instructions here: \[ADD TOKEN LAUNCHPAD\]\(ADD\_TOKEN\_LAUNCHPAD.md\)  
 \#\# Deployed DEX's  
 List of deployed dex's using this source code: List of deployed dex's using forks of this source code:  
 - \[VeriDex\]\(https://dex.verisafe.io\) - \[0xChange\]\(https://0xchange.verisafe.io\) - \[Belifex\]\(https://dex-belifex.com\)  
 If you are using the source code of this fork, please let me know! Help the project adding VSF as a pair on your fork! If you are using the source code of this fork, please let me know! Help the project adding ESH as a pair on your fork!  
 If you have the URL of an existing relayer, you can use this frontend against it. After installing the dependencies, start the application with this command, replacing \`RELAYER\_URL\` and \`RELAYER\_WS\_URL\` with the proper value:  
   @@ -97,14 +105,14 @@ REACT\_APP\_RELAYER\_URL='http://localhost:3000/v3' REACT\_APP\_RELAYER\_WS\_URL='ws:// \`\`\`  
 \`\`\` git clone git@github.com:VeriSafe/veridex.git git clone git@github.com:SwitchOS/veridex.git cd Veridex yarn \`\`\`  
 \#\# TODO  
 This is a detailed list of planned features to add to this DEX \(includes VeriDex backend\) on long term: This is a detailed list of planned features to add to this DEX \(includes Switch backend\) on long term:  
 - \[x\] List Dex Trades - \[x\] Add troll box using ChatBro   @@ -139,30 +147,37 @@ This is a detailed list of planned features to add to this DEX \(includes VeriDex - \[ \] \[i18n\]\(https://github.com/i18next/react-i18next\) - \[x\] Add \[tour\]\(https://github.com/elrumordelaluz/reactour\) - \[ \] Add crypto price calculator - \[ \] Add Swap interface - \[ \] Add Token factory - \[x\] Add Swap interface  
 \#\# IDEAS FOR COMMUNITY DEVELOPERS  
 This is some ideas that community devs could work to add value to this dex on long term.  
 - \[\] Create simple swap interface with support for meta transactions Eg \[Meta\]\(https://0x.org/docs/guides/unlocking-meta-transaction-swaps\) - \[\] Add Token factory - \[\] Wizard for Marketplace  
 \#\# Planned Wallets Support  
 - \[x\] \[Metamask\]\(https://metamask.io/\) - \[ \] \[Torus\]\(https://docs.tor.us/developers/getting-started\) - \[x\] \[Portis\]\(https://developers.portis.io/\) - \[x\] \[Fortmatic\]\(https://developers.fortmatic.com/\) - \[ \] \[WalletConnect\]\(https://docs.walletconnect.org/\) - \[x\] \[WalletConnect\]\(https://docs.walletconnect.org/\) - \[x\] \[EnjinWallet\]\(https://enjin.io/products/wallet\) - \[x\] \[CoinbaseWallet\]\(https://wallet.coinbase.com/\) - \[x\] \[TrustWallet\]\(https://trustwallet.com\) - \[x\] \[CipherBrowser\]\(https://www.cipherbrowser.com/\)  
 \#\#\# Using VeriDex relayer \#\#\# Using Switch relayer  
 \`\`\` REACT\_APP\_RELAYER\_URL='https://dex-backend.verisafe.io/v3' yarn start \`\`\`  
 \[VeriDEX OPEN API SPEC\]\(https://verisafe.github.io/veridex-api-spec/\) \[Switch OPEN API SPEC\]\(https://switchos.github.io/veridex-api-spec/\)  
 This relayer has additional endpoints to enable market view data with stats and candles. We will be adding as an opt-in option use these features in your frontend. That way you can use a Standard Relayer without any issues.  
 

