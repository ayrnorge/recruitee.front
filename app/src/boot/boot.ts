/// <reference path="../../../typings/index.d.ts" />

// Import our Angular dependencies
import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';

import {AppComponent} from "../components/start-app/start-app.component.ts";
import {UsersListComponent} from "../users/components/users-list/users-list.component.ts";
import {UserDetailsComponent} from "../users/components/user-details/user-details.component.ts";

import {Users} from '../users/users.ts';
import {JobAds} from '../job-ads/job-ads.ts';

module MaterialStart {
  "use strict";

  // Register our module and it's dependencies
  angular.module('MaterialStart', ['ngMaterial', 'ngSanitize', Users.name])
    .config(function ($mdIconProvider:angular.material.IIconProvider, $mdThemingProvider:angular.material.IThemingProvider) {

      console.log(JobAds);

      var brandPrimary = {
        '50': '#89ced1',
        '100': '#76c6ca',
        '200': '#64bfc3',
        '300': '#51b7bc',
        '400': '#44abaf',
        '500': '#3d999d',
        '600': '#36878b',
        '700': '#2f7578',
        '800': '#286366',
        '900': '#205154',
        'A100': '#9bd6d8',
        'A200': '#addddf',
        'A400': '#c0e5e6',
        'A700': '#193f41',
        'contrastDefaultColor': 'light'
      };
      $mdThemingProvider
        .definePalette('brandPrimary',
                        brandPrimary);

      var brandSecondary = {
        '50': '#6c1d26',
        '100': '#81222d',
        '200': '#952734',
        '300': '#a92d3b',
        '400': '#bd3242',
        '500': '#cc3d4e',
        '600': '#d66572',
        '700': '#dc7985',
        '800': '#e18d97',
        '900': '#e6a2aa',
        'A100': '#d66572',
        'A200': '#d15160',
        'A400': '#cc3d4e',
        'A700': '#ecb6bc'
      };

      $mdThemingProvider
        .definePalette('brandSecondary',
                        brandSecondary);

      $mdThemingProvider.theme('default')
         .primaryPalette('brandPrimary')
         .accentPalette('brandSecondary');
    })

    // Register all of our components
    .component(AppComponent.componentName, AppComponent.componentConfig)
    .component(UsersListComponent.componentName, UsersListComponent.componentConfig)
    .component(UserDetailsComponent.componentName, UserDetailsComponent.componentConfig)
  ;
}
