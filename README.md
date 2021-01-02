# aacm
aacm makes components and styles for you.

## Installation
aacm is meant to be installed globally, then used from your app's src/ directory (or equivalent). 

`$ sudo npm i -g aacm`

-----------------------------------------

## Syntax

`aacm [flags] <ComponentName>`

For example, 

`aacm ItemDetail`

gives you...

`./components/ItemDetail/ItemDetail.jsx`

```
import React from 'react';

import './ItemDetail.scss';

function ItemDetail() {
  return (
    <div className="ItemDetail">

    </div>
  );
}

export default ItemDetail;
```

and

`./components/ItemDetail/ItemDetail.scss`

```
.ItemDetail {
    
}
```

Now multiply that by every component you'll ever create and you've saved yourself some time. =)

-----------------------------------------

## Multiple Components

You can pass in multiple component names at once, like so...

`aacm Thing1 Thing2 Thing3`

This will create:

```
./components/Thing1/Thing1.jsx
./components/Thing1/Thing1.scss
./components/Thing2/Thing2.jsx
./components/Thing2/Thing2.scss
./components/Thing3/Thing3.jsx
./components/Thing3/Thing3.scss
```

according to the flags.

-----------------------------------------

## Flags

|Flag              | Effect                                   |
| ---------------- | ---------------------------------------- |
| -c, --class      | Generates class components               |
|                  | Uses modern syntax                       |
| -f, --functional | Generates functional components          |
|                  | This is the default                      |
| -i, --asi        | Confidence Mode                          |
|                  | Use Automatic Semicolon Insertion        |
| -k, --kebab      | Makes the generated directories          |
|                  | and file names use kebab-case            |
| --css            | Generates CSS                            |
|                  | (default is SCSS)                        |
| --old-class      | Generates class components               |
|                  | Uses classic syntax                      |
| --features       | Outputs to features/                     |
|                  | (default is components/)              |

Any of these may be combined. 

For example, `aacm ItemDetail -ik`
generates

`./components/item-detail/item-detail.scss`

and

`./components/item-detail/item-detail.jsx` (semicolon free).
