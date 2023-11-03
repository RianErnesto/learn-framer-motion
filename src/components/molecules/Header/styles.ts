import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 8px 40px;
  background-color: black;
`

export const Logo = styled.div`
  position: relative;
  width: 200px;
  height: 100%;
`

export const NavContainer = styled.ul`
  display: flex;
  gap: 1.2rem;
`

export const NavItem = styled.li`
  color: white;
  cursor: pointer;
  transition: transform 100ms ease-in-out;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    transform: scale(1.05);
  }
`
