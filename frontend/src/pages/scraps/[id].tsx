import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import useGetScrap from "@/hooks/useGetScrap";
import { Head } from "@/components/Head";
import { ScrapThreadLayout } from "@/components/templates/ScrapThread";
import { ScrapThread } from "@/components/organisms/ScrapThread";
import { CreateScrapThreadItemForm } from "@/components/organisms/forms/CreateScrapThreadItem";
import { ScrapHeader } from "@/components/organisms/ScrapHeader";

// Todo: スクラップとアイテムをそれぞれグローバルに管理する
export default function ScrapPage() {
  const router = useRouter();
  const { id } = router.query;
  const { scrap, setScrap, scrapThreadItems, setScrapThreadItems, isLoading } =
    useGetScrap(id);

  return (
    <>
      <Head />
      <ScrapThreadLayout>
        <ScrapHeader scrap={scrap} setScrap={setScrap} isLoading={isLoading} />
        <ScrapThread
          scrap={scrap}
          setScrap={setScrap}
          scrapId={id}
          scrapThreadItems={scrapThreadItems}
          setScrapThreadItems={setScrapThreadItems}
          isLoading={isLoading}
        />
        <Box mt="5">
          <CreateScrapThreadItemForm
            setScrap={setScrap}
            setScrapThreadItems={setScrapThreadItems}
          />
        </Box>
      </ScrapThreadLayout>
    </>
  );
}
