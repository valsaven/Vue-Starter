/* @unocss-include */

export interface Link {
  icon?: string;
  name: string;
  to?: string;
  permissions?: Array<'A' | 'B' | 'C' | 'D' | 'E'>;
  aiDisable?: boolean;
  sub?: Link[];
}

export default [
  { icon: 'i-ic-round-dashboard', name: 'Dashboard', to: '/dashboard' },
  {
    icon: 'i-mdi-bookmark-outline',
    name: 'General',
    sub: [
      { name: 'Buttons', to: '/general/buttons' },
      { name: 'Icons', to: '/general/icons' },
      { name: 'Paper', to: '/general/paper' },
      { name: 'Typography', to: '/general/typography' },
    ],
  },
  {
    icon: 'i-ri-layout-3-line',
    name: 'Layout',
    sub: [
      { name: 'Dividers', to: '/layout/dividers' },
      { name: 'Grid', to: '/layout/grid' },
      { name: 'Spaces', to: '/layout/spaces' },
    ],
  },
  {
    icon: 'i-grommet-icons-navigate',
    name: 'Navigation',
    sub: [
      { name: 'Breadcrumbs', to: '/navigation/breadcrumbs' },
      { name: 'Dropdown', to: '/navigation/dropdown' },
      { name: 'Drawers', to: '/navigation/drawers' },
      { name: 'Tabs', to: '/navigation/tabs' },
      { name: 'Steppers', to: '/navigation/steppers' },
      { name: 'Tours', to: '/navigation/tours' },
    ],
  },
  {
    icon: 'i-fluent-form-24-regular',
    name: 'Data Entry',
    sub: [
      { name: 'Text fields', to: '/data-entry/text-fields' },
      { name: 'Checkboxes', to: '/data-entry/checkboxes' },
      { name: 'Radio buttons', to: '/data-entry/radio-buttons' },
      { name: 'Switches', to: '/data-entry/switches' },
      {
        name: 'Selects',
        sub: [
          { name: 'Single selects', to: '/data-entry/selects/single-selects' },
          { name: 'Multiple selects', to: '/data-entry/selects/multiple-selects' },
        ],
      },
      { name: 'Textareas', to: '/data-entry/textareas' },
      {
        name: 'Pickers',
        sub: [
          { name: 'Date pickers', to: '/data-entry/pickers/date-pickers' },
          { name: 'Month pickers', to: '/data-entry/pickers/month-pickers' },
          { name: 'Year pickers', to: '/data-entry/pickers/year-pickers' },
          { name: 'Time pickers', to: '/data-entry/pickers/time-pickers' },
        ],
      },
      { name: 'Autocompletes', to: '/data-entry/autocompletes' },
      { name: 'File inputs', to: '/data-entry/file-inputs' },
      { name: 'Form validation', to: '/data-entry/form-validation' },
    ],
  },
  {
    icon: 'i-codicon-table',
    name: 'Data Display',
    sub: [
      { name: 'Expansion Panels', to: '/data-display/expansion-panels' },
      { name: 'Data tables', to: '/data-display/data-tables' },
      { name: 'Data iterators', to: '/data-display/data-iterators' },
      { name: 'Tabular forms', to: '/data-display/tabular-forms' },
      { name: 'Tabular form groups', to: '/data-display/tabular-form-groups' },
      { name: 'Calendar', to: '/data-display/calendar' },
    ],
  },
  {
    icon: 'i-mdi-feedback-outline',
    name: 'Feedback',
    sub: [
      { name: 'Dialogs', to: '/feedback/dialogs' },
      { name: 'Progress', to: '/feedback/progress' },
      { name: 'Skeletons', to: '/feedback/skeletons' },
    ],
  },
  {
    icon: 'i-carbon-cloud-service-management',
    name: 'State management',
    sub: [{ name: 'CRUD operations', to: '/state-management/crud-operations' }],
  },
  {
    icon: 'i-bx-line-chart',
    name: 'Charts',
    sub: [
      { name: 'Line charts', to: '/charts/line-charts' },
      { name: 'Area charts', to: '/charts/area-charts' },
      { name: 'Bar charts', to: '/charts/bar-charts' },
      { name: 'Pie charts', to: '/charts/pie-charts' },
      { name: 'Bubble charts', to: '/charts/bubble-charts' },
      { name: 'Combinations', to: '/charts/combinations' },
    ],
  },
  {
    icon: 'i-bi-hdd-network',
    name: 'Network',
    sub: [
      { name: 'Fetch', to: '/network/fetch' },
      { name: 'WebSocket', to: '/network/websocket' },
      { name: 'EventSource', to: '/network/eventsource' },
    ],
  },
] as Link[];
