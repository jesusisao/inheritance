class SuperClass:
  def __init__(self):
    self.instance_variable = "SuperClass"

  def super_class_method(self):
    print(self.instance_variable)

class SubClass(SuperClass):
  def __init__(self):
    super().__init__()
    self.instance_variable = "SubClass"

# ------------------------------

class SuperClassNameMangling:
  def __init__(self):
    self.__instance_variable = "SuperClass"

  def super_class_method(self):
    print(self.__instance_variable)

class SubClassNameMangling(SuperClassNameMangling):
  def __init__(self):
    super().__init__()
    self.__instance_variable = "SubClass"

# ------------------------------

class SuperClassGetter:
  def instance_variable(self):
    return "SuperClass"

  def super_class_method(self):
    print(self.instance_variable())

class SubClassGetter(SuperClassGetter):
  def instance_variable(self):
    return "SubClass"

# ------------------------------

class SuperClassNameManglingGetter:
  def __instance_variable(self):
    return "SuperClass"

  def super_class_method(self):
    print(self.__instance_variable())

class SubClassNameManglingGetter(SuperClassNameManglingGetter):
  def __instance_variable(self):
    return "SubClass"

print('---- SubClass ----')
sub = SubClass()
sub.super_class_method()

print('---- SubClassNameMangling ----')
subp = SubClassNameMangling()
subp.super_class_method()

print('---- SubClassGetter ----')
subg = SubClassGetter()
subg.super_class_method()

print('---- SubClassNameManglingGetter ----')
subpg = SubClassNameManglingGetter()
subpg.super_class_method()
