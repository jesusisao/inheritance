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
    std::string instanceVariable() {
        return "SuperClass";
    }
public:
    void superClassMethod() {
        std::cout << instanceVariable() << std::endl;
    }
};

class SubClassGetter : public SuperClassGetter {
    std::string instanceVariable() {
        return "SubClass";
    }
};

// -------------------------------

class SuperClassProtectedGetter {
protected:
    std::string instanceVariable() {
        return "SuperClass";
    }
public:
    void superClassMethod() {
        std::cout << instanceVariable() << std::endl;
    }
};

class SubClassProtectedGetter : public SuperClassProtectedGetter {
protected:
    std::string instanceVariable() {
        return "SubClass";
    }
};

// -------------------------------

class SuperClassProtectedGetterOverride {
protected:
    virtual std::string instanceVariable() {
        return "SuperClass";
    }
public:
    void superClassMethod() {
        std::cout << instanceVariable() << std::endl;
    }
};

class SubClassProtectedGetterOverride : public SuperClassProtectedGetterOverride {
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

    std::cout << "---- SubClassProtectedGetter ----" << std::endl;
    SubClassProtectedGetter subpg;
    subpg.superClassMethod();

    std::cout << "---- SubClassProtectedGetterOverride ----" << std::endl;
    SubClassProtectedGetterOverride subpgo;
    subpgo.superClassMethod();

    return 0;
}
