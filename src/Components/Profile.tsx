import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://crea-al.sfo2.cdn.digitaloceanspaces.com/2015/11/blankheadprofilepicforaman.jpg" alt="Imagem do usuário" />
      <div>
        <strong>Usuário</strong>
        <p><img src="icons/level.svg" alt="Level"/>Nível: {level}</p>
      </div>
    </div>
  );
}
