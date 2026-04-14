declare module 'mjml-core' {
  export class BodyComponent {
    static endingTag: boolean
    static allowedAttributes: Record<string, string>
    static defaultAttributes: Record<string, any>

    attributes: Record<string, any>
    props: Record<string, any>

    constructor(initialDatas?: any)

    getAttribute(name: string): any
    getContent(): string
    htmlAttributes(attributes: Record<string, any>): string
    getShorthandAttrValue(attribute: string, direction: string): number
    getBoxWidths(): { borders: number; paddings: number; box: number }
    renderMJML(mjml: string): string
    renderChildren(opts?: any, ...args: any[]): string
    render(): string
    headStyle(breakpoint: string): string
    getStyles(): Record<string, any>
    isFullWidth(): boolean

    [key: string]: any
  }

  export class HeadComponent {
    static endingTag: boolean
    static allowedAttributes: Record<string, string>
    static defaultAttributes: Record<string, any>

    attributes: Record<string, any>

    constructor(initialDatas?: any)

    getAttribute(name: string): any
    render(): string
  }

  export function registerComponent(component: any): void
}

declare module 'mjml-core/lib/helpers/widthParser' {
  export default function widthParser(
    width: string
  ): { parsedWidth: number; unit: string }
}

declare module 'mjml-validator' {
  export function registerDependencies(
    dependencies: Record<string, string[]>
  ): void
}

declare module 'mjml-image' {
  import { BodyComponent } from 'mjml-core'
  export default class MjImage extends BodyComponent {}
}

declare module 'mjml-section' {
  import { BodyComponent } from 'mjml-core'
  export default class MjSection extends BodyComponent {}
}

declare module 'mjml-wrapper' {
  import { BodyComponent } from 'mjml-core'
  export default class MjWrapper extends BodyComponent {}
}

declare module 'mjml' {
  export default function mjml2html(
    mjml: string,
    options?: any
  ): { html: string; errors: any[] }
}

declare module 'js-md5' {
  export function md5(message: string): string
}
