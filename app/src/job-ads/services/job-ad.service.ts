import {JobAd} from "../job-ads.ts";

export class JobAdService {

    private $http:ng.IHttpService;

    private $offers = 'https://api.recruitee.com/c/ayras/careers/offers/?scope=active';

    constructor($http:ng.IHttpService) {
        this.$http = $http;

        return this;
    }

    loadAllOffers() {
        return this.$http.get(this.$offers);
    }

}
