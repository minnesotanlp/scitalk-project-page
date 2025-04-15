from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

video_map = [
    { "title": "Knownet Paper", "videoSrc": "static/videos/final_v2.3.mp4" },
    { "title": "LLM Evaluation", "videoSrc": "static/videos/final_v2.3.mp4" },
    { "title": "Shorts Analyzer", "videoSrc": "static/videos/final_v2.3.mp4" },
]

submit_endpoint = "/api/submit"  

def generate_reel_card_html(reel):
    title = reel["title"]
    video_src = reel["videoSrc"]

    return f"""
       <div class = "reel-card">
            <h2 style ="font-weight: bold; padding-bottom: 10px;">{title}</h2>
            <!--add the section we go to with the web service-->
            <form action="{submit_endpoint}" method="POST">
              <div class = "reel-card-form">
    
              
                <label for="engagement">Engagement</label>
                <div>
                  <input type="range" id="engagement" name="engagement" min="1" max="5" value="3" step="1">
                  <span id="engagementValue">3</span>
                </div>
              
                <label for="visuals">Visuals</label>
                <div>
                  <input type="range" id="visuals" name="visuals" min="1" max="5" value="3" step="1">
                  <span id="visualsValue">3</span>
                </div>
  
                <label for="content">Content</label>
                <div>
                  <input type="range" id="content" name="content" min="1" max="5" value="3" step="1">
                  <span id="contentValue">3</span>
                </div>
              
                <label for="audio">Audio</label>
                <div>
                  <input type="range" id="audio" name="audio" min="1" max="5" value="3" step="1">
                  <span id="audioValue">3</span>
                </div>

              </div>
              
              <div style = "display: flex; flex-direction: row; gap:20px;">
                <button class="reel-card-submit" type="submit">Submit</button>
                <div class="reel-card-movie">
                  <a href="{video_src}">
                    <img src="static/images/movieicon.png" alt="Watch Reel" width="40">
                  </a>
                </div>
              </div>
            </form>
          </div>
    """

@app.get("/reels/all")
def fetch_all_reels():
    if not video_map:
        raise HTTPException(status_code=404, detail="No reels found")
    all_card_html = ""
    for reel in video_map:
        all_card_html += generate_reel_card_html(reel) + "\n"
    
    return {"html" : all_card_html} 

@app.get("/reels/{id}")
def fetch_reel(id : int):
    if id < 0 or id >= len(video_map):
        raise HTTPException(status_code=404, detail="Reel not found")
    
    reel = video_map[id]
    card_html = generate_reel_card_html(reel)

    return {"html" : card_html}

