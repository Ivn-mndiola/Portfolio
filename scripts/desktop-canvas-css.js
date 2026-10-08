import { DESKTOP_WIDTH, DESKTOP_HEIGHT } from '../src/data/desktopDesign.js'

// Use the same fixed PC dimensions for CSS and JavaScript. Reduced-motion
// and touch/hover queries continue to follow the user's device.
function desktopMatches(condition) {
  return condition.split(',').some((alternative) => {
    let query = alternative.trim()
    const negate = /^not\s/.test(query)
    query = query.replace(/^not all and\s+/, '').replace(/^not\s+/, '')
    const results = []
    query = query.replace(/\(\s*(min-|max-)?(width|height)\s*:\s*([\d.]+)(px|rem|em)\s*\)/g,
      (_, bound, axis, number, unit) => {
        const actual = axis === 'width' ? DESKTOP_WIDTH : DESKTOP_HEIGHT
        const limit = Number(number) * (unit === 'px' ? 1 : 16)
        results.push(bound === 'min-' ? actual >= limit : bound === 'max-' ? actual <= limit : actual === limit)
        return ''
      })
    query = query.replace(/\(\s*(width|height)\s*(<=|>=|<|>|=)\s*([\d.]+)(px|rem|em)\s*\)/g,
      (_, axis, operator, number, unit) => {
        const actual = axis === 'width' ? DESKTOP_WIDTH : DESKTOP_HEIGHT
        const limit = Number(number) * (unit === 'px' ? 1 : 16)
        results.push(operator === '<=' ? actual <= limit : operator === '>=' ? actual >= limit
          : operator === '<' ? actual < limit : operator === '>' ? actual > limit : actual === limit)
        return ''
      })
    if (!results.length || query.replace(/\band\b/g, '').trim()) {
      throw new Error(`Unsupported desktop canvas size query: ${condition}`)
    }
    const match = results.every(Boolean)
    return negate ? !match : match
  })
}

function scopeQuery(query, qualifier, Rule) {
  query.walkRules((rule) => {
    rule.selectors = rule.selectors.map((selector) => {
      const pseudo = selector.search(/(?<!\\)::/)
      return pseudo < 0 ? selector + qualifier
        : selector.slice(0, pseudo) + qualifier + selector.slice(pseudo)
    })
  })
  const declarations = query.nodes.filter((node) => node.type === 'decl')
  if (declarations.length) {
    const guard = new Rule({ selector: `&${qualifier}` })
    declarations.forEach((node) => guard.append(node))
    query.append(guard)
  }
}

export default function desktopCanvasCss() {
  return {
    postcssPlugin: 'portfolio-desktop-canvas',
    OnceExit(root, { Rule }) {
      if (root.source?.input.file?.endsWith('/DesktopCanvas.css')) return

      root.walkDecls((declaration) => {
        // Leave URLs and quoted strings untouched.
        declaration.value = declaration.value.replace(
          /url\([^)]*\)|"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|(-?(?:\d*\.)?\d+)(svh|dvh|lvh|vh|vw|vmin|vmax)\b/g,
          (match, number, unit) => number === undefined ? match
            : `calc(${number} * var(--canvas-${unit}, 1${unit}))`,
        )
      })

      const queries = []
      root.walkAtRules('media', (query) => {
        if (/\b(?:width|height|aspect-ratio|orientation)\s*[:<>=)]/.test(query.params)) queries.push(query)
      })
      // Inner queries first, so nested Tailwind variants remain nested.
      queries.reverse().forEach((query) => {
        if (desktopMatches(query.params)) {
          const desktop = query.clone({ params: 'all' })
          scopeQuery(desktop, ':where([data-site-canvas="true"] *)', Rule)
          query.after(desktop)
        }
        scopeQuery(query, ':where(:not([data-site-canvas="true"] *))', Rule)
      })
    },
  }
}
