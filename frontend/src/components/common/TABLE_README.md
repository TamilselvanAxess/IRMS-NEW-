# Table Component

A comprehensive, reusable table component with advanced features like sorting, pagination, search, and row selection.

## Features

- ✅ **Sorting** - Click column headers to sort data
- ✅ **Search** - Global search across all columns
- ✅ **Pagination** - Built-in pagination with customizable items per page
- ✅ **Row Selection** - Single and bulk row selection with checkboxes
- ✅ **Responsive** - Mobile-friendly with horizontal scroll
- ✅ **Customizable** - Multiple variants, sizes, and themes
- ✅ **Loading States** - Built-in loading spinner
- ✅ **Empty States** - Customizable empty state messages
- ✅ **Row Actions** - Click handlers for rows and custom action buttons
- ✅ **Dark Mode** - Full dark mode support
- ✅ **Accessible** - Proper ARIA labels and keyboard navigation

## Basic Usage

```jsx
import { Table } from '../components/common';

const MyComponent = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];

  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true }
  ];

  return (
    <Table
      data={data}
      columns={columns}
      onRowClick={(row) => console.log('Clicked:', row)}
    />
  );
};
```

## Props

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `Array` | `[]` | Array of objects representing table rows |
| `columns` | `Array` | `[]` | Array of column definitions |
| `className` | `string` | `''` | Additional CSS classes |
| `variant` | `'default' \| 'glass' \| 'minimal'` | `'default'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Text and spacing size |

### Feature Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sortable` | `boolean` | `true` | Enable column sorting |
| `selectable` | `boolean` | `false` | Enable row selection |
| `searchable` | `boolean` | `false` | Enable global search |
| `pagination` | `boolean` | `false` | Enable pagination |
| `itemsPerPage` | `number` | `10` | Items per page when pagination is enabled |
| `loading` | `boolean` | `false` | Show loading spinner |
| `emptyMessage` | `string` | `'No data available'` | Message shown when no data |

### Event Props

| Prop | Type | Description |
|------|------|-------------|
| `onRowClick` | `(row) => void` | Called when a row is clicked |
| `onSelectionChange` | `(selectedIds) => void` | Called when selection changes |
| `onSort` | `({ key, direction }) => void` | Called when sorting changes |

## Column Definition

Each column in the `columns` array should be an object with the following properties:

```jsx
const columns = [
  {
    key: 'name',           // Required: Unique identifier for the column
    label: 'Name',         // Required: Display label for the column header
    sortable: true,        // Optional: Whether column is sortable (default: true)
    render: (value, row) => <CustomComponent />,  // Optional: Custom render function
    format: (value) => value.toUpperCase()        // Optional: Format function
  }
];
```

### Column Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `key` | `string` | ✅ | Unique identifier for the column |
| `label` | `string` | ✅ | Display label for the column header |
| `sortable` | `boolean` | ❌ | Whether column is sortable (default: true) |
| `render` | `(value, row) => ReactNode` | ❌ | Custom render function for cell content |
| `format` | `(value) => string` | ❌ | Format function for cell value |

## Examples

### Basic Table with Sorting

```jsx
const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true }
];

<Table
  data={users}
  columns={columns}
  onRowClick={(user) => console.log('User clicked:', user)}
  onSort={({ key, direction }) => console.log('Sort:', key, direction)}
/>
```

### Advanced Table with All Features

```jsx
<Table
  data={users}
  columns={columns}
  searchable={true}
  selectable={true}
  pagination={true}
  itemsPerPage={5}
  onSelectionChange={(selectedIds) => setSelectedUsers(selectedIds)}
  onSort={handleSort}
  variant="glass"
  loading={isLoading}
  emptyMessage="No users found"
/>
```

### Custom Cell Rendering

```jsx
const columns = [
  {
    key: 'name',
    label: 'Name',
    render: (value, row) => (
      <div className="flex items-center">
        <img src={row.avatar} className="w-8 h-8 rounded-full mr-3" />
        <div>
          <div className="font-medium">{value}</div>
          <div className="text-sm text-gray-500">{row.department}</div>
        </div>
      </div>
    )
  },
  {
    key: 'status',
    label: 'Status',
    render: (value) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {value}
      </span>
    )
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
    render: (value, row) => (
      <div className="flex space-x-2">
        <button onClick={() => handleEdit(row)}>Edit</button>
        <button onClick={() => handleDelete(row)}>Delete</button>
      </div>
    )
  }
];
```

### Table with Sub-components

```jsx
<Table.Header>
  <Table.Title>User Management</Table.Title>
  <Table.Subtitle>Manage your application users</Table.Subtitle>
  <Table.Actions>
    <Button variant="primary">Add User</Button>
    <Button variant="secondary">Export</Button>
  </Table.Actions>
</Table.Header>
<Table
  data={users}
  columns={columns}
  searchable={true}
  selectable={true}
/>
```

## Variants

### Default
Standard table with solid background and borders.

### Glass
Modern glassmorphism effect with backdrop blur.

### Minimal
Clean, minimal design with subtle borders.

## Sizes

### Small (`sm`)
Compact spacing and smaller text.

### Medium (`md`)
Standard spacing and text size (default).

### Large (`lg`)
Larger spacing and text size.

## Styling

The table component uses Tailwind CSS classes and supports:

- **Dark Mode**: Automatically adapts to theme changes
- **Responsive**: Horizontal scroll on mobile devices
- **Custom Classes**: Add your own CSS classes via `className` prop
- **Consistent Design**: Follows the existing design system

## Accessibility

- Proper ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast support in dark mode
- Focus indicators for interactive elements

## Performance

- Virtual scrolling for large datasets (planned)
- Efficient re-rendering with React.memo
- Optimized sorting and filtering
- Lazy loading support

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with polyfills)
- Mobile browsers

## Migration Guide

### From Basic HTML Tables

```jsx
// Before
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    ))}
  </tbody>
</table>

// After
const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' }
];

<Table data={users} columns={columns} />
```

## Troubleshooting

### Common Issues

1. **Data not displaying**: Ensure your data array contains objects with keys matching your column definitions
2. **Sorting not working**: Check that column keys match data object properties
3. **Selection not working**: Ensure each row has a unique `id` or `_id` property
4. **Search not working**: Enable `searchable={true}` prop

### Performance Tips

1. Use `React.memo` for custom render functions
2. Avoid complex calculations in render functions
3. Consider pagination for large datasets
4. Use `useMemo` for expensive column definitions

## Contributing

When contributing to the Table component:

1. Follow the existing code style
2. Add proper TypeScript types
3. Include accessibility improvements
4. Test with different data types
5. Update documentation 