import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Recursion() {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>Understanding Recursion in C++: A Deep Dive</h1>
      <br></br>
      <p>
        Recursion is a powerful programming technique where a function calls itself to solve a problem. It provides an elegant solution for tasks that can be broken down into smaller, similar subproblems. In this tutorial, we'll explore the fundamentals of recursion, including how it works, when to use it, and common examples to illustrate its application.
      </p>
      <br></br>
      <h2>1. Basic Concepts</h2>
      <br></br>
      <p>
        In recursion, a function calls itself with modified input parameters to solve smaller instances of the original problem. Each recursive call works towards a base case, which is a termination condition that prevents infinite recursion. Understanding the base case is crucial to prevent stack overflow errors.
      </p>
      <br></br>
      <h2>2. Structure of a Recursive Function</h2>
      <br></br>
      <p>
        A recursive function typically consists of two components:
        <ul>
          <li><strong>Base Case:</strong> The terminating condition that stops the recursion. It defines the smallest valid input for the function.</li>
          <li><strong>Recursive Case:</strong> The part of the function where it calls itself with modified parameters to solve a smaller instance of the problem.</li>
        </ul>
      </p>
      <br></br>
      <h2>3. Example: Factorial Function</h2>
      <br></br>
      <p>
        One of the classic examples of recursion is the factorial function, which calculates the product of all positive integers up to a given number. The factorial of n, denoted as n!, is defined as n * (n - 1) * (n - 2) * ... * 1.
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
// Recursive factorial function
int factorial(int n) {
  // Base case: If n is 0 or 1, return 1
  if (n == 0 || n == 1) {
    return 1;
  }
  // Recursive case: Call factorial function with n - 1
  return n * factorial(n - 1);
}
        `}
      </SyntaxHighlighter>
      <br></br>
      <p>
        In this example, the base case is when n is 0 or 1, where the function returns 1. The recursive case calculates the factorial of n by multiplying it with the factorial of (n - 1), effectively reducing the problem size with each recursive call.
      </p>
      <br></br>
      <h2>4. Example: Fibonacci Sequence</h2>
      <br></br>
      <p>
        Another common example of recursion is the Fibonacci sequence, where each number is the sum of the two preceding ones, starting from 0 and 1. The sequence begins: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
// Recursive Fibonacci function
int fibonacci(int n) {
  // Base case: If n is 0 or 1, return n
  if (n == 0 || n == 1) {
    return n;
  }
  // Recursive case: Call fibonacci function with n - 1 and n - 2
  return fibonacci(n - 1) + fibonacci(n - 2);
}
        `}
      </SyntaxHighlighter>
      <br></br>
      <p>
        In the Fibonacci function, the base case returns n when n is 0 or 1. For other values of n, the function recursively calculates the Fibonacci numbers by adding the results of the two preceding numbers (n - 1) and (n - 2).
      </p>
      <br></br>
      <h2>5. Advantages and Disadvantages</h2>
      <br></br>
      <p>
        Recursion offers several advantages, including simplicity, readability, and the ability to solve complex problems concisely. However, it may lead to performance issues and stack overflow errors if not implemented carefully. Iterative solutions may be more efficient in some cases, especially for large problem sizes.
      </p>
      <br></br>
      <h2>6. When to Use Recursion</h2>
      <br></br>
      <p>
        Recursion is suitable for problems that exhibit recursive substructure, such as tree traversals, permutations, and combinations. It is also helpful for tasks where the problem size reduces with each step, allowing for a divide-and-conquer approach.
      </p>
    </div>
  );
}

export default Recursion;
