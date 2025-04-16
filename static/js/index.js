window.HELP_IMPROVE_VIDEOJS = false;

const video_list = [
    {
		"title" : "Querying funciton callinh ",
        "video_src" : "static/videos/querying.mp4",
        "paper_link" : "https://arxiv.org/abs/2502.00032",
        "metric_1" : "1",
        "metric_2" : "2",
        "metric_3" : "3",
        "metric_4" : "5",
        "metric_5" : "5"
    },
	{
		"title" : "Querying funciton callinh ",
        "video_src" : "static/videos/querying.mp4",
        "paper_link" : "https://arxiv.org/abs/2502.00032",
        "metric_1" : "1",
        "metric_2" : "2",
        "metric_3" : "3",
        "metric_4" : "5",
        "metric_5" : "5"
    },
	{
		"title" : "Querying funciton callinh ",
        "video_src" : "static/videos/querying.mp4",
        "paper_link" : "https://arxiv.org/abs/2502.00032",
        "metric_1" : "1",
        "metric_2" : "2",
        "metric_3" : "3",
        "metric_4" : "5",
        "metric_5" : "5"
    },
	{
		"title" : "Querying funciton callinh ",
        "video_src" : "static/videos/querying.mp4",
        "paper_link" : "https://arxiv.org/abs/2502.00032",
        "metric_1" : "1",
        "metric_2" : "2",
        "metric_3" : "3",
        "metric_4" : "5",
        "metric_5" : "5"
    }
]

function generateReelCard(reel){
	const {
		title,
		video_src,
		paper_link,
		metric_1,
		metric_2,
		metric_3,
		metric_4,
		metric_5
	  } = reel;


    return `
    <div class = "reel-card">
            <h2 style ="font-weight: bold; padding-bottom: 10px;">${title}</h2>
            <!--add the section we go to with the web service-->
            <form method="POST">
              <div class = "reel-card-form">
    
              
                <label for="engagement">Engagement</label>
                <div>
                  <input type="range" id="engagement" name="engagement" value = ${metric_1} min="1" max="5" value="3" step="1" disabled>
                  <span id="engagementValue">${metric_1}</span>
                </div>
              
                <label for="visuals">Visuals</label>
                <div>
                  <input type="range" id="visuals" name="visuals" value = ${metric_2} min="1" max="5" value="3" step="1" disabled>
                  <span id="visualsValue">${metric_2}</span>
                </div>
  
                <label for="content">Content</label>
                <div>
                  <input type="range" id="content" name="content" value = ${metric_3} min="1" max="5" value="3" step="1" disabled>
                  <span id="contentValue">${metric_3}</span>
                </div>
              
                <label for="audio">Audio</label>
                <div>
                  <input type="range" id="audio" name="audio" value = ${metric_4} min="1" max="5" value="3" step="1" disabled>
                  <span id="audioValue">${metric_4}</span>
                </div>

              </div>
              
              <div style = "display: flex; flex-direction: row; gap:20px; justify-content:center;">
                <div class="reel-card-movie">
                  <a href="${video_src}">
                    <div class="reel-card-submit">Watch Video</div>
                  </a>
                </div>
              </div>
            </form>
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
