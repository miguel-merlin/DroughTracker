import AppBar from "../Components/AppBar";
import CardAbout from "../Components/CardAbout";

const About = () => {
    return (
        <>
            <AppBar />
            <CardAbout title={'How does it work?'} text={"The algorithm uses an artificial neural network arquitech"}/>
        </>
    )
};

export default About;