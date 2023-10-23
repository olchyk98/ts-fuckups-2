// Background:
// As a Northlight team developer, you aim to:
// 1. Provide autocompletion and type-checking for color values.
// 2. Allow values like "red.200" and "red".
// 3. Disallow unsupported color tokens and variants (e.g., "200").
//
// Use types "ColorName" and "ColorVariant" to create
// the type "Color".
//
// For example:
// -> 'red.400' (VALID)
// -> 'red' (VALID)
// -> 'black' (VALID)
// -> 200 (INVALID)
//
// How would do that?
// NOTE: The example is adopted from the Chakra UI library codebase.

type ColorName =
  | 'red'
  | 'blue'
  | 'yellow'
  | 'black'

type ColorVariant =
  | 50
  | 100
  | 200

// TODO: Replace "unknown" with a type.
type Color = unknown

export const color: Color = 'red.200'
