import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Functions() {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>Functions in C++</h1>
      <p>
        Functions are fundamental building blocks of a program, allowing you to encapsulate a set of instructions into reusable units. C++ provides a rich set of features for defining and using functions.
      </p>
      <br />
      <h2>Function Declaration and Definition</h2>
      <p>
        In C++, you need to declare a function before you can use it. The function declaration specifies the function's return type, name, and parameters (if any).
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
// Function declaration
int add(int a, int b);

int main() {
  // Function call
  int result = add(2, 3);
  return 0;
}

// Function definition
int add(int a, int b) {
  return a + b;
}
`}
      </SyntaxHighlighter>
      <br />
      <h2>Function Parameters</h2>
      <p>
        Functions can accept parameters, which are values passed into the function when it is called. C++ supports call-by-value and call-by-reference parameter passing.
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
// Call-by-value
void incrementByValue(int x) {
  x++; // This only modifies the local copy
}

// Call-by-reference
void incrementByReference(int& x) {
  x++; // This modifies the original variable
}

int main() {
  int a = 5;
  incrementByValue(a); // a is still 5
  std::cout << "Call-by-value: " << a << std::endl;

  int b = 5;
  incrementByReference(b); // b is now 6
  std::cout << "Call-by-reference: " << b << std::endl;

  return 0;
}
`}
      </SyntaxHighlighter>
      <br />
      <h2>Function Overloading</h2>
      <p>
        C++ allows you to define multiple functions with the same name, as long as their parameter lists differ. This is known as function overloading.
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
int add(int a, int b) {
  return a + b;
}

double add(double a, double b) {
  return a + b;
}

int main() {
  std::cout << add(2, 3) << std::endl; // Calls int add(int, int)
  std::cout << add(2.5, 3.7) << std::endl; // Calls double add(double, double)
  return 0;
}
`}
      </SyntaxHighlighter>
      <br />
      <h2>Example: Finding Prime Numbers</h2>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
#include <iostream>
#include <cmath>

bool isPrime(int n) {
  if (n <= 1) {
    return false;
  }
  for (int i = 2; i <= sqrt(n); ++i) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

int main() {
  int num;
  std::cout << "Enter a number: ";
  std::cin >> num;

  if (isPrime(num)) {
    std::cout << num << " is a prime number." << std::endl;
  } else {
    std::cout << num << " is not a prime number." << std::endl;
  }

  return 0;
}
`}
      </SyntaxHighlighter>
      <p>
        In this example, the <code>isPrime</code> function checks if a given number is prime by iterating from 2 to the square root of the number and checking for divisibility. The function is then called in the <code>main</code> function to determine if a user-entered number is prime or not.
      </p>
      <br />
      <h2>Example: Printing Shapes with Asterisks</h2>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
#include <iostream>

void printTriangle(int height) {
  for (int i = 1; i <= height; ++i) {
    for (int j = 1; j <= i; ++j) {
      std::cout << "* ";
    }
    std::cout << std::endl;
  }
}

void printRectangle(int width, int height) {
  for (int i = 1; i <= height; ++i) {
    for (int j = 1; j <= width; ++j) {
      std::cout << "* ";
    }
    std::cout << std::endl;
  }
}

int main() {
  int choice, size1, size2;
  std::cout << "Select a shape:" << std::endl;
  std::cout << "1. Triangle" << std::endl;
  std::cout << "2. Rectangle" << std::endl;
  std::cin >> choice;

  switch (choice) {
    case 1:
      std::cout << "Enter the height of the triangle: ";
      std::cin >> size1;
      printTriangle(size1);
      break;
    case 2:
      std::cout << "Enter the width and height of the rectangle: ";
      std::cin >> size1 >> size2;
      printRectangle(size1, size2);
      break;
    default:
      std::cout << "Invalid choice." << std::endl;
  }

  return 0;
}
`}
      </SyntaxHighlighter>
      <p>
        This example demonstrates the use of functions to print shapes like triangles and rectangles using asterisks. The <code>printTriangle</code> and <code>printRectangle</code> functions take the necessary dimensions as parameters and print the corresponding shape using nested loops. The <code>main</code> function prompts the user to choose a shape and provides the required input for dimensions.
      </p>
    </div>
  );
}

export default Functions;