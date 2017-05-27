<youtube>

	<div class="youtube-deck" id="player">
		<div class="info">
			<h2>{ name }</h2>
			<p>{ position }</p>
		</div>
		<div id="preview" class="preview" onclick={ playvideo } style="background-image: url({ thumbnail });">
			<i class="material-icons">play_circle_outline</i>
		</div>
	</div>

	<style>

		.youtube-deck {
			-webkit-flex: 1;
			-ms-flex: 1;
			display: flex;
			flex: 1;
			overflow: hidden;
			width: 100%;
			margin-bottom: 30px;
			justify-content: flex-end;
			flex-flow: row nowrap;
			align-items: flex-start;
		}
		.youtube-deck .info {
			align-self: flex-end;
			text-align: right;
			padding: 20px;
		}
		.preview {
			background: no-repeat center center;
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
			background-size: cover;
			cursor: pointer;
			position: relative;
			width: 60%;
			height: 200px;
		}
		.preview .material-icons {
			color: #FFFFFF;
			z-index: 999;
			position: absolute;
			left: 50%;                        /* horizontal alignment */
		    top: 50%;                         /* vertical alignment */
		    transform: translate(-50%, -50%);
			font-size: 70px;
		}

		.youtube-deck .info h2 {
			font-size: 19px;
			line-height: 19px;
			margin-bottom: 0px;
			color: #383838;
		}

	</style>

	<script>

		var videos = [

			{
				name: 'Nora Øverås',
				position: 'Markedsfører',
				id: 'Ha-fr5uUad4'
			},

			{
				name: 'Simen A. W. Olsen',
				position: 'Kommunikasjonssjef',
				id: 'B3qig-oSOGM'
			}

		];

		var selected = videos[Math.floor(Math.random() * videos.length)];

		this.name = selected.name
		this.position = selected.position;
		this.id = selected.id;

		this.thumbnail = 'http://img.youtube.com/vi/' + selected.id + '/mqdefault.jpg';

		playvideo(event) {
			var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + selected.id + "?autoplay=1&autohide=1";
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');

            // The height and width of the iFrame should be the same as parent
            iframe.style.width  = '100%';
            iframe.style.height = '200px';

            document.getElementById('player').innerHTML = ' ';
            // Replace the YouTube thumbnail with YouTube Player
            document.getElementById('player').appendChild(iframe);
		}

	</script>


</youtube>
