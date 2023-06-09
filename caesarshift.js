function caesarShift(t="you,need,to,input,something", i=1, s=",") {
    t = t.split(s);
    for (var o = 0; o < i; o++) {
        var f = t.shift();
        t[t.length] = f;
    }
    return t.join(s)
}
