class SuperClass {
  constructor() {
    this.instanceVariable = "SuperClass"
    this.instanceVariableSuperOnly = "SuperClassOnly"
  }

  superClassMethod = () => {
    console.log(this.instanceVariable)
  }

  callInstanceVariableSuperOnly = () => {
    console.log(this.instanceVariableSuperOnly)
  }
}

class SubClass extends SuperClass {
  constructor() {
    super()
    this.instanceVariable = "SubClass"
  }

  subClassMethod = () => {
    console.log(this.instanceVariable)
  }
}

const sub = new SubClass()
sub.superClassMethod()
sub.subClassMethod()
sub.callInstanceVariableSuperOnly()
