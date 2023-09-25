const { design_modules } = require("../utils/const/atomic-modules");
const getErrorMessage = require("../utils/helpers/getErrorMessage");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "rule for importing from high modules to lower ones"
    },
    fixable: "code",
    schema: []
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const currentFileName = context.physicalFilename;

        const importPathInCurrentFileName = node.source.value;

        const importPathModuleLevel = design_modules
          .findIndex((designModuleName) => importPathInCurrentFileName.includes(designModuleName));

        const filePathModuleLevel = design_modules
          .findIndex((designModuleName) => currentFileName.includes(designModuleName));

        const importPathModuleName = design_modules[importPathModuleLevel];
        const filePathModuleName = design_modules[filePathModuleLevel];

        if (importPathModuleLevel > filePathModuleLevel) {
          context.report({
            node,
            message: getErrorMessage(importPathModuleName, filePathModuleName),
          });
        }

      }
    };
  }
};
