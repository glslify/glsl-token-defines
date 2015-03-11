const tokenize = require('glsl-tokenizer')
const test     = require('tape')
const defines  = require('./')

test('glsl-token-defines', function(t) {
  var tokens = tokenize([
    '#define PI 3.14',
    '#define TAU (PI*2.)',
    '#define VEC vec3(1.)',
    '#define EMPTY',
    'void main() {',
    '  gl_FragColor = vec4(vec3(PI, 1.));',
    '}'
  ].join('\n'))

  var defs = defines(tokens)

  t.equal(defs.PI, '3.14', 'PI')
  t.equal(defs.TAU, '(PI*2.)', 'TAU')
  t.equal(defs.VEC, 'vec3(1.)', 'VEC')
  t.equal(defs.EMPTY, '', 'EMPTY')
  t.end()
})
