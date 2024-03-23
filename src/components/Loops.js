import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Loops() {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>Loops in C++</h1>
      <p>
        Loops are a fundamental control structure in programming that allow you to execute a block of code repeatedly. C++ provides several types of loops to meet different needs, including for loops, while loops, and do-while loops.
      </p>
      <br></br>
      <h2>For Loop</h2>
      <p>
        The for loop is a popular loop construct that is particularly useful when you know the number of iterations in advance. It consists of three parts: initialization, condition, and iteration expression.
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
#include <iostream>
int main() {
  // Basic for loop
  for (int i = 0; i < 5; ++i) {
    std::cout << "Iteration: " << i << std::endl;
  }

  // Using for loop with arrays
  int arr[] = {10, 20, 30, 40, 50};
  for (int i = 0; i < 5; ++i) {
    std::cout << arr[i] << " ";
  }
  std::cout << std::endl;

  // Range-based for loop (C++11 and later)
  for (int value : arr) {
    std::cout << value << " ";
  }
  std::cout << std::endl;

  return 0;
}
`}
      </SyntaxHighlighter>
      <br></br>
      <h2>While Loop</h2>
      <p>
        The while loop is used when the number of iterations is not known in advance, and the loop continues to execute as long as a specified condition is true.
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
#include <iostream>
int main() {
  int count = 0;
  while (count < 5) {
    std::cout << "Count: " << count << std::endl;
    ++count;
  }

  // Infinite loop (be careful!)
  int i = 0;
  while (true) {
    std::cout << "Infinite loop: " << i << std::endl;
    ++i;
    if (i == 10) {
      break; // Exit the loop
    }
  }

  return 0;
}
`}
      </SyntaxHighlighter>
      <br></br>
      <h2>Do-While Loop</h2>
      <p>
        The do-while loop is similar to the while loop, but it guarantees that the loop body will execute at least once, even if the condition is false.
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
#include <iostream>
int main() {
  int count = 5;
  do {
    std::cout << "Count: " << count << std::endl;
    ++count;
  } while (count < 5); // This condition is false, but the loop still executes once

  return 0;
}
`}
      </SyntaxHighlighter>
      <br></br>
      <h2>Loop Control Statements</h2>
      <p>
        C++ provides several statements to control the flow of loops, including:
      </p>
      <ul>
        <li><code>break</code>: Exits the current loop immediately.</li>
        <li><code>continue</code>: Skips the current iteration and moves to the next iteration.</li>
        <li><code>goto</code>: Transfers control to a labeled statement (not recommended as it can make code harder to understand).</li>
      </ul>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
#include <iostream>
int main() {
  for (int i = 0; i < 10; ++i) {
    if (i == 5) {
      continue; // Skip the iteration when i is 5
    }
    std::cout << "Value: " << i << std::endl;
  }

  int j = 0;
  while (true) {
    if (j == 5) {
      break; // Exit the loop when j is 5
    }
    std::cout << "Value: " << j << std::endl;
    ++j;
  }

  return 0;
}
`}
      </SyntaxHighlighter>
      <br></br>
      <h2>Nested Loops</h2>
      <p>
        Loops can be nested inside other loops, allowing you to create more complex control structures. Nested loops are often used for processing multidimensional data structures like matrices or for generating combinations.
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
#include <iostream>
int main() {
  // Nested for loops
  for (int i = 0; i < 3; ++i) {
    for (int j = 0; j < 3; ++j) {
      std::cout << "(" << i << ", " << j << ") ";
    }
    std::cout << std::endl;
  }

  // Nested while loops
  int x = 0, y = 0;
  while (x < 3) {
    while (y < 3) {
      std::cout << "(" << x << ", " << y << ") ";
      ++y;
    }
    std::cout << std::endl;
    y = 0; // Reset the inner loop counter
    ++x;
  }

  return 0;
}
`}
      </SyntaxHighlighter>
      <p>
        When working with nested loops, it's important to be mindful of performance and efficiency, as excessive nesting can lead to significant computational overhead.
      </p>
    </div>
  );
}

export default Loops;