# el-canvas

<img width="100px" align="middle" src="https://raw.githubusercontent.com/GYPeng/elem-canvas/a8127bfc15e5445fbe8678ff72608dfb8b96a3dc/logo.svg"/>

Canvas rendering library, Sprite manipulation of canvas

## hello world

```html
<div id="app"><div></div></div>
```

```
  yarn add elem-canvas

    or

  npm i elem-canvas
```

```js
import { Root, Sprite } from "elem-canvas";

const app = new Root(document.getElementById("app"));

const root = new Sprite({
  x: (window.innerWidth - 300) / 2,
  y: (window.innerHeight - 300) / 2,
  width: 300,
  height: 300,
  borderRightWidth: 100,
  borderRightColor: "#008480",
  borderBottomWidth: 100,
  borderBottomColor: "#006868",
  children: new Sprite({
    width: 200,
    height: 200,
    borderRightWidth: 100,
    borderRightColor: "#00baaf",
    borderBottomWidth: 100,
    borderBottomColor: "#009b9a",
    children: new Sprite({
      width: 100,
      height: 100,
      bgColor: "#00cfcd",
    }),
  }),
});

app.append(root);
```

# nodes

1. Sprite
2. Scrollbox
3. Input
4. Label

# Sprite

## attributes

tips: with "?" mark this field as optional

| name               | value                              | describe                                                                                                                                                                                       |
| ------------------ | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id?                | string                             | id selector, the only one in the document                                                                                                                                                      |
| x?                 | number                             | In absolute layout, x is the X-axis offset relative to the upper left corner of the parent node. In a fixed layout, x is the X-axis offset relative to the upper-left corner of the Root node. |
| y?                 | number                             | with x 👆                                                                                                                                                                                      |
| width              | number                             |                                                                                                                                                                                                |
| height             | number                             |                                                                                                                                                                                                |
| bgColor?           | color string                       | either bgImage or bgColor                                                                                                                                                                      |
| bgImage?           | image url                          | either bgImage or bgColor, note the CROS                                                                                                                                                       |
| overflowY?         | hidden or visible                  | default: hidden                                                                                                                                                                                |
| overflowX?         | hidden or visible                  | default: hidden                                                                                                                                                                                |
| children?          | Array<Sprite \| Label \| Function> | child nodes                                                                                                                                                                                    |
| borderLeftColor?   | color string                       |                                                                                                                                                                                                |
| borderLeftWidth?   | number                             |                                                                                                                                                                                                |
| borderTopColor?    | color string                       |                                                                                                                                                                                                |
| borderTopWidth?    | number                             |                                                                                                                                                                                                |
| borderRightColor?  | color string                       |                                                                                                                                                                                                |
| borderRightWidth?  | number                             |                                                                                                                                                                                                |
| borderBottomColor? | color string                       |                                                                                                                                                                                                |
| borderBottomWidth? | number                             |                                                                                                                                                                                                |
| className?         | string or string[]                 | class selector                                                                                                                                                                                 |
| position?          | absolute or fixed                  | absolute: positioning relative to the parent; fixed: location relative to Root                                                                                                                 |
| visible?           | boolean                            | show and hide                                                                                                                                                                                  |
| zIndex?            | number                             | drawing order; default: 0                                                                                                                                                                      |

## methods:

| name                   | argument                                      | describe                                                                                                   |
| ---------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| on                     | (eventname: string, callback: Function)       | binding event; callback arguments: (this, event)                                                           |
| off                    | (eventname: string, callback: Function)       | unbinding event                                                                                            |
| append                 | (node: Sprite \| Input \| Scrollbox \| Label) | insert child node                                                                                          |
| remove                 | (node: Sprite \| Input \| Scrollbox \| Label) | remove child node                                                                                          |
| getElementById         | (id: string)                                  | returns the node or null                                                                                   |
| getElementsByClassName | (class: string)                               | returns the nodes or null                                                                                  |
| attr                   | (firstArgv: string \| object, value?: any)    | Modify the attribute value. If properties are not modified using this method, rendering may not be updated |

# Label

## attributes

tips: with "?" mark this field as optional

| name            | value                         | describe |
| --------------- | ----------------------------- | -------- |
| text?           | string                        |          |
| color?          | color string                  |          |
| fontFamily?     | string                        |          |
| bold?           | boolean                       |          |
| fontSize?       | number                        |
| stroke? boolean |                               |
| lineHeight?     | number                        |          |
| textAlign?      | "left" or "center" or "right" |          |
| underLine?      | color string                  |          |

## methods

| name                   | argument                                   | describe                                                                                                   |
| ---------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| getElementById         | (id: string)                               | returns the node or null                                                                                   |
| getElementsByClassName | (class: string)                            | returns the nodes or null                                                                                  |
| attr                   | (firstArgv: string \| object, value?: any) | Modify the attribute value. If properties are not modified using this method, rendering may not be updated |

# Input

## attributes

tips: with "?" mark this field as optional

| name               | value                              | describe                                                                                                                                                                                       |
| ------------------ | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| placeholder?       | string                             |                                                                                                                                                                                                |
| value?             | string                             |                                                                                                                                                                                                |
| id?                | string                             | id selector, the only one in the document                                                                                                                                                      |
| x?                 | number                             | In absolute layout, x is the X-axis offset relative to the upper left corner of the parent node. In a fixed layout, x is the X-axis offset relative to the upper-left corner of the Root node. |
| y?                 | number                             | with x 👆                                                                                                                                                                                      |
| width              | number                             |                                                                                                                                                                                                |
| height             | number                             |                                                                                                                                                                                                |
| bgColor?           | color string                       | either bgImage or bgColor                                                                                                                                                                      |
| bgImage?           | image url                          | either bgImage or bgColor, note the CROS                                                                                                                                                       |
| overflowY?         | hidden or visible                  | default: hidden                                                                                                                                                                                |
| overflowX?         | hidden or visible                  | default: hidden                                                                                                                                                                                |
| children?          | Array<Sprite \| Label \| Function> | child nodes                                                                                                                                                                                    |
| borderLeftColor?   | color string                       |                                                                                                                                                                                                |
| borderLeftWidth?   | number                             |                                                                                                                                                                                                |
| borderTopColor?    | color string                       |                                                                                                                                                                                                |
| borderTopWidth?    | number                             |                                                                                                                                                                                                |
| borderRightColor?  | color string                       |                                                                                                                                                                                                |
| borderRightWidth?  | number                             |                                                                                                                                                                                                |
| borderBottomColor? | color string                       |                                                                                                                                                                                                |
| borderBottomWidth? | number                             |                                                                                                                                                                                                |
| className?         | string or string[]                 | class selector                                                                                                                                                                                 |
| position?          | absolute or fixed                  | absolute: positioning relative to the parent; fixed: location relative to Root                                                                                                                 |
| visible?           | boolean                            | show and hide                                                                                                                                                                                  |
| zIndex?            | number                             | drawing order; default: 0                                                                                                                                                                      |

## methods:

| name                   | argument                                   | describe                                                                                                   |
| ---------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| on                     | (eventname: string, callback: Function)    | binding event; callback arguments: (this, event)                                                           |
| off                    | (eventname: string, callback: Function)    | unbinding event                                                                                            |
| getElementById         | (id: string)                               | returns the node or null                                                                                   |
| getElementsByClassName | (class: string)                            | returns the nodes or null                                                                                  |
| attr                   | (firstArgv: string \| object, value?: any) | Modify the attribute value. If properties are not modified using this method, rendering may not be updated |

# Scrollbox

## attributes

tips: with "?" mark this field as optional

| name               | value                              | describe                                                                                                                                                                                       |
| ------------------ | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| contentWidth       | number                             | content area width                                                                                                                                                                             |
| contentHeight      | number                             | content area height                                                                                                                                                                            |
| id?                | string                             | id selector, the only one in the document                                                                                                                                                      |
| x?                 | number                             | In absolute layout, x is the X-axis offset relative to the upper left corner of the parent node. In a fixed layout, x is the X-axis offset relative to the upper-left corner of the Root node. |
| y?                 | number                             | with x 👆                                                                                                                                                                                      |
| width              | number                             |                                                                                                                                                                                                |
| height             | number                             |                                                                                                                                                                                                |
| bgColor?           | color string                       | either bgImage or bgColor                                                                                                                                                                      |
| bgImage?           | image url                          | either bgImage or bgColor, note the CROS                                                                                                                                                       |
| overflowY?         | hidden or visible                  | default: hidden                                                                                                                                                                                |
| overflowX?         | hidden or visible                  | default: hidden                                                                                                                                                                                |
| children?          | Array<Sprite \| Label \| Function> | child nodes                                                                                                                                                                                    |
| borderLeftColor?   | color string                       |                                                                                                                                                                                                |
| borderLeftWidth?   | number                             |                                                                                                                                                                                                |
| borderTopColor?    | color string                       |                                                                                                                                                                                                |
| borderTopWidth?    | number                             |                                                                                                                                                                                                |
| borderRightColor?  | color string                       |                                                                                                                                                                                                |
| borderRightWidth?  | number                             |                                                                                                                                                                                                |
| borderBottomColor? | color string                       |                                                                                                                                                                                                |
| borderBottomWidth? | number                             |                                                                                                                                                                                                |
| className?         | string or string[]                 | class selector                                                                                                                                                                                 |
| position?          | absolute or fixed                  | absolute: positioning relative to the parent; fixed: location relative to Root                                                                                                                 |
| visible?           | boolean                            | show and hide                                                                                                                                                                                  |
| zIndex?            | number                             | drawing order; default: 0                                                                                                                                                                      |

## methods:

| name                   | argument                                      | describe                                                                                                   |
| ---------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| on                     | (eventname: string, callback: Function)       | binding event; callback arguments: (this, event)                                                           |
| off                    | (eventname: string, callback: Function)       | unbinding event                                                                                            |
| append                 | (node: Sprite \| Label \| Input \| Scrollbox) | insert child node                                                                                          |
| remove                 | (node: Sprite \| Label \| Input \| Scrollbox) | remove child node                                                                                          |
| getElementById         | (id: string)                                  | returns the node or null                                                                                   |
| getElementsByClassName | (class: string)                               | returns the nodes or null                                                                                  |
| attr                   | (firstArgv: string \| object, value: any)     | Modify the attribute value. If properties are not modified using this method, rendering may not be updated |
