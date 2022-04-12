# el-canvas

<div style="text-align: center">
  <img width="100px" src="https://raw.githubusercontent.com/GYPeng/elem-canvas/a8127bfc15e5445fbe8678ff72608dfb8b96a3dc/logo.svg"/>
</div>

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

const ves = new Sprite({
  width: window.innerWidth,
  height: window.innerHeight,
  bgColor: "red",
});

app.append(ves);
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

| name                   | argument                       | describe                                                                                                   |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| on                     | (eventname, callback)          | binding event; callback arguments: (this, event)                                                           |
| off                    | (eventname, callback)          | unbinding event                                                                                            |
| append                 | node                           | insert child node                                                                                          |
| remove                 | node                           | remove child node                                                                                          |
| getElementById         | id string                      | returns the node or null                                                                                   |
| getElementsByClassName | class string                   | returns the nodes or null                                                                                  |
| attr                   | (attrName: string, value: any) | Modify the attribute value. If properties are not modified using this method, rendering may not be updated |

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

| name                   | argument                       | describe                                                                                                   |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| getElementById         | id string                      | returns the node or null                                                                                   |
| getElementsByClassName | class string                   | returns the nodes or null                                                                                  |
| attr                   | (attrName: string, value: any) | Modify the attribute value. If properties are not modified using this method, rendering may not be updated |

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

| name                   | argument                       | describe                                                                                                   |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| on                     | (eventname, callback)          | binding event; callback arguments: (this, event)                                                           |
| off                    | (eventname, callback)          | unbinding event                                                                                            |
| getElementById         | id string                      | returns the node or null                                                                                   |
| getElementsByClassName | class string                   | returns the nodes or null                                                                                  |
| attr                   | (attrName: string, value: any) | Modify the attribute value. If properties are not modified using this method, rendering may not be updated |

# Scrollbox

## attributes

tips: with "?" mark this field as optional

| name               | value                              | describe                                                                                                                                                                                       |
| ------------------ | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| contentWidth       | number                             | content area width                                                                                                                                                                             |
| contentHeight      | number                             | content area height                                                                                                                                                                            |
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

| name                   | argument                       | describe                                                                                                   |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| on                     | (eventname, callback)          | binding event; callback arguments: (this, event)                                                           |
| off                    | (eventname, callback)          | unbinding event                                                                                            |
| append                 | node                           | insert child node                                                                                          |
| remove                 | node                           | remove child node                                                                                          |
| getElementById         | id string                      | returns the node or null                                                                                   |
| getElementsByClassName | class string                   | returns the nodes or null                                                                                  |
| attr                   | (attrName: string, value: any) | Modify the attribute value. If properties are not modified using this method, rendering may not be updated |
