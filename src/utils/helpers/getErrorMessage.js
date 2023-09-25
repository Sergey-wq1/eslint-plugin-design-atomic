function getErrorMessage(importPathModuleName, filePathModuleName) {
  return `${importPathModuleName} cannot be imported into ${filePathModuleName}
                [atoms -> molecules -> organisms -> templates]`
}

module.exports = getErrorMessage;
