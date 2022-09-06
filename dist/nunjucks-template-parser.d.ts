import { TemplateParser } from "@taprootio/rollup-plugin-taproot";
import nunjucks from "nunjucks";
interface NunjucksFilterDef {
    Name: string;
    Filter: (...args: any[]) => any;
    Async: boolean;
}
declare const NunjucksTemplateParser: (options: nunjucks.ConfigureOptions, filters: Array<NunjucksFilterDef>) => TemplateParser;
export { NunjucksTemplateParser };
//# sourceMappingURL=nunjucks-template-parser.d.ts.map