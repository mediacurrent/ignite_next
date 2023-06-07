import '@/styles/components/hero.scss'
import { HeroTypes } from '@/types/Hero'
import { HeroComponent } from './components'
import { TopHero } from './components/TopHero'
import { BottomHero } from './components/BottomHero'
import { RightHero } from './components/RightHero'
import { LeftHero } from './components/LeftHero'
const Hero = ({ position, ...props }: HeroTypes) => (
  <>
    {position === 'primary' && <HeroComponent {...props} />}
    {position === 'top' && <TopHero {...props} />}
    {position === 'bottom' && <BottomHero {...props} />}
    {position === 'right' && <RightHero {...props} />}
    {position === 'left' && <LeftHero {...props} />}
  </>
)
export default Hero
