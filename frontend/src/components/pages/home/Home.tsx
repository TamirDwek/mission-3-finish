import "./Home.css";
import images from "../../../assets/images/four-key-components-small-group.png";
export default function Home(): JSX.Element {
  return (
    <div className="Home">
      <img src={images} alt="My Image" className="home-image" />
      <p>Welcome to the Development Groups and Meetings Management System!

Here, you can easily manage your development teams, schedule new meetings, and track existing ones. The system allows you to add groups, set meeting times, and ensure everything is well-organized and efficient. Start now and take your team and projects to the next level! 🚀</p>
    </div>
  );
}
