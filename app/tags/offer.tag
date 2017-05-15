<app>
	<headervideo></headervideo>
	<div class="container">
		<h1>{ offer.title }</h1>

		<button class="mdl-button mdl-button-inverted mdl-js-button mdl-js-ripple-effect">La oss bli kjent</button>

		<raw content="{ offer.description }" class="content"></raw>	
	</div>
	<youtube></youtube>
	
	<style>
		.mdl-button {
			margin-bottom: 30px;
		}
		.content p {
		  font-size: 15px !important;
		}
	</style>

	<script>
		var self = this;

		riot.mount('youtube');
		riot.mount('headervideo');

		var getOffer = function(id){
			fetch('https://api.recruitee.com/c/ayras/careers/offers/?scope=active')
			.then(function(response) {
				return response.json()
			}).then(function(body) {
				if(id == 0){
					self.offer = body.offers[0];
					console.log('No ID.')
				} else {
					body.offers.forEach(function(offer){
						if(offer.id === parseInt(id)){
							self.offer = offer;
							self.update()
						}
					})
				}
				self.update()
			})
		}

		getOffer(0)

		route(function(id) {
			getOffer(id);
		})	

		riot.tag('raw', '<span></span>', function (opts) {
		    this.updateContent = function () {
		        this.root.innerHTML = opts.content;
		    };

		    this.on('update', function() {
		        this.updateContent();
		    });

		    this.updateContent();
		});


	</script>

</app>