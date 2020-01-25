class SuperClass
  def initialize()
    @instance_variable = "SuperClass"
  end

  def super_class_method
    p @instance_variable
  end
end

class SubClass < SuperClass
  def initialize()
    super()
    @instance_variable = "SubClass"
  end
end

# --------------------------------

class SuperClassGetter
  def instance_variable()
    "SuperClass"
  end

  def super_class_method
    p instance_variable
  end
end

class SubClassGetter < SuperClassGetter
  def instance_variable()
    "SubClass"
  end
end

# --------------------------------

class SuperClassGetterPrivate
  def super_class_method
    p instance_variable
  end

  private

  def instance_variable()
    "SuperClass"
  end
end

class SubClassGetterPrivate < SuperClassGetterPrivate
  private
  
  def instance_variable()
    "SubClass"
  end
end

p '---- SubClass ----'
subc = SubClass.new
subc.super_class_method

p '---- SubClassGetter ----'
subg = SubClassGetter.new
subg.super_class_method

p '---- SubClassGetterPrivate ----'
subgp = SubClassGetterPrivate.new
subgp.super_class_method
