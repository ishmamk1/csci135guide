import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs, vscDarkPlus, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Variables() {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>Understanding Variables in C++</h1>
      <br></br>
      <p>Welcome to our C++ tutorial series! In this tutorial, we'll cover the fundamental concept of variables in C++. Understanding variables is essential for any aspiring C++ programmer, as they form the foundation for storing and manipulating data in your programs.</p>
        <br></br>
      <h3>What are Variables?</h3>
      <p>In C++, a variable is like a labeled container that holds data. It has a name and a type, and it reserves space in the computer's memory to store a value.</p>
      <br></br>
      <h3>Declaring Variables</h3>
      <p>Variables are declared using a specific syntax that includes the variable's data type and a unique identifier. This identifier allows you to refer to the variable throughout your program.</p>
      <br></br>
      <p>Here's how you declare variables in C++:</p>
      <SyntaxHighlighter language="c++" style={vscDarkPlus}>
        {`
data_type variable_name;
        `}
      </SyntaxHighlighter>
      <p>Where <strong>"data_type"</strong> specifies the type of data that the variable can hold, such as <code>int</code>, <code>float</code>, <code>char</code>, etc., and <strong>"variable_name"</strong> is the identifier or name of the variable.</p>
      
      <p>For example:</p>
      <SyntaxHighlighter language="c++" style={vscDarkPlus}>
        {`
int age;        // Declares a variable named 'age' of type 'int'
float price;    // Declares a variable named 'price' of type 'float'
char grade;     // Declares a variable named 'grade' of type 'char'
        `}
      </SyntaxHighlighter>

      <h3>Initializing Variables</h3>
      <br></br>
      <p>Variables in C++ can be initialized, meaning you can assign an initial value to them when they are declared. Here's how you can initialize variables:</p>
      <SyntaxHighlighter language="bash" style={vscDarkPlus}>
        {`
data_type variable_name = initial_value;
        `}
      </SyntaxHighlighter>
      <p>For example:</p>
      <SyntaxHighlighter language="bash" style={vscDarkPlus}>
        {`
int count = 0;          // Initializes 'count' with the value 0
float pi = 3.14;        // Initializes 'pi' with the value 3.14
char letter = 'A';      // Initializes 'letter' with the character 'A'
        `}
      </SyntaxHighlighter>
      
      <p>Initializing variables is optional but recommended, as it helps avoid potential bugs caused by using variables with uninitialized values.</p>

      <br></br>
      <br></br>
      <h2>Data Types in C++</h2>
      <br></br>
  <p>In C++, data types specify the type of data that a variable can hold. Each data type has a specific range of values and operations that can be performed on it. Here are the primary data types in C++:</p>
    <br></br>
  <h3>1. Integer Data Types:</h3>
  <p>Integer data types represent whole numbers without any fractional part. They can be classified based on their size and signedness:</p>
  <ul>
    <li><strong>int:</strong> Standard integer type typically representing a 32-bit signed integer.</li>
  </ul>
    <br></br>
  <h3>2. Floating-Point Data Types:</h3>
  <p>Floating-point data types represent numbers with a fractional part. They are used to store real numbers and can be classified based on their precision:</p>
  <ul>
    <li><strong>float:</strong> Single-precision floating-point type typically occupying 4 bytes.</li>
    <li><strong>double:</strong> Double-precision floating-point type providing higher precision, occupying 8 bytes.</li>
  </ul>
  <br></br>
  <h3>3. Character Data Types:</h3>
  <p>Character data types, or <strong>char</strong> are used to store individual characters. They are often encompassed in single quotations instead of double quotations.</p>
    <br></br>
  <h3>4. Boolean Data Type:</h3>
  <p>The <strong>bool</strong> data type represents boolean values, which can be either <strong>true</strong> or <strong>false</strong>. Boolean data types are commonly used in conditional expressions and logical operations.</p>
    <br></br>
  <h3>5. Derived Data Types:</h3>
  <p>C++ also supports derived data types, which are built upon the fundamental data types. These include:</p>
  <ul>
    <li><strong>Arrays:</strong> Collections of elements of the same data type.</li>
    <li><strong>Vectors:</strong> Dynamic arrays that can resize themselves automatically.</li>
    <li><strong>Pointers:</strong> Variables that store memory addresses of other variables.</li>
    <li><strong>References:</strong> Alias for existing variables.</li>
    <li><strong>Structures:</strong> User-defined data types that group related data under a single name.</li>
    <li><strong>Enumerations:</strong> User-defined data types consisting of named constants.</li>
  </ul>
    <br></br>
  <p>Understanding the different data types in C++ is crucial for proper memory allocation, efficient data manipulation, and writing robust programs.</p>
    <br></br>
    <br></br>

    <h1>Arithmetic Operations in C++</h1>
    <br></br>
    <p>Arithmetic operations in C++ involve basic mathematical calculations that can be performed on numeric data types. These operations include addition, subtraction, multiplication, division, and modulus.</p>
      <p>Here's a brief overview of arithmetic operators:</p>
      <br></br>
      <ul>
        <li><strong>Addition (+):</strong> Adds two operands.</li>
        <li><strong>Subtraction (-):</strong> Subtracts the second operand from the first.</li>
        <li><strong>Multiplication (*):</strong> Multiplies two operands.</li>
        <li><strong>Division (/):</strong> Divides the first operand by the second.</li>
        <li><strong>Modulus (%):</strong> Returns the remainder of the division.</li>
        <li><strong>Exponent (pow(n,exponent)):</strong> Returns the number (n) to the power of the exponent.</li>
      </ul>
      
      <SyntaxHighlighter language="c++" style={vscDarkPlus}>
        {`
// Addition
int sum = 5 + 3;   // sum will be 8

// Subtraction
int difference = 10 - 7;   // difference will be 3

// Multiplication
int product = 4 * 6;   // product will be 24

// Division
float quotient = 10.0 / 3;   // quotient will be approximately 3.3333

// Modulus (Remainder)
int remainder = 10 % 3;   // remainder will be 1

// Exponentiation (Power)
int result = pow(2, 3);   // result will be 8 (2 raised to the power of 3)
        `}
      </SyntaxHighlighter>


    </div>
    
  );
}

export default Variables;

