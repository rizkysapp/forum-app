import Container from "@/components/Container";
import Layout from "@/components/layouts/Layout";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <main>
      <Layout>
        <Container>
          <Button variant={"ghost"}>test</Button>
        </Container>
      </Layout>
    </main>
  );
}
