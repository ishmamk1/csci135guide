import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ClassesObjects() {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>Classes and Objects: Key Concepts in Object-Oriented Programming (OOP) with C++</h1>
      <br></br>
      <p>
        In object-oriented programming (OOP), classes and objects are essential building blocks that enable developers to model real-world entities, abstract data types, and their interactions. Let's delve into the fundamental components of classes and objects in C++ and understand their significance in creating modular, maintainable, and scalable code.
      </p>
      <br></br>
      <h2>1. Classes: Blueprint for Objects</h2>
      <br></br>
      <p>
        A class serves as a blueprint or template for creating objects with shared attributes and behaviors. It encapsulates data (attributes) and functions (member functions) that operate on that data, providing a clear and organized structure for modeling entities.
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
// Example of class declaration
class Car {
  public:
    // Member variables
    std::string brand;
    int year;

    // Member function
    void displayInfo() {
      std::cout << "Brand: " << brand << ", Year: " << year << std::endl;
    }
};
        `}
      </SyntaxHighlighter>
      <br></br>
      <h2>2. Objects: Instances of Classes</h2>
      <br></br>
      <p>
        An object represents a specific instance of a class, embodying its attributes and behaviors. Objects enable data abstraction and encapsulation, allowing for the creation of modular and reusable code. They facilitate the modeling of real-world entities as programmable entities within the software system.
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
// Example of object creation
Car myCar;
myCar.brand = "Toyota";
myCar.year = 2022;
myCar.displayInfo(); // Output: Brand: Toyota, Year: 2022
        `}
      </SyntaxHighlighter>
      <br></br>
      <h2>3. Constructors: Initializing Objects</h2>
      <br></br>
      <p>
        Constructors are special member functions used to initialize objects of a class. They are automatically invoked when an object is created and facilitate the initialization of member variables to predefined values. Constructors ensure that objects are properly initialized upon creation, providing a consistent and predictable state.
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
// Example of class with constructor
class Person {
  public:
    std::string name;
    int age;

    // Constructor
    Person(std::string n, int a) {
      name = n;
      age = a;
    }
};
        `}
      </SyntaxHighlighter>
      <br></br>
      <h2>4. Member Functions: Behavior of Objects</h2>
      <br></br>
      <p>
        Member functions are functions defined within a class that operate on the class's data members. They encapsulate the behavior of objects and enable interaction with them by performing various operations and computations. Member functions facilitate code reuse, modularity, and abstraction, enhancing the maintainability and readability of the codebase.
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
// Example of class with member functions
class Circle {
  private:
    double radius;

  public:
    // Constructor
    Circle(double r) {
      radius = r;
    }

    // Member function to calculate area
    double calculateArea() {
      return 3.14 * radius * radius;
    }
};
        `}
      </SyntaxHighlighter>
    </div>
  );
}

export default ClassesObjects;
