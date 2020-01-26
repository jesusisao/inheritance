class SuperClass {
  constructor() {
    this.instanceVariable = "SuperClass"
  }

  superClassMethod() {
    console.log(this.instanceVariable)
  }
}

class SubClass extends SuperClass {
  constructor() {
    super()
    this.instanceVariable = "SubClass"
  }
}

// ------------------------

function LegacySuperClass() {
  this.instanceVariable = "SuperClass";
};
LegacySuperClass.prototype.superClassMethod = function() {
  console.log(this.instanceVariable)
}; 

function LegacySubClass() {
  this.instanceVariable = "SubClass";
};
LegacySubClass.prototype = new LegacySuperClass();

// ------------------------

class SuperClassArrow {
  constructor() {
    this.instanceVariable = "SuperClass"
  }

  superClassMethod = () => {
    console.log(this.instanceVariable)
  }
}

class SubClassArrow extends SuperClassArrow {
  constructor() {
    super()
    this.instanceVariable = "SubClass"
  }
}

// ------------------------

class SuperClassGetterArrow {
  instanceVariable = () => {
    return "SuperClass"
  }

  superClassMethod = () => {
    console.log(this.instanceVariable())
  }
}

class SubClassGetterArrow extends SuperClassGetterArrow {
  instanceVariable = () => {
    return "SubClass"
  }
}

// ------------------------

console.log('---- SubClass ----')
const sub = new SubClass()
sub.superClassMethod()

console.log('---- LegacySubClass ----')
var lsub = new LegacySubClass()
lsub.superClassMethod()

console.log('---- SubClassArrow ----')
const suba = new SubClassArrow()
suba.superClassMethod()

console.log('---- SubClassGetterArrow ----')
const subga = new SubClassGetterArrow()
subga.superClassMethod()
