/**
 * Preact 11 removed `defaultProps` support from core `createElement` (it now
 * lives in `preact/compat`). Classes that relied on it install the accessors
 * below so `this.props` keeps returning a fully populated object, both on the
 * initial mount and on every subsequent assignment made by Preact's diff.
 *
 * @param {object} defaults The default values to apply
 * @returns {(props: object) => object} A normalized copy of `props`
 */
export function createDefaultProps (defaults) {
  return (props) => {
    const normalized = { ...defaults }

    for (const key in props) {
      if (props[key] !== undefined) {
        normalized[key] = props[key]
      }
    }

    return normalized
  }
}
