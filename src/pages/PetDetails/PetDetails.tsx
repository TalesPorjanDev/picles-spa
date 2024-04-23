import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid/grid";
import styles from "./PetDetails.module.css";
import { useQuery } from "@tanstack/react-query";
import { getPetById } from "../Pets/getPetById";
import { ImageBase64 } from "../../components/common/ImageBase64/ImageBase64";
import Skeleton from "react-loading-skeleton";

export function PetDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-pet-by-id", id],
    queryFn: async () => {
      return await getPetById(id ?? "");
    },
  });
  return (
    <Grid>
      <div className={styles.container}>
        <Header showReturn={true} />
        <main className={styles.content}>
          {isLoading && (
            <div className={styles.skeleton}>
              <Skeleton circle={true} width={200} height={200} />
              <Skeleton width={100} height={24} style={{ margin: 16 }} />
            </div>
          )}

          {!isLoading && (
            <>
              <ImageBase64 src={data?.photo} className={styles.picture} />
              {isError && (
                <>
                  <h1>Pet não encontrado</h1>
                  <Link to="/pets/">Voltar para a listagem</Link>
                </>
              )}
              {!isError && (
                <>
                  <h1>{data?.name}</h1>
                  <span>Sobre o pet:</span>
                  <p>{data?.bio}</p>
                </>
              )}
            </>
          )}
        </main>
      </div>
    </Grid>
  );
}
