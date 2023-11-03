import Head from 'next/head'
import ShowHide from '@/components/organisms/ShowHide'
import Gestures from '@/components/organisms/Gestures'
import AnimationControls from '@/components/organisms/AnimationControls'
import ViewBasedAnimation from '@/components/organisms/ViewBasedAnimation'
import Header from '@/components/molecules/Header'
import ScrollAnimations from '@/components/organisms/ScrollAnimations'
import { CurrentClassProvider } from '@/contexts/currentClass'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CurrentClassProvider>
        <Header />
        <ShowHide />
        <Gestures />
        <AnimationControls />
        <ViewBasedAnimation />
        <ScrollAnimations />
      </CurrentClassProvider>
    </>
  )
}
