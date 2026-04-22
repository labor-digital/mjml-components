TypoLegal and EdexArticle had the same invalid attribute.
Why only the EdexArticle errors:

The decorator itself does no attribute validation at runtime — it just registers allowedAttributes with MJML core via registerComponent(target) and registers parent-child      
allowances via registerDependencies(dependencies).

MJML's validation runs on the full component tree. The difference is the nesting depth and component type tier:

- labor-adobe-edex-article is a direct child of <mj-body> — a "section-level" slot. MJML validates attributes on section-level components (direct mj-body children) strictly    
  against allowedAttributes. paddington is not there → validation error, preview fails.
- labor-adobe-typo-legal is nested inside <labor-adobe-section><mj-column> — a "column content" slot. MJML treats components in this tier differently: mj-column accepts any    
  registered BodyComponent as a child, and the attribute validation at that level is lenient. Unknown attributes on column-level components produce a warning in the output, not a
  hard error that aborts preview generation.

The dependency map controls this: registerDependencies({'mj-body': ['labor-adobe-edex-article']}) tells MJML the component lives at the body level where full attribute         
validation applies. registerDependencies({'mj-column': ['labor-adobe-typo-legal']}) places it in the column tier where it isn't.
