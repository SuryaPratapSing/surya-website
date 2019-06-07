import Vue from 'vue'
import styled from 'vue-styled-components'

const Cavalier = Vue.component('Cavalier', {
  render() {
    return (
      <StyledCavalier data-theme={this.theme} class="cavalier">
        {this.$slots.heading || <h1>{this.heading}</h1>}
        {this.$slots.text || <p domPropsInnerHTML={this.text} />}
      </StyledCavalier>
    )
  },

  props: {
    theme: {
      default: 'blue',
      validator: v => ['lime', 'blue'].indexOf(v) !== -1,
    },
    text: { type: [String, Object] },
    heading: { type: [String, Object] },
  },
})

const StyledCavalier = styled.div`
  position: relative;

  @media (min-height: 612px) {
    font-size: 1.74vh;
  }

  &[data-theme='lime'] {
    h1 {
      color: ${props => props.theme.colors.lime};
    }

    p {
      color: #fff;
    }
  }

  h1 {
    margin: 0;
    font-size: 4em;
    max-width: 30vw;
    font-weight: 900;
    color: ${props => props.theme.colors['electric-blue']};
  }

  p {
    width: 32vw;
    line-height: 1.5;
    font-size: 1.07em;
    color: ${props => props.theme.colors.default};
  }
`
StyledCavalier.name = 'StyledCavalier'

export default Cavalier