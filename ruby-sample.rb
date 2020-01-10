class SuperClass
  def initialize()
    @instance_variable = "SuperClass"
    @instance_variable_super_only = "SuperClassOnly"
  end

  def super_class_method
    p @instance_variable
  end

  def call_instance_variable_super_only
    p @instance_variable_super_only
  end
end

class SubClass < SuperClass
  def initialize()
    super()
    @instance_variable = "SubClass"
  end
  
  def sub_class_method
    p @instance_variable
  end
end

subc = SubClass.new
subc.super_class_method
subc.sub_class_method
subc.call_instance_variable_super_only
