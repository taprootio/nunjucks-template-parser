'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var nunjucks = require('nunjucks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var nunjucks__default = /*#__PURE__*/_interopDefaultLegacy(nunjucks);

const NunjucksTemplateParser = (options, filters) => {
    nunjucks__default["default"].configure(options);
    const nunjucksEnv = new nunjucks__default["default"].Environment();
    for (const filter of filters) {
        nunjucksEnv.addFilter(filter.Name, filter.Filter, filter.Async);
    }
    return {
        FileMatcher: new RegExp("([a-zA-Z0-9s_\\.-:])+(.njk)$"),
        CompileTemplate: (template) => {
            const compiled = nunjucks__default["default"].compile(template, nunjucksEnv);
            return {
                Render: (data) => {
                    return compiled.render(data);
                },
            };
        },
    };
};

exports.NunjucksTemplateParser = NunjucksTemplateParser;
//# sourceMappingURL=nunjucks-template-parser.js.map
