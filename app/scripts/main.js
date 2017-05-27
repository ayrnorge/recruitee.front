/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
    console.log('Starting up!');
    var getOffer = function(id){
        fetch('https://api.recruitee.com/c/ayras/careers/offers/?scope=active')
        .then(function(response) {
            return response.json()
        }).then(function(body) {
            if(id == 0){
                dataLayer.push([
                    {
                        'offerId': body.offers[0].id,
                        'offer': body.offers[0]
                    }
                ]);
                console.log(body.offers[0]);
                riot.mount('app', {
                    'offer': body.offers[0]
                });
                console.log('No ID.')
            } else {
                body.offers.forEach(function(offer){
                    if(offer.id === parseInt(id)){
                        console.log(offer);
                        dataLayer.push([
                            {
                                'offerId': offer.id,
                                'offer': offer
                            }
                        ]);
                        riot.mount('app', {
                            'offer': offer
                        });
                    }
                })
            }
        })
    }

    getOffer(0)

    route(function(id) {
        getOffer(id);
    })

    riot.mount('footer')

})();
