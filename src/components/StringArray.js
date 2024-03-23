import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function StringArray() {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>Strings and Arrays in C++</h1>
      <br></br>
      <h2>Strings</h2>
      <p>In C++, a string is a sequence of characters stored as a data type. The Standard C++ library provides the <code>string</code> class, which simplifies string manipulation operations. Here are some common operations with strings:</p>
      <br></br>
      <h3>Declaration and Initialization</h3>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
#include <iostream>
#include <string>

int main() {
    // Declaration and Initialization
    std::string str1 = "Hello";         // Initialize with a string literal
    std::string str2("World");          // Initialize with a constructor

    // Concatenation
    std::string result = str1 + " " + str2;

    // Accessing Characters
    char first_char = str1[0];           // Access individual characters
    std::cout << "First character: " << first_char << std::endl;

    // Length
    int length = str1.length();          // Get the length of the string
    std::cout << "Length: " << length << std::endl;

    // Comparison
    if (str1 == str2) {
        std::cout << "Strings are equal" << std::endl;
    } else {
        std::cout << "Strings are not equal" << std::endl;
    }

    return 0;
}
        `}
      </SyntaxHighlighter>
      <br></br>
      <h3>Common String Functions</h3>
      <ul>
        <li><code>length()</code>: Returns the length of the string.</li>
        <li><code>substr(start, length)</code>: Returns a substring of the string.</li>
        <li><code>find(substring)</code>: Searches for a substring within the string.</li>
        <li><code>append(str)</code>: Appends another string to the current string.</li>
        <li><code>compare(str)</code>: Compares two strings lexicographically.</li>
      </ul>
      <br></br>
      <br></br>
      <h2>Arrays</h2>
      <p>An array in C++ is a collection of elements of the same data type stored in contiguous memory locations. Arrays provide a convenient way to store and access multiple values of the same type. Here's how you work with arrays in C++:</p>
      <br></br>
      <h3>Declaration and Initialization</h3>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
#include <iostream>

int main() {
    // Declaration and Initialization
    int arr1[5];                    // Declare an array of integers
    int arr2[5] = {1, 2, 3, 4, 5};  // Initialize with values

    // Accessing Elements
    int first_element = arr2[0];    // Access individual elements
    std::cout << "First element: " << first_element << std::endl;

    // Modifying Elements
    arr2[0] = 10;                   // Modify individual elements

    // Iterating Over Array
    for (int i = 0; i < 5; ++i) {
        std::cout << arr2[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}
        `}
      </SyntaxHighlighter>
      <br></br>
      <h3>Array Indexing</h3>
      <p>
        Arrays in C++ are indexed starting from 0. This means that the first element of an array has an index of 0, the second element has an index of 1, and so on. Here's an example:
      </p>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
#include <iostream>
int main() {
  int arr[] = {10, 20, 30, 40, 50};
  
  // Accessing elements using indices
  std::cout << "Element at index 0: " << arr[0] << std::endl; // Output: 10
  std::cout << "Element at index 2: " << arr[2] << std::endl; // Output: 30
  
  // Modifying elements using indices
  arr[1] = 25; // Modify the second element
  
  // Iterating over the array using indices
  for (int i = 0; i < 5; ++i) {
    std::cout << arr[i] << " ";
  }
  std::cout << std::endl;
  
  return 0;
}
`}
      </SyntaxHighlighter>
      <p>
        It's important to note that attempting to access an element outside the bounds of the array (e.g., <code>arr[5]</code> for an array of size 5) will result in undefined behavior, which can lead to crashes or incorrect results.
      </p>
      <br></br>
      <h3>Array Functions and Concepts</h3>
      <ul>
        <li><code>sizeof(arr) / sizeof(arr[0])</code>: Get the size (number of elements) of an array.</li>
        <li><code>std::sort(arr, arr + size)</code>: Sort an array using the standard library.</li>
        <li><code>std::reverse(arr, arr + size)</code>: Reverse the order of elements in an array.</li>
        <li><strong>Multidimensional Arrays</strong>: Arrays can have more than one dimension (e.g., 2D arrays for matrices).</li>
        <li><strong>Array Decay</strong>: When an array is passed to a function, it decays into a pointer to its first element.</li>
        <li><strong>Arrays vs. Vectors</strong>: C++ also provides a dynamic array implementation, called <code>std::vector</code>, which has additional features and flexibility.</li>
      </ul>


    </div>
  );
}

export default StringArray;
