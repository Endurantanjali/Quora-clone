import React from 'react';
import "./css/SidebarOptions.css";
import { Add } from "@material-ui/icons";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/history-magnifying-glass-focused-word-36388781.jpgttps://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924__340.jpg"
          alt=""
        />
<p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://www.shutterstock.com/image-vector/human-head-luminous-brain-network-260nw-1548400751.jpg"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/887636042/photo/the-start-of-something-delicious.jpg?s=612x612&w=0&k=20&c=2T_BCJQhhkfohcbcDZ14OV8rPStICJ9Q1_YjGUW2wCo="
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.shutterstock.com/image-illustration/3d-illustration-musical-notes-signs-260nw-761313844.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.xxl.thumbs.canstockphoto.com/health-road-sign-health-road-sign-with-dramatic-clouds-and-sky-stock-photos_csp0854463.jpg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.shutterstock.com/image-vector/movie-time-vector-illustration-cinema-260nw-1009320268.jpg"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak="
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/open-book-hardback-books-wooden-table-education-background-back-to-school-copy-space-text-76106466.jpg"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
