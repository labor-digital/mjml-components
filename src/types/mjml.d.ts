declare module 'mjml-core/lib/helpers/widthParser' {
  export default function widthParser(width: string): { parsedWidth: number; unit: string }
}

declare module 'mjml-validator' {
  export function registerDependencies(dependencies: Record<string, string[]>): void
}

declare module 'mjml-image' {
  import { BodyComponent } from 'mjml-core'
  export default class MjImage extends BodyComponent {
    constructor(initialData?: any)
    render(): string
    renderImage(): string
  }
}

declare module 'mjml-section' {
  import { BodyComponent } from 'mjml-core'
  export default class MjSection extends BodyComponent {
    render(): string
    isFullWidth(): boolean
  }
}

declare module 'mjml-wrapper' {
  import MjSection from 'mjml-section'
  export default class MjWrapper extends MjSection {}
}

declare module 'js-md5' {
  export function md5(message: string): string
}
