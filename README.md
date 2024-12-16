# Unexpected Null Return in Addition Function

This repository demonstrates a potential bug in a simple JavaScript addition function. The function `foo` is designed to add two numbers, but it returns `null` if either or both input parameters are null. This behavior might be unexpected, especially if the intention was to handle null values differently or to throw an error.

## Bug Description

The function `foo` returns null if either of its arguments (`a` or `b`) is null, even if the other argument is a valid number.  This behavior is potentially problematic because it could lead to unexpected null values being propagated through a larger application.

## Solution

The provided solution modifies the function to throw an error if either argument is null, instead of returning null. This provides better clarity and allows for more robust error handling within the application.