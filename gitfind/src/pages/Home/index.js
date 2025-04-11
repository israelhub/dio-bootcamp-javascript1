import { Header } from "../../components/Header";
import {
  AppContainer,
  AppContent,
  Info,
  Profile,
  ProfileDescription,
  ReposItem,
  ReposList,
  Search,
} from "../../styles";
import background from "../../assets/logogh.png";
import { Input } from "../../components/Input/";
import { Button } from "../../components/Button";
import { useState } from "react";
import { githubService } from "../../api/github";

export const App = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleInputChange = (value) => {
    setUsername(value);
  };

  const handleSearch = async () => {
    const userData = await githubService.getUser(username);

    const { avatar_url, name, bio, login } = userData;
    setUserData({ avatar_url, name, bio, login });

    const repos = await githubService.getUserRepos(username);
    setRepos(repos);
  };

  return (
    <AppContainer>
      <Header />
      <AppContent>
        <img className="logo" src={background} alt="Logo do GitHub" />
        <Info>
          <Search>
            <Input placeholder="@usuario" onChange={handleInputChange} />
            <Button title="Buscar" onClick={handleSearch} />
          </Search>
          {userData?.name ? (
            <>
              <Profile>
                <img src={userData.avatar_url} alt={userData.name} />
                <ProfileDescription>
                  <h1>{userData.name}</h1>
                  <h2>{userData.login}</h2>
                  <p>{userData.bio || "oi"}</p>
                </ProfileDescription>
              </Profile>

              <ReposList>
                <h2>Repositorios</h2>
                {repos.map((repo, index) => (
                  <ReposItem key={repo.id} isFirst={index === 0}>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      {repo.name}
                    </a>
                    {repo.description ? repo.description : null}
                  </ReposItem>
                ))}
              </ReposList>
            </>
          ) : null}
        </Info>
      </AppContent>
    </AppContainer>
  );
};
