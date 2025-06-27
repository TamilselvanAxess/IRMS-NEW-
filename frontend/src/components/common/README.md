# Reusable UI Components

A comprehensive collection of modern, theme-aware, and fully reusable React components built with Tailwind CSS.

## 🎨 Features

- **Theme Integration**: All components automatically adapt to light/dark themes
- **Multiple Variants**: Each component supports multiple styling variants
- **Responsive Design**: Mobile-first approach with responsive utilities
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **TypeScript Ready**: Full TypeScript support with proper prop types
- **Customizable**: Extensive customization options through props and CSS classes

## 📦 Components

### Button

A versatile button component with multiple variants, sizes, and states.

```jsx
import { Button } from './components/common';

// Basic usage
<Button onClick={handleClick}>Click me</Button>

// With variants
<Button variant="primary" size="lg" icon={<Star />}>
  Primary Button
</Button>

// Loading state
<Button loading>Loading...</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'danger'`
- `size`: `'sm' | 'md' | 'lg'`
- `disabled`: `boolean`
- `loading`: `boolean`
- `icon`: `ReactNode`
- `onClick`: `function`
- `className`: `string`

### Input

A flexible input component with support for icons, validation, and multiple variants.

```jsx
import { Input } from './components/common';
import { Mail, Lock } from 'lucide-react';

// Basic input
<Input 
  label="Email"
  placeholder="Enter your email"
  icon={<Mail />}
/>

// Password input with toggle
<Input
  label="Password"
  type="password"
  icon={<Lock />}
  rightIcon={
    <button onClick={togglePassword}>
      {showPassword ? <EyeOff /> : <Eye />}
    </button>
  }
/>

// With validation
<Input
  label="Username"
  error="Username is required"
  variant="glass"
/>
```

**Props:**
- `label`: `string`
- `error`: `string`
- `icon`: `ReactNode`
- `rightIcon`: `ReactNode`
- `variant`: `'default' | 'glass' | 'minimal'`
- `size`: `'sm' | 'md' | 'lg'`
- `placeholder`: `string`
- All standard input props

### Select

A customizable select dropdown component with theme integration.

```jsx
import { Select } from './components/common';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' }
];

<Select
  label="Choose an option"
  options={options}
  placeholder="Select..."
  variant="glass"
/>
```

**Props:**
- `label`: `string`
- `options`: `Array<{value: string, label: string}>`
- `error`: `string`
- `variant`: `'default' | 'glass' | 'minimal'`
- `size`: `'sm' | 'md' | 'lg'`
- `placeholder`: `string`
- `allowEmpty`: `boolean`

### Card

A flexible card component with multiple variants and sub-components.

```jsx
import { Card } from './components/common';

<Card variant="glass" hover>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle>Card subtitle</Card.Subtitle>
  </Card.Header>
  
  <Card.Content>
    <p>Card content goes here</p>
  </Card.Content>
  
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

**Props:**
- `variant`: `'default' | 'glass' | 'elevated' | 'minimal' | 'gradient'`
- `hover`: `boolean`
- `padding`: `'none' | 'sm' | 'default' | 'lg' | 'xl'`

**Sub-components:**
- `Card.Header`: Header section with border
- `Card.Title`: Title with size variants
- `Card.Subtitle`: Subtitle text
- `Card.Content`: Main content area
- `Card.Footer`: Footer section with border

### Alert

A notification component with multiple types and dismissible option.

```jsx
import { Alert } from './components/common';

// Basic alerts
<Alert type="success">Success message</Alert>
<Alert type="error" title="Error">Error message</Alert>
<Alert type="warning">Warning message</Alert>
<Alert type="info">Info message</Alert>

// Dismissible alert
<Alert 
  type="info" 
  dismissible 
  onDismiss={handleDismiss}
>
  Dismissible message
</Alert>

// Using variant components
<Alert.Success>Success!</Alert.Success>
<Alert.Error>Error!</Alert.Error>
```

**Props:**
- `type`: `'success' | 'error' | 'warning' | 'info'`
- `title`: `string`
- `dismissible`: `boolean`
- `onDismiss`: `function`

### Checkbox

A customizable checkbox component with validation support.

```jsx
import { Checkbox } from './components/common';

// Basic checkbox
<Checkbox 
  label="Accept terms"
  checked={accepted}
  onChange={setAccepted}
/>

// With validation
<Checkbox
  label="Required field"
  error="This field is required"
  variant="glass"
/>

// Checkbox group
<Checkbox.Group>
  <Checkbox label="Option 1" />
  <Checkbox label="Option 2" />
  <Checkbox label="Option 3" />
</Checkbox.Group>
```

**Props:**
- `label`: `string`
- `error`: `string`
- `variant`: `'default' | 'glass' | 'minimal'`
- `size`: `'sm' | 'md' | 'lg'`
- All standard checkbox props

### Spinner

A loading spinner component with multiple variants and sizes.

```jsx
import { Spinner } from './components/common';

// Basic spinner
<Spinner />

// Different variants
<Spinner variant="dots" size="lg" />
<Spinner variant="pulse" />
<Spinner variant="bars" />

// With text
<Spinner text="Loading..." />

// Using variant components
<Spinner.Dots />
<Spinner.Pulse />
<Spinner.Ring />
<Spinner.Bars />
```

**Props:**
- `variant`: `'default' | 'dots' | 'pulse' | 'ring' | 'bars'`
- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- `text`: `string`

### ThemeSelector

A comprehensive theme configuration component.

```jsx
import { ThemeSelector } from './components/common';

<ThemeSelector />
```

**Features:**
- Theme mode switching (light/dark)
- Branding style selection
- Color scheme selection
- Real-time preview
- Advanced configuration panel

### ThemeToggle

A simple theme toggle button.

```jsx
import { ThemeToggle } from './components/common';

<ThemeToggle />
```

## 🎯 Usage Patterns

### Form Components

```jsx
import { Input, Select, Checkbox, Button } from './components/common';

const MyForm = () => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Full Name"
        placeholder="Enter your name"
        required
      />
      
      <Select
        label="Category"
        options={categories}
        placeholder="Choose category"
      />
      
      <Checkbox
        label="I agree to terms"
        required
      />
      
      <Button type="submit" loading={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};
```

### Card Layouts

```jsx
import { Card, Alert } from './components/common';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card variant="glass">
        <Card.Header>
          <Card.Title>Statistics</Card.Title>
        </Card.Header>
        <Card.Content>
          {/* Content */}
        </Card.Content>
      </Card>
      
      <Card variant="elevated">
        <Card.Header>
          <Card.Title>Recent Activity</Card.Title>
        </Card.Header>
        <Card.Content>
          {/* Content */}
        </Card.Content>
      </Card>
    </div>
  );
};
```

### Loading States

```jsx
import { Spinner, Button } from './components/common';

const LoadingExample = () => {
  return (
    <div>
      {isLoading ? (
        <Spinner text="Loading data..." />
      ) : (
        <Button onClick={loadData}>
          Load Data
        </Button>
      )}
    </div>
  );
};
```

## 🎨 Theme Integration

All components automatically adapt to the current theme:

```jsx
import { useTheme } from '../contexts/ThemeContext';

const { isDark, theme, branding, colorScheme } = useTheme();
```

### Theme Variables

Components use CSS custom properties for consistent theming:

```css
:root {
  --color-primary: #2563eb;
  --color-secondary: #64748b;
  --color-bg-primary: #ffffff;
  --color-text-primary: #1e293b;
}
```

## 🔧 Customization

### Custom Variants

```jsx
// Custom button variant
<Button 
  className="bg-gradient-to-r from-purple-500 to-pink-500"
  variant="custom"
>
  Custom Button
</Button>
```

### Theme-Aware Styling

```jsx
const { isDark } = useTheme();

<div className={`
  ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
`}>
  Content
</div>
```

## 📱 Responsive Design

All components are mobile-first and responsive:

```jsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card>Content</Card>
  <Card>Content</Card>
  <Card>Content</Card>
</div>
```

## ♿ Accessibility

Components include proper accessibility features:

- ARIA labels and roles
- Keyboard navigation
- Focus management
- Screen reader support
- Color contrast compliance

## 🚀 Performance

- Optimized re-renders
- Lazy loading support
- Minimal bundle size
- Efficient theme switching

## 📚 Best Practices

1. **Consistent Naming**: Use consistent prop names across components
2. **Default Values**: Provide sensible defaults for all props
3. **Error Handling**: Include proper error states and validation
4. **Documentation**: Document all props and usage examples
5. **Testing**: Include comprehensive test coverage
6. **Accessibility**: Ensure all components are accessible
7. **Performance**: Optimize for performance and bundle size
8. **Theme Support**: Ensure all components work with the theme system

## 🔄 Updates and Maintenance

- Regular updates for new features
- Bug fixes and performance improvements
- Theme system enhancements
- Accessibility improvements
- Documentation updates 