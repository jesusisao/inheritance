#include <iostream>

class SuperClass {
// デフォルトだとprivate（クラス外からアクセス不可になる）
    std::string instanceVariable = "SuperClass";
public:
    void superClassMethod() {
        std::cout << instanceVariable << std::endl;
    }
};

class SubClass : public SuperClass {
    std::string instanceVariable = "SubClass";
};

// -------------------------------

class SuperClassProtected {
protected:
    std::string instanceVariable = "SuperClass";
public:
    void superClassMethod() {
        std::cout << instanceVariable << std::endl;
    }
};

class SubClassProtected : public SuperClassProtected {
protected:
    std::string instanceVariable = "SubClass";
};

// -------------------------------

class SuperClassGetter {
protected:
    std::string instanceVariable() {
        return "SuperClass";
    }
public:
    void superClassMethod() {
        std::cout << instanceVariable() << std::endl;
    }
};

class SubClassGetter : public SuperClassGetter {
protected:
    std::string instanceVariable() {
        return "SubClass";
    }
};

// -------------------------------

class SuperClassGetterOverride {
protected:
    virtual std::string instanceVariable() {
        return "SuperClass";
    }
public:
    void superClassMethod() {
        std::cout << instanceVariable() << std::endl;
    }
};

class SubClassGetterOverride : public SuperClassGetterOverride {
protected:
    std::string instanceVariable() override {
        return "SubClass";
    }
};

int main()
{
    std::cout << "---- SubClass ----" << std::endl;
    SubClass sub;
    sub.superClassMethod();

    std::cout << "---- SubClassProtected ----" << std::endl;
    SubClassProtected subp;
    subp.superClassMethod();

    std::cout << "---- SubClassGetter ----" << std::endl;
    SubClassGetter subg;
    subg.superClassMethod();

    std::cout << "---- SubClassGetterOverride ----" << std::endl;
    SubClassGetterOverride subgo;
    subgo.superClassMethod();

    return 0;
}
