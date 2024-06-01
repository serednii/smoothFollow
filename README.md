# smoothFollow

## Description

The `smoothFollow` function allows an element to smoothly follow the mouse cursor, creating a "lagging" effect.

## Usage


[Learn more about smoothFollow](https://serednii.github.io/smoothFollow/)
[Обычная ссылка с title](https://www.google.com "Сайт Google")

[Обычная ссылка в строке](https://www.google.com)

[Обычная ссылка с title](https://www.google.com "Сайт Google")

[Ссылка со сноской][Произвольный регистронезависимый текст]

[Относительная ссылка на документ](../blob/master/LICENSE)

[Для ссылок со сноской можно использовать цифры][1]

Или можно просто вставить ссылку в квадратные скобки [текст ссылки]

Произвольный текст, после которого можно привести ссылки.

[произвольный регистронезависимый текст]: https://www.mozilla.org
[1]: http://slashdot.org
[текст ссылки]: http://www.reddit.com

```javascript
smoothFollow({
    targetElement: 'moon',
    interval: 35,
    targetElementPositionX: -20,
    targetElementPositionY: -20,
});
