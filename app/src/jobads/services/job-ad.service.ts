import {JobAds} from "../jobads.ts";

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

    loadOne($id){
    	var offers = this.loadAllOffers();
    	return new Promise(function(resolve, reject){
	    	offers.then(function(result){
	    		var offer = result.data.offers.find(function(offer){
	    			return offer.id === parseInt($id);
	    		});

	    		if(typeof offer === 'undefined'){
	    			var reason = new Error('Offer not found');
	    			reject(reason);
	    		} else {
	    			resolve(offer);
	    			console.log(offer);
	    		}
	    	}).catch(function(error){
	    		reject(error);
	    	}); 
    	})	
    }

    loadFirstActive(){
    	var offers = this.loadAllOffers();
    	return new Promise(function(resolve, reject){
	    	offers.then(function(result){
    			resolve(result.data.offers[0]);
    			console.log(result.data.offers[0]);
	    	}).catch(function(error){
	    		reject(error);
	    	}); 
    	})	
    }

}
