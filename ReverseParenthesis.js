/*
-------------------------------------------------
📝 Problem:Reverse Parenthesis
-------------------------------------------------
Given a string that contains properly nested parentheses, return the decoded version of the string using the following rules:

All characters inside each pair of parentheses should be reversed.
Parentheses should be removed from the final result.
If parentheses are nested, the innermost pair should be reversed first, and then its result should be included in the reversal of the outer pair.
Assume all parentheses are evenly balanced and correctly nested.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/
function decode(s) {
    const stack = [];

    for (const ch of s) {
        if (ch !== ')') {
            stack.push(ch);
        }
        else {
            const buffer = [];
            while (stack.length > 0) {
                let top = stack.pop()
                if (top === '(') break;
                buffer.push(top)
            }
            for (const c of buffer) stack.push(c);
        }
    }
    return stack.join("")
}


// -============================================================
function decode_lastIndex(s) {
    while (s.includes('(')) {
        const open = s.lastIndexOf('(');         // innermost '('
        const close = s.indexOf(')', open);     // the matching ')'
        const inner = s.slice(open + 1, close);
        const rev = inner.split('').reverse().join('');
        s = s.slice(0, open) + rev + s.slice(close + 1);
    }
    return s;
}

// tests
console.log(decode_lastIndex("(f(b(dc)e)a)"));
console.log(decode_lastIndex("((is?)(a(t d)h)e(n y( uo)r)aC)"));
console.log(decode_lastIndex("f(Ce(re))o((e(aC)m)d)p"));
