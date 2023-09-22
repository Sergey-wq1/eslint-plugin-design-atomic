const {modules} = require("../const/atomic-modules");

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
        const filename = context.filename;
        const importPath = node.source.value;

        modules.forEach((module, index) => {
          if (filename.includes(module)) {
            const importPathIndex = modules.findIndex((item) => importPath.includes(item));
            const importPathModule = modules[importPathIndex];
            if (importPathIndex > index) {
              context.report({
                node,
                message: `${importPathModule} cannot be imported into ${module}
                [atoms -> molecules -> organisms -> templates]`,
              });
            } else if (importPathIndex < 0) {
              context.report({
                node,
                message: 'not crossImports',
              });
            }
          }
        });
      }
    };
  }
};
