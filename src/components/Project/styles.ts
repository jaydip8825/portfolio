import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    width: 100%;
  }

  .project {
    padding: 2rem;
    background-color: #2b2b2b;
    border-radius: 1.2rem;
    transition: 0.25s;
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #ffffff;
    overflow: hidden;

    &:hover {
      transform: translateY(-5px);
      background-color: var(--blue);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2.5rem;

      .project-links {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      a img {
        width: 2.4rem;
      }
    }

    h3 {
      margin-bottom: 1.5rem;
      font-size: 2rem;
    }

    p {
      margin-bottom: 2rem;
      font-size: 1.4rem;
      line-height: 1.6;
      text-align: justify;
      word-break: break-word;
    }

    footer {
      margin-top: auto;

      .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        font-size: 1.2rem;
        opacity: 0.7;
        list-style: none;
        padding: 0;
      }
    }
  }

  /* ---------- TABLET ---------- */
  @media (max-width: 768px) {
    h2 {
      font-size: 3.2rem;
    }
  }

  /* ---------- MOBILE ---------- */
  @media (max-width: 480px) {
    margin-top: 10rem;

    h2 {
      font-size: 2.6rem;
    }

    .project {
      padding: 1.5rem;
    }

    h3 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.3rem;
    }
  }
`;
