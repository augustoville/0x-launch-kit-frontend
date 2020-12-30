# Feature/add instant page for tipgram tokens \(\#29\)@b55f0e6

|  | @@ -5,6 +5,7 @@ import { useLocation } from 'react-router-dom'; |  |
| :--- | :--- | :--- |
|  |  |  import { FEE\_RECIPIENT, INSTANT\_FEE\_PERCENTAGE, RELAYER\_URL } from '../../../common/constants'; |
|  |  |  import { getUserIEOSignedOrders } from '../../../services/relayer'; |
|  |  |  import { getKnownTokens } from '../../../util/known\_tokens'; |
|  |  |  import { getKnownTokensIEO } from '../../../util/known\_tokens\_ieo'; |
|  |  |  import { Token, TokenIEO, Wallet } from '../../../util/types'; |
|  |  |  import { PageLoading } from '../../common/page\_loading'; |
|  |  |  |
|  | @@ -73,26 +74,58 @@ export const ZeroXInstantComponent = \(props: Props\) =&gt; { |  |
|  |  |  const tokenName = query.get\('token'\); |
|  |  |  const tokenSymbol = query.get\('symbol'\); |
|  |  |  const isEIO = query.get\('isEIO'\); |
|  |  |  const isBot = query.get\('isBot'\); |
|  |  |  // TODO refactor this to be better |
|  |  |  try { |
|  |  |  const knownTokens = getKnownTokens\(\); |
|  |  |  const knownTokensIEO = getKnownTokensIEO\(\); |
|  |  |  if \(tokenName\) { |
|  |  |  token = knownTokens.getTokenByName\(tokenName\); |
|  |  |  isBot |
|  |  |  ? \(token = knownTokensIEO.getTokenBotByName\(tokenName\)\) |
|  |  |  : \(token = knownTokens.getTokenByName\(tokenName\)\); |
|  |  |  } |
|  |  |  if \(tokenSymbol\) { |
|  |  |  token = knownTokens.getTokenBySymbol\(tokenSymbol\); |
|  |  |  isBot |
|  |  |  ? \(token = knownTokensIEO.getTokenBotBySymbol\(tokenSymbol\)\) |
|  |  |  : \(token = knownTokens.getTokenBySymbol\(tokenSymbol\)\); |
|  |  |  } |
|  |  |  if \(token\) { |
|  |  |  const isTokenIEO = knownTokens.isIEOKnownAddress\(token.address\); |
|  |  |  if \(isTokenIEO\) { |
|  |  |  orderSource = undefined; |
|  |  |  } |
|  |  |  if \(isBot\) { |
|  |  |  orderSource = undefined; |
|  |  |  } |
|  |  |  } |
|  |  |  |
|  |  |  if \(isEIO && token\) { |
|  |  |  const baseToken = token as TokenIEO; |
|  |  |  const wethToken = knownTokens.getWethToken\(\); |
|  |  |  |
|  |  |  orderSource = await getUserIEOSignedOrders\(baseToken.owners\[0\].toLowerCase\(\), baseToken, wethToken\); |
|  |  |  |
|  |  |  if \(!orderSource \|\| orderSource.length === 0\) { |
|  |  |  orderSource = undefined; |
|  |  |  } |
|  |  |  feePercentage = Number\(baseToken.feePercentage\); |
|  |  |  } else if \(isBot && token\) { |
|  |  |  const baseToken = token as TokenIEO; |
|  |  |  const wethToken = knownTokens.getWethToken\(\); |
|  |  |  const owners = baseToken.owners; |
|  |  |  |
|  |  |  // iterate to found orders by whitelist address order |
|  |  |  // TODO: create endpoint to retrieve orders ordered by address |
|  |  |  for \(const owner of owners\) { |
|  |  |  orderSource = \(await getUserIEOSignedOrders\( |
|  |  |  owner.toLowerCase\(\), |
|  |  |  baseToken, |
|  |  |  wethToken, |
|  |  |  \)\) as SignedOrder\[\]; |
|  |  |  if \(orderSource && orderSource.length &gt; 0\) { |
|  |  |  break; |
|  |  |  } |
|  |  |  } |
|  |  |  if \(!orderSource \|\| orderSource.length === 0\) { |
|  |  |  orderSource = undefined; |
|  |  |  } |
|  | @@ -133,7 +166,7 @@ export const ZeroXInstantComponent = \(props: Props\) =&gt; { |  |
|  |  |  'body', |
|  |  |  \); |
|  |  |  } else { |
|  |  |  setText\('ERROR! Please Reload the page'\); |
|  |  |  setText\('ERROR! No orders for this Asset. Please Reload the page'\); |
|  |  |  setError\(true\); |
|  |  |  } |
|  |  |  }; |
|  |  |  |

