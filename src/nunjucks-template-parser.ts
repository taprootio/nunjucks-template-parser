import { type TaprootTemplateParser } from "@taprootio/rollup-plugin-taproot/dist/models/TaprootTemplateParser"
import nunjucks from "nunjucks"

const NunjucksTemplateParser: TaprootTemplateParser = {
  FileMatcher: new RegExp("([a-zA-Z0-9s_\\.-:])+(.njk)$"),
  CompileTemplate: (template) => {
    const compiled = nunjucks.compile(template)

    return {
      Render: (data) => {
        return compiled.render(data)
      },
    }
  },
}

export { NunjucksTemplateParser }
