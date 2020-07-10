interface IReference {
  name: string;
  url: string;
}

export interface IComponentTemplate {
  title?: string;
  description?: string;
  references?: IReference[];
  code?: string;
  sass?: string;
  mdcUrls?: IReference[];
}

export const templates: { [x: string]: IComponentTemplate } = {
  button: {
    title: 'Button',
    description: 'Buttons allow users to take actions, and make choices, with a single tap.',
    references: [{
      name: 'Material Design guidelines: Buttons',
      url: 'https://material.io/design/components/buttons.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-button/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-button/README.md#sass-mixins' },
    ],
    code: `aurelia.use.plugin(PLATFORM.moduleName('@aurelia-mdc-web/button'));`,
    sass: `@use '@material/button/mdc-button';`
  },
  drawer: {
    title: 'Drawers',
    description: 'The MDC Navigation Drawer is used to organize access to destinations and other functionality on an app.',
    references: [{
      name: 'Material Design guidelines: Navigation Drawer',
      url: 'https://material.io/design/components/navigation-drawer.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-drawer/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-drawer/README.md#sass-mixins' },
    ],
    code: `aurelia.use.plugin(PLATFORM.moduleName('@aurelia-mdc-web/drawer'));`,
    sass: '@use "@material/drawer/mdc-drawer";'
  },
  "form-field": {
    title: 'Form Fields',
    description: `MDC Form Field aligns an MDC Web form field (for example, a checkbox)
    with its label and makes it RTL-aware. It also activates a ripple effect
    upon interacting with the label.`,
    references: [{
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-form-field/README.md'
    }],
    code: `import {MdcFormFieldModule} from '@angular-mdc/web/form-field';`,
    sass: `@use '@material/form-field/mdc-form-field';
@use '@material/form-field/_index' as form-field;`
  },
  list: {
    title: 'Lists',
    description: 'Lists are continuous, vertical indexes of text or images.',
    references: [{
      name: 'Material Design guidelines: Lists',
      url: 'https://material.io/design/components/lists.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-list/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-list/README.md#sass-mixins' },
    ],
    code: `import {MdcListModule} from '@angular-mdc/web/list';`,
    sass: `@use '@material/list/mdc-list';
@use '@material/list';`
  },
  menu: {
    title: 'Menus',
    description: 'A menu displays a list of choices on a temporary surface. They appear when users interact with a button, action, or other control.',
    references: [{
      name: 'Material Design guidelines: Menus',
      url: 'https://material.io/design/components/menus.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu/README.md#sass-mixins' },
    ],
    code: `import {MdcMenuModule} from '@angular-mdc/web/menu';`,
    sass: `@use '@material/menu/mdc-menu';
@use '@material/menu';
@use '@material/list/mdc-list';
@use '@material/menu-surface/mdc-menu-surface';`
  },
  ripple: {
    title: 'Ripple',
    description: 'Ripple provides components (or any element) with a material "ink ripple" interaction effect.',
    references: [{
      name: 'Material Design guidelines: Ripple',
      url: 'https://material.io/design/interaction/states.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-ripple/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-ripple/README.md#sass-apis' },
    ],
    code: `import {MdcRippleModule} from '@angular-mdc/web/ripple';`,
    sass: `@use '@material/ripple/mdc-ripple';
@use '@material/ripple';`
  },
  select: {
    title: 'Select Menus',
    description: 'MDC Select provides Material Design single-option select menus, using the MDC menu.',
    references: [{
      name: 'Material Design guidelines: Menus',
      url: 'https://material.io/guidelines/components/menus.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-select/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-select/README.md#sass-mixins' },
      { name: 'Helper Text Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-select/helper-text/README.md#sass-mixins' },
      { name: 'Icon Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-select/icon/README.md#sass-mixins' },
    ],
    code: `import {MdcSelectModule} from '@angular-mdc/web/select';`,
    sass: `@use '@material/select/mdc-select';
@use '@material/select/_index' as select;
@use '@material/list/mdc-list';
@use '@material/menu-surface/mdc-menu-surface';
@use '@material/menu/mdc-menu';`
  },
  tabs: {
    title: 'Tabs',
    description: 'Tabs organize content across different screens, data sets, and other interactions.',
    references: [{
      name: 'Material Design guidelines: Tabs',
      url: 'https://material.io/design/components/tabs.html'
    }, {
      name: 'Material Components Web: Tab Bar',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-bar/README.md'
    }, {
      name: 'Material Components Web: Tab Scroller',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-scroller/README.md'
    }, {
      name: 'Material Components Web: Tab',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab/README.md'
    }, {
      name: 'Material Components Web: Tab Indicator',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-indicator/README.md'
    }],
    mdcUrls: [
      { name: 'Tab Bar Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-bar/README.md#sass-mixins' },
      { name: 'Scroller Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-scroller/README.md#sass-mixins' },
      { name: 'Tab Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab/README.md#sass-mixins' },
      { name: 'Indicator Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-indicator/README.md#sass-mixins' },
    ],
    code: `import {MdcTabBarModule} from '@angular-mdc/web/tab-bar';`,
    sass: `@use '@material/tab-bar/mdc-tab-bar';
@use '@material/tab-bar';
@use '@material/tab-scroller/mdc-tab-scroller';
@use '@material/tab-scroller';
@use '@material/tab-indicator/mdc-tab-indicator';
@use '@material/tab-indicator';
@use '@material/tab/mdc-tab';
@use '@material/tab';`
  },
  "text-field": {
    title: 'Text Field',
    description: 'Text fields let users enter and edit text.',
    references: [{
      name: 'Material Design guidelines: Text Fields',
      url: 'https://material.io/design/components/text-fields.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-textfield/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-textfield/README.md#sass-mixins' },
      { name: 'Character Counter Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-textfield/character-counter/README.md#sass-mixins' },
      { name: 'Helper Text Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-textfield/helper-text/README.md#sass-mixins' },
      { name: 'Icon Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-textfield/icon/README.md#sass-mixins' },
    ],
    code: `import {MdcTextFieldModule} from '@angular-mdc/web/textfield';`,
    sass: `@use '@material/textfield/mdc-text-field';
@use '@material/textfield/_index' as textfield;
@use '@material/form-field/_index' as form-field;`
  },
  "top-app-bar": {
    title: 'Top App Bar',
    description: 'The top app bar displays information and actions relating to the current screen.',
    references: [{
      name: 'Material Design guidelines: App bars: top',
      url: 'https://material.io/design/components/app-bars-top.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-top-app-bar/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-top-app-bar/README.md#sass-mixins' },
    ],
    code: `import {MdcTopAppBarModule} from '@angular-mdc/web/top-app-bar';`,
    sass: `@use '@material/top-app-bar/mdc-top-app-bar';
@use '@material/top-app-bar';
@use '@material/icon-button/mdc-icon-button';`
  }
}
