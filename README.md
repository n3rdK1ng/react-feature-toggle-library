# React Feature Toggle Library

A simple and flexible React feature toggle library written in TypeScript. This
library allows you to easily manage feature flags in your React application.

## Installation

Install the library using npm:

```bash
npm i react-feature-toggle-library
```

## Usage

### Setup

Wrap your application with the `FeatureToggleProvider` and pass an object
containing your feature flags.

```tsx
import { FeatureToggleProvider, Feature } from 'react-feature-toggle-library'

const featureFlags = {
  featureA: true,
  featureB: false,
}

const App = () => {
  return (
    <FeatureToggleProvider flags={featureFlags}>
      <Feature name="featureA">
        <div>Feature A is enabled</div>
      </Feature>
      <Feature name="featureB">
        <div>Feature B is enabled</div>
      </Feature>
    </FeatureToggleProvider>
  )
}

export default App
```

### Conditionally Render Components

Use the `Feature` component to conditionally render content based on the feature
flags.

```tsx
import { Feature } from 'react-feature-toggle-library'

export const ExampleComponent = () => {
  return (
    <div>
      <Feature name="featureA">
        <p>This content is only visible if featureA is enabled.</p>
      </Feature>
      <Feature name="featureB">
        <p>This content is only visible if featureB is enabled.</p>
      </Feature>
    </div>
  )
}
```

### Using Feature Flags in Your Logic

If you need to use feature flags directly in your component logic, you can use
the `useFeatureToggle` hook.

```tsx
import { useFeatureToggle } from 'react-feature-toggle-library'

export const ExampleComponent = () => {
  const { isFeatureEnabled } = useFeatureToggle()

  return (
    <div>
      {isFeatureEnabled('featureA') && <p>Feature A is enabled</p>}
      {isFeatureEnabled('featureB') && <p>Feature B is enabled</p>}
    </div>
  )
}
```

## API

### `FeatureToggleProvider`

The `FeatureToggleProvider` component provides the feature flags context to its
children.

#### Props

- `flags` (object): An object where the keys are feature names and the values
  are booleans indicating whether the feature is enabled.

### `Feature`

The `Feature` component conditionally renders its children based on the
specified feature flag.

#### Props

- `name` (string): The name of the feature flag.
- `children` (ReactNode): The content to be conditionally rendered.

### `useFeatureToggle`

The `useFeatureToggle` hook provides access to the feature flag context.

#### Return Value

- `isFeatureEnabled` (function): A function that takes a feature name as an
  argument and returns a boolean indicating whether the feature is enabled.

## Development

### Building the Library

To build the library, run:

```bash
npm run build
```

This will generate the production-ready files in the `dist` folder.
