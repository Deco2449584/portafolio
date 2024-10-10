import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }
`;

export const ProjectCard = styled.div`
  background-color: var(--black);
  padding: 2rem 1.8rem;
  border-radius: 1.2rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0.25s;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #fff;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 0.8rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;

    span {
      background-color: #1a1a1a;
      color: #fff;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      font-size: 1.2rem;
      transition: 0.25s;

      &:hover {
        background-color: var(--green);
        color: var(--black);
      }
    }
  }

  .project-links {
    display: flex;
    gap: 1rem;

    a {
      color: #fff;
      font-size: 2rem;

      &:hover {
        color: var(--green);
      }
    }
  }
`;

export const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const TabButton = styled.button<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? "var(--green)" : "transparent"};
  color: ${(props) => (props.active ? "var(--black)" : "#fff")};
  border: 2px solid var(--green);
  padding: 1rem 2rem;
  margin: 0 1rem;
  border-radius: 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background-color: var(--green);
    color: var(--black);
  }
`;
