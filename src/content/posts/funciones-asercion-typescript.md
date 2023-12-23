---
title: Funciones de aserción en TypeScript
subTitle: TypeScript aporta innumerables ventajas al desarrollador, pero en determinadas ocasiones es necesario indicar manualmente el tipo de un valor. Las funciones de aserción nos permiten hacerlo de forma segura. 
date: 2023-12-21
relatedContent:
- entendiendo-tipos-guarda
tags:
- typescript
---
## ¿Qué son las aserciones?

Las aserciones son un mecanismo para indicar manualmente cuál es el tipo adecuado para cualquier valor (constante, función, clase...)

En TypeScript, las aserciones tienen dos formas. Una es la sintaxis de aserción "ángulo" (`<tipo>`), y la otra es la sintaxis de aserción "as" (`valor as tipo`).

```typescript
const doSomething = (value: unknown) => {
  const strLength1: number = (<string>value).length;
  const strLength2: number = (value as string).length;
}
```

A pesar de que estas dos sintaxis son equivalentes, la recomendación es usar la sintaxis de aserción "as" cuando se está trabajando con TypeScript, para evitar conflictos con JSX y confusión con los genéricos:

```typescript
// Esto no tiene nada que ver con las aserciones, si no que es un genérico
const identity = <V>(value: V) => value;
```

Por otro lado, a pesar de que las funciones `strLength1` y `strLength2` son válidas, no impiden que cualquiera pueda pasar desde fuera un valor que no sea un `string`, por lo que deben ser evitadas a no ser que sepamos realmente qué estamos haciendo (muchas veces son útiles para asignar el valor del acumulador dentro de un reduce, etc).

## Funciones de aserción en TypeScript

Una función de aserción permite evaluar de forma segura que un valor es de un tipo concreto (en caso contrario, lanzará una excepción).

Esto nos permite asegurarnos que el tipo que tiene un valor en un momento determinado es el que declaramos en TypeScript, haciendo innecesario el uso de aserciones manuales.

```typescript
function assertIsString (value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('Value is not a string');
  }
}
```
Como podemos comprobar, la función `assertIsString` tiene un tipo de retorno especial: `asserts value is string` que le indica al compilador que debe tratar ese tipo como un `string` a partir de la invocación de esta función.

```typescript
const doSomething = (value: unknown) => {
  assertIsString(value);
  // no hay error, porque value se infiere como string
  const strLength: number = value.length;
}
```

Es importante reseñar que este es uno de los pocos casos donde una *arrow function* produce un resultado diferente (e incorrecto).

Si quisieramos usar una **arrow function** para la función de aserción tendríamos que declarar el **tipo de la función de forma independiente**.

```typescript
type AssertIsString = (value: unknown) => asserts value is string;

const assertIsString: AssertIsString = (value) => {
  if (typeof value !== 'string') {
    throw new Error('Value is not a string');
  }
}
```

De la misma manera, **no hay nada que impida que una función de aserción se cree de forma incorrecta**. Por ejemplo esta función sería totalmente válida:

```typescript
function assertIsString (value: unknown): asserts value is string {
  // Esto no provocaría un error, a pesar de carecer de sentido
  if (typeof value !== 'number') { 
    throw new Error('Value is not a string');
  }
}
```

**El problema de esto es que el compilador no puede saber si una función de aserción es correcta o no**, por lo que es responsabilidad del programador asegurarse que la función de aserción produce el valor y el tipo esperado.