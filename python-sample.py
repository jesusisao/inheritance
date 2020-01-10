class SuperClass:
  def __init__(self):
    self.instance_variable = "SuperClass"
    self.instance_variable_super_only = "SuperClassOnly"

  def super_class_method(self):
    print(self.instance_variable)

  def call_instance_variable_super_only(self):
    print(self.instance_variable_super_only)

class SubClass(SuperClass):
  def __init__(self):
    super().__init__()
    self.instance_variable = "SubClass"

  def sub_class_method(self):
    print(self.instance_variable)

sub = SubClass()
sub.super_class_method()
sub.sub_class_method()
sub.call_instance_variable_super_only()
