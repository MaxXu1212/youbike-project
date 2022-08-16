// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production:true,
  firebase: {
    projectId: 'account-and-password',
    databaseURL: 'https://account-and-password-default-rtdb.firebaseio.com',
    storageBucket: 'account-and-password.appspot.com',
    apiKey: 'AIzaSyBBMgjFUZLMCHBOhvGd5Li9C8YKzJzc3Gc',
    authDomain: 'account-and-password.firebaseapp.com',
    messagingSenderId: '472658439237',
  },


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
