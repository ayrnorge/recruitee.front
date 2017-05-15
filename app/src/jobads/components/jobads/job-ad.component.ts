import {JobAd} from "../../jobads.ts";
import {User} from "../../users.ts";

export class JobAdComponent {

    static componentName:string = "msJobAd";

    static componentConfig:ng.IComponentOptions = {
        bindings: {
          offer: '<',
          selected: '<'
        },
        controller: JobAdComponent,
        templateUrl: 'src/jobads/components/jobads/job-ad.component.html'
    };
}