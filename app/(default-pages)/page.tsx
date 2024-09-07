export const metadata = {
  title: 'Tacoza - Restaurant Management System',
  description: 'Empower your business with Tacoza’s all-in-one solution, built to optimize your ordering process and management.',
}

import Hero from '@/components/hero'
import Section01 from '@/components/section-01'
import Section02 from '@/components/section-02'
import Section03 from '@/components/section-03'
import Section04 from '@/components/section-04'
import Section05 from '@/components/section-05'
import Section06 from '@/components/section-06'
import Section07 from '@/components/section-07'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
   
      <Faqs />
      <Cta />
    </>
  )
}
