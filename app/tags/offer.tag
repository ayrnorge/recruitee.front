<app>
	<headervideo></headervideo>
	<div class="container">
		<h1>{ offer.title }</h1>

		<a href="https://ayras.recruitee.com/o/{ offer.slug }/c/new" class="mdl-button mdl-button-inverted mdl-js-button mdl-js-ripple-effect">La oss bli kjent</a>

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

		console.log(dataLayer);

		riot.mount('youtube');
		riot.mount('headervideo');

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
