window.HELP_IMPROVE_VIDEOJS = false;

const video_list = [
    {
		"title" : "Querying funciton callinh ",
        "video_src" : "static/videos/querying.mp4",
        "paper_link" : "https://arxiv.org/abs/2502.00032",
		"thumbnail_src" : "static/thumbnails/thumbnail_querying.png",
        "flashtalk_score" : "1",
        "sceneplan_score" : "2",
        "text_score" : "3"
    },
	{
		"title" : "Querying funciton callinh ",
        "video_src" : "static/videos/querying.mp4",
        "paper_link" : "https://arxiv.org/abs/2502.00032",
		"thumbnail_src" : "static/thumbnails/thumbnail_querying.png",
        "flashtalk_score" : "1",
        "sceneplan_score" : "2",
        "text_score" : "3"
    },
	{
		"title" : "Querying funciton callinh ",
        "video_src" : "static/videos/querying.mp4",
        "paper_link" : "https://arxiv.org/abs/2502.00032",
		"thumbnail_src" : "static/thumbnails/thumbnail_querying.png",
		"flashtalk_score" : "1",
        "sceneplan_score" : "2",
        "text_score" : "3"
    },
	{
		"title" : "Querying funciton callinh ",
        "video_src" : "static/videos/querying.mp4",
        "paper_link" : "https://arxiv.org/abs/2502.00032",
		"thumbnail_src" : "static/thumbnails/thumbnail_querying.png",
        "flashtalk_score" : "1",
        "sceneplan_score" : "2",
        "text_score" : "3"
    },
	{
		"title" : "Querying funciton callinh ",
        "video_src" : "static/videos/querying.mp4",
        "paper_link" : "https://arxiv.org/abs/2502.00032",
		"thumbnail_src" : "static/thumbnails/thumbnail_querying.png",
        "flashtalk_score" : "1",
        "sceneplan_score" : "2",
        "text_score" : "3"
    },
	{
		"title" : "Querying funciton callinh ",
        "video_src" : "static/videos/querying.mp4",
        "paper_link" : "https://arxiv.org/abs/2502.00032",
		"thumbnail_src" : "static/thumbnails/thumbnail_querying.png",
        "flashtalk_score" : "1",
        "sceneplan_score" : "2",
        "text_score" : "3"
    },
	{
		"title" : "Querying funciton callinh ",
        "video_src" : "static/videos/querying.mp4",
        "paper_link" : "https://arxiv.org/abs/2502.00032",
		"thumbnail_src" : "static/thumbnails/thumbnail_querying.png",
        "flashtalk_score" : "1",
        "sceneplan_score" : "2",
        "text_score" : "3"
    },
	{
		"title" : "Querying funciton callinh ",
        "video_src" : "static/videos/querying.mp4",
        "paper_link" : "https://arxiv.org/abs/2502.00032",
		"thumbnail_src" : "static/thumbnails/thumbnail_querying.png",
        "flashtalk_score" : "1",
        "sceneplan_score" : "2",
        "text_score" : "3"
    },
	{
		"title" : "Querying funciton callinh ",
        "video_src" : "static/videos/querying.mp4",
        "paper_link" : "https://arxiv.org/abs/2502.00032",
		"thumbnail_src" : "static/thumbnails/thumbnail_querying.png",
        "flashtalk_score" : "1",
        "sceneplan_score" : "2",
        "text_score" : "3"
    }
]

function generateReelCard(reel){
	const {
		title,
		video_src,
		thumbnail_src,
		paper_link,
		flashtalk_score,
		sceneplan_score,
		text_score,
	  } = reel;


    return `
    <div class = "reel-card">
            <h2 style ="font-weight: bold; padding-bottom: 10px;">${title}</h2>
            <!--add the section we go to with the web service-->
            <div>
			<img src="${thumbnail_src}" alt="Watch Reel" width="150">	
              <div class = "reel-card-form">

                <label for="engagement">Curiosity</label>
                <div>
                  <input type="range" id="engagement" name="engagement" value = ${flashtalk_score} min="1" max="5" value="3" step="1" disabled>
                  <span id="engagementValue">${flashtalk_score}</span>
                </div>
              
                <label for="visuals">Visual Relevance & Clarity</label>
                <div>
                  <input type="range" id="visuals" name="visuals" value = ${sceneplan_score} min="1" max="5" value="3" step="1" disabled>
                  <span id="visualsValue">${sceneplan_score}</span>
                </div>
  
                <label for="content">Key Information Coverage</label>
                <div>
                  <input type="range" id="content" name="content" value = ${text_score} min="1" max="5" value="3" step="1" disabled>
                  <span id="contentValue">${text_score}</span>
                </div>
              </div>

              <div style = "display: flex; flex-direction: row; gap:20px; justify-content:center;">
                  <a href="${video_src}">
                    <div class="reel-card-submit">Watch Video</div>
                  </a>
				    <a href="${paper_link}">
                    <div class="reel-card-submit">Read Paper</div>
                  </a>
              </div>
            </div>
          </div>
    `
}

async function loadReels() {
	const cards_html = video_list.map(reel => generateReelCard(reel)).join('\n');

	document.getElementById("reel_container").innerHTML = cards_html;
  }


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

	loadReels(); //load video reels to the reels container!

})
