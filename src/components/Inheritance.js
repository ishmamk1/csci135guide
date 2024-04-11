import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Inheritance() {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>Inheritance in C++: Building Hierarchies of Classes</h1>
      <br></br>
      <p>
        Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a class to inherit properties and behaviors from another class. It enables code reuse, abstraction, and the creation of hierarchical relationships between classes. Let's explore the key components of inheritance in C++ and understand how to implement derived classes to extend and specialize existing functionality.
      </p>
      <br></br>
      <h2>1. Base Class and Derived Class</h2>
      <br></br>
      <p>
        Inheritance involves two types of classes: base class (also known as parent class) and derived class (also known as child class). The derived class inherits attributes and behaviors from the base class and can extend or override them to provide specialized functionality.
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
// Base class definition
class Shape {
  public:
    void draw() {
      std::cout << "Drawing a shape..." << std::endl;
    }
};

// Derived class definition
class Circle : public Shape {
  public:
    void draw() {
      std::cout << "Drawing a circle..." << std::endl;
    }
};
        `}
      </SyntaxHighlighter>
      <br></br>
      <h2>2. Access Specifiers: Public, Protected, and Private</h2>
      <br></br>
      <p>
        C++ provides three access specifiers—public, protected, and private—that control the visibility of base class members in derived classes. Public members are accessible to everyone, protected members are accessible to derived classes and friend classes, and private members are accessible only within the class itself.
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
class Base {
  public:
    int publicMember;

  protected:
    int protectedMember;

  private:
    int privateMember;
};

class Derived : public Base {
  // 'publicMember' and 'protectedMember' are accessible here
  // 'privateMember' is not accessible here
};
        `}
      </SyntaxHighlighter>
      <br></br>
      <h2>3. Inheritance Types: Single, Multiple, and Multilevel</h2>
      <br></br>
      <p>
        C++ supports different types of inheritance: single inheritance (where a derived class inherits from a single base class), multiple inheritance (where a derived class inherits from multiple base classes), and multilevel inheritance (where a derived class serves as a base class for another derived class).
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
// Single inheritance
class A {
  // ...
};

class B : public A {
  // ...
};

// Multiple inheritance
class C {
  // ...
};

class D {
  // ...
};

class E : public C, public D {
  // ...
};

// Multilevel inheritance
class F {
  // ...
};

class G : public F {
  // ...
};

class H : public G {
  // ...
};
        `}
      </SyntaxHighlighter>
      <br></br>
      <h2>4. Virtual Functions and Polymorphism</h2>
      <br></br>
      <p>
        Virtual functions enable polymorphism, allowing derived classes to provide their own implementation of a base class's member function. Polymorphism enables dynamic method binding, where the appropriate function is called based on the runtime type of the object, facilitating code flexibility and extensibility.
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
// Base class with a virtual function
class Animal {
  public:
    virtual void makeSound() {
      std::cout << "Animal makes a sound..." << std::endl;
    }
};

// Derived class with overridden virtual function
class Dog : public Animal {
  public:
    void makeSound() override {
      std::cout << "Dog barks..." << std::endl;
    }
};
        `}
      </SyntaxHighlighter>
    </div>
  );
}

export default Inheritance;
