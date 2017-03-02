module.exports = function(babel) {
  const { types: t } = babel
  return {
    name: 'mangle-variables-in-context', // not required
    visitor: {
      Identifier(path){
        const nodeName = path.node.name
        const uid = path.scope.generateUid()
        const bindings = path.scope.getBinding(nodeName)
        if(!bindings)
          return
        const { referencePaths } = bindings
        referencePaths.forEach( refPath => {
          refPath.replaceWith(
              t.Identifier(uid)
            )
        })
        path.replaceWith(
          t.Identifier(uid)
        )
      }
    }
  }
}
