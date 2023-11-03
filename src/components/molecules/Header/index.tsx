import * as S from './styles'
import Image from 'next/image'
import Zenith from 'public/assets/images/zenith.svg'
import { useCurrentClass } from '@/contexts/currentClass'

const Header = () => {
  const { setCurrentClass } = useCurrentClass()

  return (
    <S.Wrapper>
      <S.Logo>
        <Image src={Zenith} alt="zenith" fill />
      </S.Logo>
      <S.NavContainer>
        <S.NavItem onClick={() => setCurrentClass('show-hide')}>
          Show/Hide
        </S.NavItem>
        <S.NavItem onClick={() => setCurrentClass('gesture')}>
          Gestures
        </S.NavItem>
        <S.NavItem onClick={() => setCurrentClass('animation-controls')}>
          Animation Controls
        </S.NavItem>
        <S.NavItem onClick={() => setCurrentClass('scroll-animations')}>
          Scroll Animations
        </S.NavItem>
        <S.NavItem onClick={() => setCurrentClass('view-based')}>
          View Based Animation
        </S.NavItem>
      </S.NavContainer>
    </S.Wrapper>
  )
}

export default Header
