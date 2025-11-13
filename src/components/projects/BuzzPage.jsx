import { useNavigate } from "react-router-dom";
import TurnLeftIcon from '@mui/icons-material/TurnLeft';

const BuzzPage = () => {
    const navigate = useNavigate();

    return (

        <div className="project-page">
            <div className="project-header">
                <div className="project-header-left">
                <button className="back-button" onClick={() => navigate("/", { state: { section: "Projects" } })}>
                    <TurnLeftIcon fontSize="large" /> <br />
                    </button>

                </div>
                <h1>Bellingham Buzz</h1>
            </div>
            <div className="project-content">
                <div className="project-left">

                </div>
                <div class="project-body">
                    <p><a href="https://thebellinghambuzz.com" target="_blank" rel="noopener noreferrer">thebellinghambuzz.com</a></p>
                    <p>
                        <a href="https://github.com/sophiazhuk/bellinghambuzz" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </p>
                    <br />

                    <p><strong>My Role: </strong> UX and Plugin Developer</p>
                    <br />
                    <p>
                        Bellingham Buzz is a WordPress-based web app that helps local residents discover where to go out based on their mood, location, time of day, and age (21+). It’s designed for people looking to explore Bellingham with intention—whether it’s finding a cozy late-night spot or a lively weekend hangout.
                    </p> <br />
                    <h2>Planning Phase</h2>
                    <p>We wanted our style to feel familiar to Bellingham locals while emphasizing the setting of night life. So, we decided to design our theme around the iconic Herald sign. The dark theme with the popping red (orange?) color makes the site feel minimalist and feel familiar.</p> <br />
                        <div class="image-container">
                        <div className="project-img ar-16x9">
                            <img src="/images/bellingham-buzz/designsystem.png" alt="Bellingham Buzz design system" loading="lazy" decoding="async" />
                        </div>
                        <div className="project-img ar-16x9">
                            <img src="/images/bellingham-buzz/prototypes.png" alt="Bellingham Buzz prototypes" loading="lazy" decoding="async" />
                        </div>

                    </div>

                    <br />
                    <h2>Features</h2>
                    <ul>
                        <li><h3>Quiz</h3>We wanted the main focal point of the site to be our very own quiz to narrow down your options. So, we added the button to the top nav bar for easy access.</li>
                        <li><h3>Randomizer</h3>The "I'm Feelin' Lucky" button was a popular feature suggested in our first round of feedback. Inspired by Google's button of the same name, this button will give you a place to go instantly. This is for user's who have no requirements or don't have the patience to take a 7 question quiz.</li>
                        <li><h3>Browse Page</h3>After feedback from prototype usability tests, we found that users also wanted to browse through the whole directory of places in town. So, we made the Browse page! Accessible from the navbar, you can look through our whole database of locations. You can also sort through this large list by a multitude of filter options and even search by name in the search bar!</li>
                        <li><h3>Who We Are</h3>As the locations are handpicked and recommended by our team, we wanted to give a brief overview of who we are. The "Who We Are" page gives a description of all three of us, so you can know about who is recommending your night out. On this page, we also have a guide on how to use the site.</li>
                    </ul>
                    <br />
                    <div class="image-container">
                        <div className="project-img ar-16x9">
                            <img src="/images/bellingham-buzz/quizwalkthrough.gif" alt="Quiz walkthrough animation" loading="lazy" decoding="async" />
                        </div>
                        <div className="project-img ar-16x9">
                            <img src="/images/bellingham-buzz/mobile-quiz-mock1.jpg" alt="Mobile quiz mockup" loading="lazy" decoding="async" />
                        </div>

                    </div>

                    <h2>Technologies</h2>
                    <p>WordPress, Advanced Custom Fields (ACF), Custom Plugin Logic, PHP, JavaScript, CSS</p>


                </div>
            </div>
        </div>
    );
};

export default BuzzPage;
