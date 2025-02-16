# Number System Conversion Calculator

A web-based calculator that converts numbers between Binary, Hexadecimal, Octal, and Decimal number systems in real-time.

## Features

- Real-time conversion between four number systems:
  - Binary (Base-2)
  - Hexadecimal (Base-16)
  - Octal (Base-8)
  - Decimal (Base-10)
- Smart button enabling/disabling based on selected number system
- Responsive design that works on all devices
- Intuitive user interface

## How It Works

### 1. Input Selection
Users must first select their desired input number system by clicking one of these buttons:
- Binary
- Hexadecimal
- Octal
- Decimal

### 2. Smart Button System
The calculator automatically enables only valid buttons for each number system:

| Number System | Enabled Buttons |
|--------------|-----------------|
| Binary       | 0, 1           |
| Octal        | 0-7            |
| Decimal      | 0-9            |
| Hexadecimal  | 0-9, A-F       |

### 3. Conversion Process
- Enter numbers in the selected input field
- Other fields automatically display the converted values
- Conversions happen in real-time as you type

## Usage Examples

### Binary to Other Systems
1. Click "Binary" button
2. Enter: 1010
3. Results show automatically:
   - Decimal: 10
   - Hexadecimal: A
   - Octal: 12

### Decimal to Other Systems
1. Click "Decimal" button
2. Enter: 15
3. Results show automatically:
   - Binary: 1111
   - Hexadecimal: F
   - Octal: 17

## Additional Features

- **Clear Button:** Resets all input/output fields
- **Delete Button:** Removes the last entered digit
- **Equal Button:** Finalizes the conversion
- **Error Prevention:** Only allows valid inputs for each number system

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Responsive Design

## Installation

1. Clone the repository:
   
    bash
    git clone https://github.com/ali1845/number-system-conversion.git
   
3. Open `index.html` in your web browser

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: https://github.com/ali1845/number-system-conversion.git
