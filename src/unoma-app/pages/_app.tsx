import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }: AppProps) {
  return <WagmiConfig client={wagmiClient}>
    <SessionProvider refetchInterval={0} session={pageProps.session}>
      <RainbowKitProvider chains={chains} theme={
        darkTheme({
          accentColor: '#FFBA08',
          accentColorForeground: 'white',
          borderRadius: 'medium',
        })
      }>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </RainbowKitProvider>
    </SessionProvider>
  </WagmiConfig> 
}

export default MyApp