import styled from 'vue-styled-components'
import { createMenuShadow, media } from '@/helpers'

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  z-index: 1000;
  position: fixed;
  max-height: 12rem;
  align-items: center;
  background: transparent;
  justify-content: space-between;
  height: ${props => props.theme.header.height};

  ${media.minWidth('medium', +1)`
    padding: 0 ${props => props.theme.header.padding};
  `}

  ${media.maxWidth('medium')`
    padding: 0 3em;
  `}

  &[data-compact='true'] {
    #logo {
      width: unset;

      svg {
        transform: translateX(-56px);
      }

      .logo_svg__lu,
      .logo_svg__ola {
        opacity: 0;
        pointer-events: none;
      }

      .logo_svg__ola {
        transform: translateX(50%);
        transform-origin: left;
      }

      .logo_svg__lu {
        transform: translateX(-50%);
      }
    }
  }

  &[data-compact='false'] {
    .logo_svg__lu,
    .logo_svg__ola {
      transition: opacity 0.3s, transform 0.5s 100ms;
    }
  }

  #logo {
    display: flex;
    width: 8.34rem;
    height: 3.195rem;
    position: relative;
    flex-direction: column;
    transition: color 700ms;
    outline-color: transparent;
    color: ${props => props.theme.colors.lime};

    svg {
      width: inherit;
      height: inherit;

      path {
        fill: currentColor;
      }
    }

    .logo_svg__lu,
    .logo_svg__ola {
      opacity: 1;
      transform: translate(0);
    }
  }

  #contact__menu {
    top: 1.39rem;
    z-index: 998;
    display: flex;
    right: 3.41rem;
    width: 22.223rem;
    box-shadow: none;
    font-size: 1.1em;
    user-select: none;
    padding: 3.473rem;
    position: absolute;
    flex-direction: column;
    background-color: #ffffff;
    transition: opacity 0.2s, box-shadow 0.6s 200ms;

    &:not([aria-expanded='true']) {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    &[aria-expanded='true'] {
      box-shadow: ${createMenuShadow()};

      .basic__contact ul,
      .social__contact ul,
      .basic__contact .say__hello {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .basic__contact {
      margin-top: -0.8em;

      .say__hello {
        opacity: 0;
        transition: opacity 0.2s 100ms;
      }
    }

    a {
      color: ${props => props.theme.colors['electric-blue']};
    }
  }

  .basic__contact ul,
  .social__contact ul {
    opacity: 0;
    transition: opacity, transform 0.2s;
  }

  .basic__contact ul {
    transition-delay: 100ms;
    margin: 1.2rem 0 2.78rem;
    transform: translateY(30px);
  }

  .social__contact ul {
    transition-delay: 300ms;
    transform: translateY(20px);
  }

  .menu__toggle {
    z-index: 999;
    width: 2.78rem;
    height: 2.09rem;
    background: none;
    position: relative;
    display: inline-flex;
    margin-top: 0.699rem;
    color: ${props => props.theme.colors['electric-blue']};

    &:focus {
      outline-offset: 4px;
      outline-color: transparent;
    }

    &.x {
      width: 2.09rem;

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        top: 0;
        width: 100%;
        transform: rotate(-45deg);
      }
    }

    &:before,
    &:after {
      content: '';
      width: 100%;
      height: 0.14rem;
      position: absolute;
      transition: 0.2s ease;
      transform: rotate(0deg);
      background-color: currentColor;
    }

    &:before {
      top: 0;
    }

    &:after {
      right: 0;
      width: 72%;
      top: 1.13rem;
    }
  }
`

export default {
  ...StyledHeader,
  name: 'StyledHeader',
}
