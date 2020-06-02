<div class="full-screen-cat">
	<div class="row center">
		<div class="">
			<a class="black btn-link" href="mailto:nicholas.jay.rios@gmail.com" target="_blank"><h2>I am available for hire!</h2></a>
			<form method="POST" action="message.php">
				<input type="text" name="name" required placeholder="Your Name" />
				<input type="text" name="phone" placeholder="Phone Number" />
				<input type="email" name="email" required placeholder="Email address" />
				<div class="spacer-10px"></div>
				<h3>Check all that apply</h3>
				<div class="spacer-10px"></div>
				<div class="row">
					<div>
						<input type="checkbox" id="checkbox-design" name="design">
						<label for="checkbox-design">Design</label>
					</div>
					<div>
						<input type="checkbox" id="checkbox-website" name="website">
						<label for="checkbox-website">Development</label>
					</div>
					<div>
						<input type="checkbox" id="checkbox-marketing" name="marketing">
						<label for="checkbox-marketing">Marketing</label>
					</div>
					<div>
						<input type="checkbox" id="checkbox-media" name="media">
						<label for="checkbox-media">Media</label>
					</div>
				</div>
				<div class="spacer-10px"></div>
				<textarea placeholder="About Project"></textarea>
				<button>SEND</button>
			</form>
	<div class="spacer-25px"></div>
			<div class="social-bar">
				<?php
					include 'social-media.php';
				?>
			</div>
		</div>
	</div>
	</div>