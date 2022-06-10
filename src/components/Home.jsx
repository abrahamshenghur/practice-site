import React from "react";

function Home() {
    return (
        <main  style={{ padding: '1rem 0' }}>
        <div className="flex-container  textColorWhite">
          <div className="bg-image-overlay" style={{"--img": "url('https://www.friendsgreenporsche.com/wp-content/uploads/2021/11/homepage_ourstorysmallbox-scaled.jpg')"}}>
            OUR STORY
          </div>
          <div className="bg-image-overlay" style={{"--img": "url('https://www.friendsgreenporsche.com/wp-content/uploads/2021/11/IMG_6786b-scaled.jpg')"}}>
            INVENTORY
          </div>
          <div className="bg-image-overlay" style={{"--img": "url('https://www.friendsgreenporsche.com/wp-content/uploads/2021/11/BFF224CA-E3E5-4527-A0CC-D8D6AB286F1D-scaled.jpg')"}}>
            SERVICES
          </div>
        </div>
      </main>
    );
}

export default Home;