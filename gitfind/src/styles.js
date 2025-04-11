import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
`;

export const AppContent = styled.div`
  display: flex;
  .logo {
    height: 90vh;
    opacity: 0.2;

    @media (max-width: 1100px) {
      display: none;
    }
  }

  @media (max-width: 1100px) {
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  padding-top: 110px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
`;

export const Search = styled.div`
  display: flex;
  gap: 10px;
  max-width: 1000px;
  width: 95%;
  height: 8%;
`;

export const Profile = styled.div`
  display: flex;
  width: 95%;
  max-width: 1000px;
  gap: 20px;

  img {
    opacity: 1;
    width: 150px;
    height: 150px;
    border-radius: 80px;
    border: solid 1px #e5e5e5;
  }
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-family: "Roboto";
  color: #999999;
  padding: 10px;

  p {
    margin-top: 20px;
  }
`;

export const ReposList = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 95%;
  max-width: 1000px;
  gap: 25px;
  border-top: 1px solid #999999;
  padding-top: 40px;

  h2 {
    text-align: center;
    font-size: 36px;
  }
`;

export const ReposItem = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
  color: #999999;
  border-top: ${(props) => (props.isFirst ? "none" : "1px solid #999999")};
  padding-top: 30px;

  a {
    text-decoration: none;
    color: #539bf5;
    font-size: 24px;
  }
`;
