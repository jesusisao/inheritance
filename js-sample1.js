class SuperClass {
  constructor() {
    this.instanceVariable = "SuperClass"
    this.instanceVariableSuperOnly = "SuperClassOnly"
  }

  superClassMethod() {
    console.log(this.instanceVariable)
  }

  callInstanceVariableSuperOnly() {
    console.log(this.instanceVariableSuperOnly)
  }
}

class SubClass extends SuperClass {
  constructor() {
    super()
    this.instanceVariable = "SubClass"
  }

  subClassMethod() {
    console.log(this.instanceVariable)
  }
}

const sub = new SubClass()
sub.superClassMethod()
sub.subClassMethod()
sub.callInstanceVariableSuperOnly()

// ------------------------

function LegacySuperClass() {};
LegacySuperClass.prototype.instanceVariable = "SuperClass";
LegacySuperClass.prototype.instanceVariableSuperOnly = "SuperClassOnly";
LegacySuperClass.prototype.superClassMethod = function() {
  console.log(this.instanceVariable)
}; 
LegacySuperClass.prototype.callInstanceVariableSuperOnly = function() {
  console.log(this.instanceVariableSuperOnly)
}; 

function LegacySubClass() {};
LegacySubClass.prototype = new LegacySuperClass();
LegacySubClass.prototype.instanceVariable = "SubClass";
LegacySubClass.prototype.subClassMethod = function() {
  console.log(this.instanceVariable)
};

var lsub = new LegacySubClass()
lsub.superClassMethod()
lsub.subClassMethod()
lsub.callInstanceVariableSuperOnly()
