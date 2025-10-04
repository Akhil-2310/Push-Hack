import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'

// 1. Get projectId from https://cloud.reown.com
const projectId = "6bf0fb8b46e12e88e7664004567b8ab7"

// 2. Set up the Ethereum Adapter
const ethersAdapter = new EthersAdapter()

// 3. Configure the metadata
const metadata = {
  name: 'TipPush',
  description: 'A platform to share achievements and receive tips',
  url: 'https://tipcit.app', // origin must match your domain & subdomain
  icons: ['https://tipcit.app/favicon.ico']
}

// 4. Define Citrea Testnet
const pushTestnet = {
  id: 42101,
  name: 'Push Testnet',
  nativeCurrency: {
    name: 'Push',
    symbol: 'PC',
    decimals: 18
  },
  rpcUrls: {
    default: { http: ['https://evm.rpc-testnet-donut-node1.push.org/'] }
  },
  blockExplorers: {
    default: { name: 'Push Explorer', url: 'https://donut.push.network' }
  }
}

// 5. Create the modal
createAppKit({
  adapters: [ethersAdapter],
  projectId,
  networks: [pushTestnet],
  defaultNetwork: pushTestnet,
  metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export { pushTestnet }