
export function  WriteLogs(User: any, methods: Array<{methodName: ''}>) {
  const UserPrototype = User.prototype
  const UserMethods = Object.create(UserPrototype);
    methods.forEach(method => {
    let original = UserMethods[method.methodName]
    User.prototype[method.methodName] = function mutator(){
      console.log('前面执行')
      console.log(arguments)
      const result = original.apply(this,arguments)
      console.log(result)
      console.log("后面执行");
      //写入数据流数据库
      return result
    }
  })
}
