import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs, vscDarkPlus, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function InputConditional() {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>Input/Output and Conditionals in C++</h1>
        <br></br>
      <h2>Input and Output (I/O) Operations</h2>
      <br></br>
      <p>In C++, input and output operations are facilitated through the use of <code>iostream</code> library, which provides the <code>cin</code> and <code>cout</code> objects for handling input from the user and output to the console, respectively.</p>
      <br></br>
      <h3>Reading Input:</h3>
      <p>To read input from the user, you use the <code>cin</code> object along with the extraction operator (<code>&gt;&gt;</code>). Here's how you can read input into variables:</p>
      <SyntaxHighlighter language="c++" style={vscDarkPlus}>
        {`
#include <iostream>

int main() {
    int num;
    std::cout << "Enter a number: ";
    std::cin >> num;
    std::cout << "You entered: " << num << std::endl;
    return 0;
}
        `}
      </SyntaxHighlighter>
        <br></br>
      <h3>Writing Output:</h3>
      <p>To display output to the console, you use the <code>cout</code> object along with the insertion operator (<code>&lt;&lt;</code>). Here's how you can print output:</p>
      <SyntaxHighlighter language="c++" style={vscDarkPlus}>
        {`
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
        `}
      </SyntaxHighlighter>
        <br></br>
      <h2>Conditionals and Decision-Making</h2>
      <p>In C++, decision-making is accomplished using conditional statements, which allow you to execute different blocks of code based on specified conditions. The primary conditional statements in C++ are:</p>
      <br></br>
      <h3>The if Statement:</h3>
      <p>The <code>if</code> statement allows you to execute a block of code if a specified condition is true. Here's an example:</p>
      <SyntaxHighlighter language="c++" style={vscDarkPlus}>
        {`
#include <iostream>

int main() {
    int num = 10;
    if (num > 5) {
        std::cout << "Number is greater than 5" << std::endl;
    }
    return 0;
}
        `}
      </SyntaxHighlighter>
        <br></br>
      <h3>The else if Statement</h3>
      <p>The <code>else if</code> statement provides an alternative condition to check if the preceding <code>if</code> condition is false. It allows for multiple conditional checks within the same block of code. Here's an example:</p>
      <SyntaxHighlighter language="c++" style={vscDarkPlus}>
        {`
#include <iostream>

int main() {
    int num = 10;
    if (num > 10) {
        std::cout << "Number is greater than 10" << std::endl;
    } else if (num < 10) {
        std::cout << "Number is less than 10" << std::endl;
    } else {
        std::cout << "Number is equal to 10" << std::endl;
    }
    return 0;
}
        `}
      </SyntaxHighlighter>
        <br></br>
        <h3>The else Statement</h3>
<p>The <code>else</code> statement is used in conjunction with the <code>if</code> statement to execute a block of code when the condition specified in the <code>if</code> statement evaluates to false. It provides an alternative path of execution when the condition is not met.</p>
<p>Here's the syntax of the <code>else</code> statement:</p>
<SyntaxHighlighter language="c++" style={vscDarkPlus}>
  {`
if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}
  `}
</SyntaxHighlighter>
<p>The <code>else</code> statement does not have a condition of its own. It simply executes the block of code associated with it if the condition of the preceding <code>if</code> statement evaluates to false.</p>
    <br></br>
      <h3>Nested Branches: Nested if Statements</h3>
      <p>In C++, you can nest <code>if</code> statements within other <code>if</code> or <code>else if</code> statements to handle complex decision-making scenarios. Here's an example:</p>
      <SyntaxHighlighter language="c++" style={vscDarkPlus}>
        {`
#include <iostream>

int main() {
    int num = 10;
    if (num > 5) {
        if (num < 15) {
            std::cout << "Number is between 5 and 15" << std::endl;
        }
    }
    return 0;
}
        `}
      </SyntaxHighlighter>
        <br></br>
      <p>Understanding input/output operations and conditionals is essential for building interactive and dynamic C++ programs.</p>
    </div>
    
  );
}

export default InputConditional;