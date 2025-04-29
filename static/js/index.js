window.HELP_IMPROVE_VIDEOJS = false;

function showPopup(data) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popup-content").value = data;
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

const video_list = [
    {
        "paper_title": "Speed Is All You Need: On-Device Acceleration of Large Diffusion Models via GPU-Aware Optimizations",
		"title" : "Iteration 1",
        "video_src" : "static/videos/final_v2.4_refined_speed.mp4",
        "paper_link" : "https://arxiv.org/abs/2304.11267",
        "flashtalk_score" : "2.75",
        "sceneplan_score" : "3.56",
        "text_score" : "3.00",

        "flashtalk_prompt" : "Generate a 30-second video flastalk promptthe paper.",
        "sceneplan_prompt" : "Generate a 30-second video sceneopan prompythe paper.",
        "text_prompt" : "Generate a 30-second video textassistant prompt  the paper.",

        "flashtalk_output" : "Generate a 30-second video flashtalk out the paper.",
        "sceneplan_output" : "Generate a 30-second video sceneplan put the paper.",
        "text_output" : "Generate a 30-second video text out the paper.",

        "flashtalk_feedback" : "Generate a 30-second video flash feedbakc the paper.",
        "sceneplan_feedback" : "Generate a 30-second video svene plan feedbakc the paper.",
        "text_feedback" : "Generate a 30-second video text feedback the paper."
    },
	{
        "paper_title": "Speed Is All You Need: On-Device Acceleration of Large Diffusion Models via GPU-Aware Optimizations",
		    "title" : "Iteration 3",
        "video_src" : "static/videos/final_v2.4_34B_f0.11_short_cur_vrc_kic_one-third_10_multiple_speed_refined_speed.mp4",
        "paper_link" : "https://arxiv.org/abs/2304.11267",
        "flashtalk_score" : "3.00",
        "sceneplan_score" : "3.17",
        "text_score" : "3.33",


        "flashtalk_prompt" : "Generate a 30-second video flastalk promptthe paper.",
        "sceneplan_prompt" : "Generate a 30-second video sceneopan prompythe paper.",
        "text_prompt" : "Generate a 30-second video textassistant prompt  the paper.",

        "flashtalk_output" : "Generate a 30-second video flashtalk out the paper.",
        "sceneplan_output" : "Generate a 30-second video sceneplan put the paper.",
        "text_output" : "Generate a 30-second video text out the paper.",

        "flashtalk_feedback" : "Generate a 30-second video flash feedbakc the paper.",
        "sceneplan_feedback" : "Generate a 30-second video svene plan feedbakc the paper.",
        "text_feedback" : "Generate a 30-second video text feedback the paper."
    },
	{
        "paper_title": "Speed Is All You Need: On-Device Acceleration of Large Diffusion Models via GPU-Aware Optimizations",
		    "title" : "Iteration 4",
        "video_src" : "static/videos/final_v2.4_34B_f0.12_short_cur_vrc_kic_one-third_10_multiple_speed_refined_speed.mp4",
        "paper_link" : "https://arxiv.org/abs/2304.11267",
		    "flashtalk_score" : "3.75",
        "sceneplan_score" : "3.67",
        "text_score" : "3.36",

        "flashtalk_prompt" : "Generate a 30-second video flastalk promptthe paper.",
        "sceneplan_prompt" : "Generate a 30-second video sceneopan prompythe paper.",
        "text_prompt" : "Generate a 30-second video textassistant prompt  the paper.",

        "flashtalk_output" : "Generate a 30-second video flashtalk out the paper.",
        "sceneplan_output" : "Generate a 30-second video sceneplan put the paper.",
        "text_output" : "Generate a 30-second video text out the paper.",

        "flashtalk_feedback" : "Generate a 30-second video flash feedbakc the paper.",
        "sceneplan_feedback" : "Generate a 30-second video svene plan feedbakc the paper.",
        "text_feedback" : "Generate a 30-second video text feedback the paper."
    },
]

function generateReelCard(reel) {
    const {
      title,
      video_src,
      paper_link,
      flashtalk_score,
      sceneplan_score,
      text_score,
      flashtalk_prompt,
      sceneplan_prompt,
      text_prompt,
      flashtalk_output,
      sceneplan_output,
      text_output,
      flashtalk_feedback,
      sceneplan_feedback,
      text_feedback
    } = reel;
  
    const iterNum = title.match(/\d+/)[0];

    return `
      <div class="reel-card">
        <h2 class="card-title">
          <span class="step">${iterNum}</span>
            ${title}
        </h2>
        <div>
          <!-- replace thumbnail img with a small inline video preview -->
          <video muted autoplay controls loop>
            <source src="${video_src}" type="video/mp4">
          </video>
  
          <div class="reel-card-form">
            <label for="engagement">Curiosity</label>
            <div>
              <input type="range" id="engagement" name="engagement"
                     value="${flashtalk_score}" min="1" max="5" step="1" disabled>
              <span id="engagementValue">${flashtalk_score}</span>
            </div>
  
            <label for="visuals">Visual Relevance & Clarity</label>
            <div>
              <input type="range" id="visuals" name="visuals"
                     value="${sceneplan_score}" min="1" max="5" step="1" disabled>
              <span id="visualsValue">${sceneplan_score}</span>
            </div>
  
            <label for="content">Key Information Coverage</label>
            <div>
              <input type="range" id="content" name="content"
                     value="${text_score}" min="1" max="5" step="1" disabled>
              <span id="contentValue">${text_score}</span>
            </div>
          </div>

          <div class="reel-card-button-grid">
              <div class = "reel-card-label">Flash Talk Agent</div>
              <button onclick="showPopup('${flashtalk_prompt}')" class="reel-card-button">⌨️</button>
              <button onclick="showPopup('${flashtalk_output}')" class="reel-card-button">💾</button>
              <button onclick="showPopup('${flashtalk_feedback}')" class="reel-card-button">↪️</button>

                <div class = "reel-card-label">Sceneplan Agent</div>
              <button onclick="showPopup('${sceneplan_prompt}')" class="reel-card-button">⌨️</button>
              <button onclick="showPopup('${sceneplan_output}')" class="reel-card-button">💾</button>
              <button onclick="showPopup('${sceneplan_feedback}')" class="reel-card-button">↪️</button>

                <div class = "reel-card-label">Text Assist Agent</div>
              <button onclick="showPopup('${text_prompt}')" class="reel-card-button">⌨️</button>
              <button onclick="showPopup('${text_output}')" class="reel-card-button">💾</button>
              <button onclick="showPopup('${text_feedback}')" class="reel-card-button">↪️</button>

            </div>
        </div>
      </div>
    `;
  }

{/* <div style="display:flex; flex-direction:row; gap:20px; justify-content:center;">
  <a href="${video_src}">
    <div class="reel-card-submit">Watch Video</div>
  </a>
  <a href="${paper_link}">
    <div class="reel-card-submit">Read Paper</div>
  </a>
</div> */}

// helper to chop into size-3 rows
function chunkArray(arr, size = 3) {
    const out = [];
    for (let i = 0; i < arr.length; i += size) {
        out.push(arr.slice(i, i + size));
    }
    return out;
}

async function loadReels() {
    const rows = chunkArray(video_list, 3);
  
    const html = rows.map(row => {
      const { paper_title, paper_link } = row[0];
  
      // 3) Interleave arrows between cards
      const cardsWithArrows = row.map((r, i) => {
        const card = generateReelCard(r);
        return i < row.length - 1
          ? card + `<div class="arrow">→</div>`
          : card;
      }).join("");
  
      return `
        <div class="paper-row">
          <h2 style="font-size:1.25rem; font-weight:bold; margin-bottom:1rem;">
            <a href="${paper_link}" target="_blank" style="text-decoration:none; color:inherit;">
              ${paper_title}
            </a>
          </h2>
          <span style="font-size:0.9rem; color:#555;">
            * Note: Video scores peaked at the 4th iteration but declined at the 5th iteration.
          </span>
          <div class="reel-row" style="display:flex; gap:1rem;">
            ${cardsWithArrows}
          </div>
        </div>
      `;
    }).join("");
  
    document.getElementById("reel_container").innerHTML = html;
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
