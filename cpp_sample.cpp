#include <iostream>
class SuperClass {
// デフォルトだとprivate（クラス外からアクセス不可になる）
    std::string instanceVariable = "SuperClass";
    std::string instanceVariableSuperOnly = "instanceVariableSuperOnly";
public:
    void superClassMethod() {
        std::cout << instanceVariable << std::endl;
    }

    void callInstanceVariableSuperOnly() {
        std::cout << instanceVariableSuperOnly << std::endl;
    }
};

class SubClass : public SuperClass {
    std::string instanceVariable = "SubClass";
public:
    void subClassMethod() {
        std::cout << instanceVariable << std::endl;
    }
};

// -------------------------------

class SuperClassProtected {
protected:
    std::string instanceVariable = "SuperClass";
    std::string instanceVariableSuperOnly = "instanceVariableSuperOnly";
public:
    void superClassMethod() {
        std::cout << instanceVariable << std::endl;
    }

    void callInstanceVariableSuperOnly() {
        std::cout << instanceVariableSuperOnly << std::endl;
    }
};

class SubClassProtected : public SuperClassProtected {
protected:
    std::string instanceVariable = "SubClass";
public:
    void subClassMethod() {
        std::cout << instanceVariable << std::endl;
    }
};

int main()
{
  std::cout << "---- SubClass ----" << std::endl;
  SubClass sub;
  sub.superClassMethod();
  sub.subClassMethod();
  sub.callInstanceVariableSuperOnly();

  std::cout << "---- SubClassProtected ----" << std::endl;
  SubClassProtected subp;
  subp.superClassMethod();
  subp.subClassMethod();
  subp.callInstanceVariableSuperOnly();
  return 0;
}
