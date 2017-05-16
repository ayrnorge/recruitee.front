<headervideo>

	<div class="headervideo-deck" id="headervideo-player">
		<div id="preview" class="preview" onclick={ playvideo } style="background-image: url({ thumbnail });">
			<i class="material-icons">play_circle_outline</i>
		</div>
	</div>

	<style>

		.headervideo-deck {
			overflow: hidden;
			width: 100%;
			margin-bottom: 30px;
		}
		.preview {
			background: no-repeat center center;
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
			background-size: cover;
			cursor: pointer;
			position: relative;
			width: 100%;
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

		var selected = videos[0];

		this.name = selected.name
		this.position = selected.position;
		this.id = selected.id;

		this.thumbnail = 'http://img.youtube.com/vi/' + selected.id + '/sddefault.jpg';

		playvideo(event) {
			var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + selected.id + "?autoplay=1&autohide=1";
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');

            // The height and width of the iFrame should be the same as parent
            iframe.style.width  = '100%';
            iframe.style.height = '200px';

            console.log(iframe);
            document.getElementById('headervideo-player').innerHTML = ' ';
            // Replace the YouTube thumbnail with YouTube Player
            document.getElementById('headervideo-player').appendChild(iframe);
		}

	</script>


</headervideo>
