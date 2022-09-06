import { TemplateParser, TemplateData } from "@taprootio/rollup-plugin-taproot"
import nunjucks from "nunjucks"

interface NunjucksFilterDef {
  Name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Filter: (...args: any[]) => any
  Async: boolean
}

const NunjucksTemplateParser = (
  options: nunjucks.ConfigureOptions,
  filters: Array<NunjucksFilterDef>
): TemplateParser => {
  nunjucks.configure(options)
  const nunjucksEnv = new nunjucks.Environment()

  for (const filter of filters) {
    nunjucksEnv.addFilter(filter.Name, filter.Filter, filter.Async)
  }

  return {
    FileMatcher: new RegExp("([a-zA-Z0-9s_\\.-:])+(.njk)$"),
    CompileTemplate: (template: string) => {
      const compiled = nunjucks.compile(template, nunjucksEnv)

      return {
        Render: (data: TemplateData) => {
          return compiled.render(data)
        },
      }
    },
  }
}

export { NunjucksTemplateParser }
