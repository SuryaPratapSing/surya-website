import Vue from 'vue'
import StyledCornerstone from './styles'

const Cornerstone = Vue.component('Cornerstone', {
  render() {
    return (
      <StyledCornerstone>
        <div class="cornerstone__content">
          <Cavalier heading="Design">
            <p slot="text">
              I'm probably not the typical designer positioned behind an
              Illustrator artboard adjusting pixels, but I design. Immersed in
              stylesheets tweaking font sizes and contemplating layouts is where
              you'll find me (~_^). I do my best to create fluent user
              experiences while staying fashionable.
            </p>
          </Cavalier>

          <Cavalier heading="Engineering">
            <p slot="text">
              In building applications and solving problems, I'm equipped with
              just the right tools, and can absolutely function independently of
              them to deliver fast, definitive solutions optimized for
              scalability &mdash; Web performance and extensibility are
              priorities on my radar.
            </p>
          </Cavalier>
        </div>
      </StyledCornerstone>
    )
  },
})

export default Cornerstone