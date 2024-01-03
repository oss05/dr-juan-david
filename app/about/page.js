import Navbar from "../Components/Navbar";
import Container from "../Components/Container";

const About = () => {
  return (
    <main>
      <Navbar />
      <Container bgColor="darkBlue">
        <h2 className="text-7xl font-bold text-neutralPrimary">About</h2>
        <h3 className="text-6xl font-bold text-neutralPrimary">
          My Background
        </h3>
        <p className="text-2xl mt-6 text-neutralPrimary">
          I'm a bilingual Latinx clinician with extensive education and clinical
          experience as a psychotherapist and social worker. I hold a Bachelor
          of Science degree from New York University, a Master of Science degree
          from Columbia University, and a Doctor of Social Work degree from the
          University of Southern California. Trained in various
          psychotherapeutic techniques, I aim to guide clients in their search
          for answers.
        </p>
        <h3 className="text-6xl font-bold text-neutralPrimary">My Style</h3>
        <p className="text-2xl mt-6 text-neutralPrimary">
          Clients often describe our sessions as conversations with a caring,
          knowledgeable friend—one who "keeps it real" and offers expertise in
          behavioral health. However, my focus is on you, your goals, and
          finding hope in challenging moments. As a proud second-generation
          Latinx individual, I prioritize respecting your unique
          intersectionality and advocate for decolonizing psychotherapy. In our
          sessions, you'll explore cognitive and relationship patterns with a
          well-trained, empathic person of color who understands the complex
          challenges we face daily. Together, we'll celebrate the beauty and
          power of your unique experiences and identity. Contact me to discuss
          the next steps—I look forward to speaking with you and supporting your
          journey toward healing and hope. I look forward to speaking.
        </p>
      </Container>
      <Container bgColor="darkBlue">
        <p>cards</p>
      </Container>
      <Container bgColor="darkBlue">contact form</Container>
    </main>
  );
};

export default About;
