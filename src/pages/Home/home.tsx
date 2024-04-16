import { Button, ButtonVariant } from "../../components/common/Button";

export function Home() {
    return (
      <>
        <Button variant={ButtonVariant.Default}>Quero adotar</Button>
        <Button variant={ButtonVariant.Outlined}>Tenho um abrigo</Button>
      </>
    )
}