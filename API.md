## Classes

<dl>
<dt><a href="#MaskMan">MaskMan</a></dt>
<dd><p>MaskMan Class</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#camelCase">camelCase([string])</a> ⇒ <code>string</code></dt>
<dd><p>Converts <a href="https://en.wikipedia.org/wiki/snake_case">snake case</a> <code>string</code> to <a href="https://en.wikipedia.org/wiki/CamelCase">camel case</a>.</p>
</dd>
<dt><a href="#snake_case">snake_case([string])</a> ⇒ <code>string</code></dt>
<dd><p>Converts <a href="https://en.wikipedia.org/wiki/CamelCase">camel case</a> <code>string</code> to <a href="https://en.wikipedia.org/wiki/snake_case">snake case</a>.</p>
</dd>
</dl>

<a name="MaskMan"></a>

## MaskMan
MaskMan Class

**Kind**: global class  

* [MaskMan](#MaskMan)
    * [new MaskMan([data])](#new_MaskMan_new)
    * _instance_
        * [.convert([data])](#MaskMan+convert) ⇒ [<code>MaskMan</code>](#MaskMan)
        * [.to(converter)](#MaskMan+to) ⇒ <code>any</code>
    * _static_
        * [.convert([data])](#MaskMan.convert) ⇒ [<code>MaskMan</code>](#MaskMan)

<a name="new_MaskMan_new"></a>

### new MaskMan([data])
Create a MaskMan instance.

**Returns**: <code>any</code> - converted array or object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [data] | <code>any</code> | <code></code> | array or object you want to convert. |

<a name="MaskMan+convert"></a>

### maskMan.convert([data]) ⇒ [<code>MaskMan</code>](#MaskMan)
Set new data and return a MaskMan instance.

**Kind**: instance method of [<code>MaskMan</code>](#MaskMan)  
**Returns**: [<code>MaskMan</code>](#MaskMan) - MaskMan instance.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [data] | <code>any</code> | <code></code> | array or object you want to convert. |

<a name="MaskMan+to"></a>

### maskMan.to(converter) ⇒ <code>any</code>
Convert all key in an object by converter.

**Kind**: instance method of [<code>MaskMan</code>](#MaskMan)  
**Returns**: <code>any</code> - converted array or object.  

| Param | Type | Description |
| --- | --- | --- |
| converter | <code>converterCallback</code> | callback function convert keys to the case style you want. |

<a name="MaskMan.convert"></a>

### MaskMan.convert([data]) ⇒ [<code>MaskMan</code>](#MaskMan)
Create a MaskMan instance.

**Kind**: static method of [<code>MaskMan</code>](#MaskMan)  
**Returns**: [<code>MaskMan</code>](#MaskMan) - MaskMan instance.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [data] | <code>any</code> | <code></code> | array or object you want to convert. |

<a name="camelCase"></a>

## camelCase([string]) ⇒ <code>string</code>
Converts [snake case](https://en.wikipedia.org/wiki/snake_case) `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).

**Kind**: global function  
**Returns**: <code>string</code> - Returns the camel cased string.  
**Category**: String  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [string] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The string to convert. |

<a name="snake_case"></a>

## snake\_case([string]) ⇒ <code>string</code>
Converts [camel case](https://en.wikipedia.org/wiki/CamelCase) `string` to [snake case](https://en.wikipedia.org/wiki/snake_case).

**Kind**: global function  
**Returns**: <code>string</code> - Returns the snake cased string.  
**Category**: String  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [string] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The string to convert. |