# react-lorem-generator
A react component to generate dummy lorem ipsum text.

## Installation
```sh
npm i react-lorem-generator
```

## Usage
To use the component simply import it,
```sh
import Lorem from 'react-lorem-generator'
```

and use it as any other react component.

```sh
<Lorem />
```

By default it will render 1 lorem ipsum dummy text paragraph. 

### Props

| Prop | Description | Default |
| ------ | ------ | ------ |
| paragraphs | number of paragraphs to show | 1 |
| minSentences | min number of sentences to render per paragraph | 3 |
| maxSentences | max number of sentences to render per paragraph | 7 |
| minWords | min number of words to render per sentence | 3 |
| maxWords | max number of words to render per sentence | 15 |


## License

MIT


