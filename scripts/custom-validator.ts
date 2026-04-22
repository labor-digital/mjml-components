import { components } from 'mjml-core'

/**
 * Builds a registry of allowed attributes for all registered `labor-*` MJML components.
 *
 * `mjml-core`'s `components` map is populated at module load time by every
 * `registerComponent()` call — i.e. every `@MJMLCustomComponent` decorator. Each class
 * carries an `allowedAttributes` object keyed by attribute name, which the decorator
 * derives from the `attributes` config passed to it.
 */
export function buildAttrRegistry(): Record<string, Set<string>> {
  const registry: Record<string, Set<string>> = {}
  for (const [tagName, Cls] of Object.entries(components as Record<string, any>)) {
    if (!tagName.startsWith('labor-')) continue
    const allowed = (Cls as any).allowedAttributes
    if (allowed) registry[tagName] = new Set(Object.keys(allowed))
  }
  return registry
}

/**
 * Returns the index just past the closing `>` of the opening tag that begins at
 * `from`. Tracks quote state so a `>` inside an attribute value is not mistaken
 * for the tag boundary.
 */
function findTagEnd(source: string, from: number): number {
  let inQuote = false
  let quoteChar = ''
  let pos = from
  while (pos < source.length) {
    const c = source[pos]
    if (inQuote) {
      if (c === quoteChar) inQuote = false
    } else if (c === '"' || c === "'") {
      inQuote = true
      quoteChar = c
    } else if (c === '>') {
      return pos + 1
    }
    pos++
  }
  return pos
}

// Matches one attribute name in a tag's attribute string.
// Group 1 captures the name; the optional `=value` (quoted or unquoted) is consumed
// but not captured so repeated exec() advances past it correctly.
const ATTR_RE = /([a-z][a-z0-9-]*)\s*(?:=\s*(?:"[^"]*"|'[^']*'|[^\s>]*))?/gi

/**
 * Validates that every attribute used on `labor-*` tags in `mjmlSource` is declared
 * in the component's allowed-attribute registry.
 *
 * MJML's built-in `validationLevel: 'strict'` only enforces attribute rules for
 * direct children of `mj-body` (section-level components). Column-content-level
 * components are silently ignored. This function fills that gap by scanning the raw
 * MJML source before handing it to `mjml2html`.
 *
 * A plain regex scan would misfire on `>` inside attribute values, so we use a
 * quote-aware character scan (`findTagEnd`) to locate exact tag boundaries first.
 */
export function validateAllAttributes(
  mjmlSource: string,
  registry: Record<string, Set<string>>,
): string[] {
  const errors: string[] = []
  let searchFrom = 0

  while (searchFrom < mjmlSource.length) {
    const tagStart = mjmlSource.indexOf('<labor-', searchFrom)
    if (tagStart === -1) break

    // 1-based line number for human-readable error messages
    const line = (mjmlSource.slice(0, tagStart).match(/\n/g)?.length ?? 0) + 1

    // Find where the tag name ends (first whitespace, `/`, or `>` after the `<`)
    let nameEnd = tagStart + 1
    while (nameEnd < mjmlSource.length && !/[\s>\/]/.test(mjmlSource[nameEnd])) nameEnd++
    const tagName = mjmlSource.slice(tagStart + 1, nameEnd).toLowerCase()

    const tagEnd = findTagEnd(mjmlSource, nameEnd)

    const allowed = registry[tagName]
    if (allowed) {
      const attrContent = mjmlSource.slice(nameEnd, tagEnd - 1)
      ATTR_RE.lastIndex = 0
      let m: RegExpExecArray | null
      while ((m = ATTR_RE.exec(attrContent)) !== null) {
        const attr = m[1].toLowerCase()
        if (!allowed.has(attr)) {
          errors.push(`Unknown attribute "${attr}" on <${tagName}> (line ${line})`)
        }
      }
    }

    searchFrom = tagEnd
  }

  return errors
}
