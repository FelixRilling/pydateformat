# pyslice

An implementation of pythons slice in JS

## Usage

```js
//py: "Abracadabra"[0]    =>"A"
slice("Abracadabra", 0) //=>"A"

//py: "Abracadabra"[-5]    =>"d"
slice("Abracadabra", -5) //=>"d"


//py: "Abracadabra"[0:5]     =>"Abrac"
slice("Abracadabra", 0, 5) //=>"Abrac"

//py: "Abracadabra"[3:-6]     =>"ac"
slice("Abracadabra", 3, -6) //=>"ac"

//py: "Abracadabra"[0:]          =>"Abracadabra"
slice("Abracadabra", 0, false) //=>"Abracadabra"

//py: "Abracadabra"[:-2]          =>"Abracadab"
slice("Abracadabra", false, -2) //=>"Abracadab"


//py: "Abracadabra"[0:6:1]      =>"Abracadab"
slice("Abracadabra", 0, 6, 1) //=>"Abracadab"

//py: "Abracadabra"[::-3]                =>"aacb"
slice("Abracadabra", false, false, -3) //=>"aacb"
```
