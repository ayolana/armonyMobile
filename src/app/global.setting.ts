//USED for Menu
export const LISTMENUHOME = [
    { title: 'Dashboard v1', component: 'Homev1Page' },
    { title: 'Dashboard v2', component: 'Homev2Page' },
];

// set our app's menu list component
export const LISTMENUCOMPONENT  = [
    { title: 'Action Sheets', component: 'ActionSheetsPage' },
    { title: 'Alert', component: 'AlertPage' },
    { title: 'FABs', component: 'FabPage' },
    { title: 'Segment', component: 'SegmentPage' },
    { title: 'Toast', component: 'ToastPage' },
    { title: 'Modals', component: 'ModalsPage' },
    { title: 'Popovers', component: 'PopoversPage' },
    { title: 'Searchbar', component: 'SearchbarPage' },
];

export const LISTMENULOGIN = [
      { title: 'Login Instagram Style', component: 'LoginInstagramPage'},
      { title: 'Login with Image Background', component: 'LoginOnePage'},
      { title: 'Login with Slider Text', component: 'LoginSliderPage'},
      { title: 'Login with Video Background', component: 'LoginBackgroundVideoPage'},
      { title: 'Login with Slider Background', component: 'LoginBackgroundSliderPage'},
    ];

export const LISTMENUSLIDE = [
      { title: 'Ionic Slide', component: 'SlidePage' },
      { title: 'Slide with Color Changing', component: 'SlideColorChangingPage' },
      { title: 'Slide with Free Mode', component: 'SlideFreeModePage' },
      { title: 'Multiple Slides', component: 'SliderListPage' },
      { title: 'Nested Slides', component: 'SlideNestedPage' },
      { title: 'Slide Transitions', component: 'SlideTransitionsPage' },
      { title: 'Slide Right to Left', component: 'SlideRightToLeftPage'},
      { title: 'Slide with Pagination Arrows', component: 'SliderWithArrowsPage'},
      { title: 'Slide Walkthrough', component: 'SlideWalkthroughPage'}
    ];

// set our app's menu list form
export const LISTMENUFORM = [
    { title: 'Checkbox', component: 'CheckboxPage' },
    { title: 'Date Time', component: 'DatetimePage' },
    { title: 'Select', component: 'SelectPage' },
    { title: 'Radio', component: 'RadioPage' },
    { title: 'Toggle', component: 'TogglePage' },
    { title: 'Range', component: 'RangePage' },
];

export const LISTMENUCRUD = [
    { title: 'CRUD HTTP (Notes)', component: 'CrudHttpListPage' },
    { title: 'CRUD Firebase (Notes)', component: 'CrudFirebaseListPage' },
    { title: 'CRUD Storage (Notes)', component: 'CrudStorageListPage' },
];

// set our app's menu list native
export const LISTMENUNATIVE = [
    { title: 'Action Sheet', component: 'NativeActionSheetPage' },
    // { title: 'App Rate', component: NativeAppRatePage },
    { title: 'Camera', component: 'NativeCameraPage' },
    { title: 'Call Number', component: 'NativeCallNumberPage' },
    { title: 'Crop Image', component: 'NativeCropPage' },
    { title: 'Date Picker', component: 'NativeDatePickerPage' },
    { title: 'Email Composer', component: 'NativeEmailComposerPage' },
    { title: 'Geolocation', component: 'NativeGeolocationPage' },
    { title: 'Instagram', component: 'NativeInstagramPage' },
    { title: 'Launch Navigator', component: 'NativeLaunchNavigatorPage' },
    { title: 'Photo Library', component: 'NativePhotoLibraryPage' },
    { title: 'SMS', component: 'NativeSmsPage' },
    { title: 'Social Sharing', component: 'NativeSocialSharingPage' },
    { title: 'Youtube Player', component: 'NativeYoutubePlayerPage' },
];

export const LISTMENUMISCELLANEOUS = [
    { title: 'Accordion', component: 'AccordionPage' },
    { title: 'Infinite Scroll', component: 'FeatureInfiniteScrollPage' },
    { title: 'Pull to Refresh', component: 'FeaturePullToRefreshPage' },
    { title: 'Google Map', component: 'FeatureGoogleMapPage' },
    { title: 'Autosizing Textarea', component: 'AutosizingTextarea' },
    { title: 'Blog Post', component: 'BlogPostPage' },
    { title: 'Countdown', component: 'CountdownPage' },
    { title: 'Expandable Header', component: 'ExpandableHeaderPage' },
    { title: 'Flash Card', component: 'FlashCardPage' },
    { title: 'Pinterest Masonry Cards', component: 'MasonryCardsPage' },
    { title: 'Testimonials', component: 'TestimonialsPage' },
    { title: 'Timeline', component: 'TimelinePage' },
    { title: 'Tinder Cards', component: 'TinderCardsPage' }
    ];
export const LISTMENUPROFIL =[
      { title: 'Profile Type 1', component: 'ProfileOnePage' },
      { title: 'Profile Type 2', component: 'ProfileThreePage' },
      { title: 'Profile Type 3', component: 'ProfileFourPage' },
      { title: 'Profile Setting', component: 'ProfileSettingsPage' },
    ];

export const LISTMENUFIREBASEUNLOGIN = [
    { title: 'Login / Register', component: 'FirebaseAuthPage' },
    { title: 'Upload File', component: 'FirebaseUploadFilePage' },
];

export const LISTMENUFIREBASELOGIN = [
    { title: 'Logout', component: 'logout' },
    { title: 'Upload File', component: 'FirebaseUploadFilePage' },
];

export const LISTMENUSETTING = [
    { title: 'Language', component: 'LanguagePage' },
    { title: 'Theme', component: 'ThemingPage' },
];

export const LISTAVAILABLELANGUAGE = [
    { title: 'English', value: 'en' },
    { title: 'France', value: 'fr' },
    { title: 'Turkey', value: 'tr' },
    { title: 'Hindi', value: 'hi' },
    { title: 'China', value: 'ch' },
]

//Main Menu1
export const PAGES = [
    { icon: 'apps', title: 'Home', page: 'HomeListPage', active: true, },
    { icon: 'cube', title: 'Components', page: 'ComponentListPage', active: false, },
    { icon: 'paper', title: 'CRUD', page: 'CrudListPage', active: false, },
    { icon: 'document', title: 'Forms', page: 'FormListPage', active: false, },
    { icon: 'bonfire', title: 'Firebase', page: 'FirebaseListPage', active: false, },
    { icon: 'contact', title: 'Login', page: 'LoginListPage', active: false, },
    { icon: 'browsers', title: 'Side Menu', page: 'SideMenuPage', active: false, },
    { icon: 'ribbon', title: 'Miscellaneous', page: 'MiscellaneousListPage', active: false, },
    { icon: 'switch', title: 'Native', page: 'NativeListPage', active: false, },
    { icon: 'person', title: 'Profile', page: 'ProfileListPage', active: false, },
    { icon: 'film', title: 'Slides', page: 'SlidesListPage', active: false, },
    { icon: 'settings', title: 'Setting', page: 'SettingListPage', active: false },
];

//Main Menu Accordion, Next Update
export const ACCORDIONMENU = [
    { icon: 'apps', title: 'Home', children: LISTMENUHOME, active: true, },
    { icon: 'cube', title: 'Components', children: LISTMENUCOMPONENT, active: false, },
    { icon: 'paper', title: 'CRUD', children: LISTMENUCRUD, active: false, },
    { icon: 'document', title: 'Forms', children: LISTMENUFORM, active: false, },
    { icon: 'bonfire', title: 'Firebase', children: LISTMENUFIREBASEUNLOGIN, active: false, },
    { icon: 'contact', title: 'Login', children: LISTMENULOGIN, active: false, },
    { icon: 'ribbon', title: 'Miscellaneous', children: LISTMENUMISCELLANEOUS, active: false, },
    { icon: 'switch', title: 'Native', children: LISTMENUNATIVE, active: false, },
    { icon: 'person', title: 'Profile', children: LISTMENUPROFIL, active: false, },
    { icon: 'film', title: 'Slides', children: LISTMENUSLIDE, active: false, },
    { icon: 'settings', title: 'Setting', children: LISTMENUSETTING, active: false },
];

import { Injectable } from '@angular/core';
@Injectable()
export class AppState {
  _state = {};

  // already return a clone of the current state
  get state() {
    return this._state = this.clone(this._state);
  }

  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }

  private clone(object) {
    // simple object clone
    return JSON.parse(JSON.stringify(object));
  }
}
