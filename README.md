# react-ionicons

npm package exporting Ionicons v4 SVGs as react components.

## Usage

1. Install peer dependencies:

`npm install react react-dom`

2. Install this library:

`npm install @simonmeusel/react-ionicons`

3. Import and use icon components:

```javascript
import { IosAdd } from "@simonmeusel/react-ionicons/IosAdd";
import { MdAddCircle } from "@simonmeusel/react-ionicons/MdAddCircle";
import { LogoNpm } from "@simonmeusel/react-ionicons/LogoNpm";

const elements = (
    <div>
        <IosAdd />
        <MdAddCircle />
        <LogoNpm />
    </div>
);
```

### TypeScript

This library is developed in TypeScript and includes declaration files.

## License

This library is licensed under the MIT license. See license of Ionicons at [GitHub](https://github.com/ionic-team/ionicons/blob/master/LICENSE).
