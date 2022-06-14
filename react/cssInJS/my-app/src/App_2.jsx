import styled from "styled-components";

const ContentSection = styled.div`
  margin: 40px;
`;

const ContentTitle = styled.h2`
  color: ${(props) => (props.name === "hello" ? "red" : "black")};
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    <ContentSection>
      <ContentTitle name="hello">hello world</ContentTitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        illo vero pariatur adipisci, laborum repellat cumque expedita
        consequuntur dolore aperiam non? Excepturi voluptatem eligendi veniam
        minima quaerat sint autem reprehenderit?
      </p>
    </ContentSection>
  );
}

export default App;
