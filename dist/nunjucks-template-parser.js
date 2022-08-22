'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var nunjucks = require('nunjucks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var nunjucks__default = /*#__PURE__*/_interopDefaultLegacy(nunjucks);

const NunjucksTemplateParser = {
    FileMatcher: new RegExp("([a-zA-Z0-9s_\\.-:])+(.njk)$"),
    CompileTemplate: (template) => {
        const compiled = nunjucks__default["default"].compile(template);
        return {
            Render: (data) => {
                return compiled.render(data);
            },
        };
    },
};

exports.NunjucksTemplateParser = NunjucksTemplateParser;
//# sourceMappingURL=nunjucks-template-parser.js.map
