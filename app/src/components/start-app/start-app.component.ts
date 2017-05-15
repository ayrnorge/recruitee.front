import {User} from "../../users/users.ts";
import {JobAd} from "../../users/job-ads.ts";
import {UsersDataService} from "../../users/services/users-data.service.ts";
import {JobAdService} from "../../job-ads/services/job-ad.service.ts";

/**
 * @ngInject
 */
export class AppComponent {
  // Define our AppComponent's name
  static componentName:string = "msApp";

  // Define our AppComponent's config
  static componentConfig:ng.IComponentOptions = {
    bindings: {},
    controller: AppComponent,
    templateUrl: 'src/components/start-app/start-app.component.html'
  };

  // Define our injectables
  private $mdSidenav:angular.material.ISidenavService;
  private UsersDataService:UsersDataService;
  private JobAdService:JobAdService;

  // Define our own variables
  private users:User[];
  private offers:JobAd[];
  private selected:User;

  // Define our constructor and inject the necessary services
  constructor($mdSidenav:angular.material.ISidenavService, UsersDataService:UsersDataService, JobAdService:JobAdService) {
    // Store all of our injectables
    this.$mdSidenav = $mdSidenav;
    this.UsersDataService = UsersDataService;
    this.JobAdService = JobAdService;

    // Load our users and store them to a variable
    UsersDataService.loadAllUsers().then((users:User[]) => {
      this.users = users;
      this.selected = users[0];
    });

    JobAdService.loadAllOffers().then((offers:JobAd[]) => {
      console.log(offers);
    });

  }

  /**
   * Hide or Show the 'left' sideNav area.
   */
  toggleUsersList() {
    this.$mdSidenav('left').toggle();
  }

  /**
   * Select the current user and closes the users list.
   *
   * @param user The user to be selected.
   */
  selectUser(user:number|User) {
    // Set our selected user
    this.selected = angular.isNumber(user) ? this.users[<number> user] : <User> user;

    // If the users list/sidenav is open; we want to make sure to close it
    this.$mdSidenav('left').close();
  }
}
