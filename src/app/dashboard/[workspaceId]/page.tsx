import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import CreateWorkspace from "@/components/global/create-workspace";
import CreateForlders from "@/components/global/create-foulder";
import Folders from "@/components/global/folders";

type Props = {
  params: {
    workspaceId: string;
  };
};

const WorkSpace = async ({ params }: Props) => {
  const { workspaceId } = await params; // Await params

  const query = new QueryClient()
  return (
    <HydrationBoundary state={dehydrate(query)}>
    <div>
      <Tabs
        defaultValue="videos"
        className="mt-6"
      >
        <div className="flex w-full justify-between items-center">
          <TabsList className="bg-transparent gap-2 pl-0">
            <TabsTrigger
              className="p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]"
              value="videos"
            >
              Videos
            </TabsTrigger>
            <TabsTrigger
              value="archive"
              className="p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]"
            >
              Archive
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-x-3">
            <CreateWorkspace />
            <CreateForlders workspaceId={workspaceId} />
          </div>
        </div>
        <section className="py-9">
          <TabsContent value="videos">
            <Folders workspaceId={workspaceId} />
          </TabsContent>
        </section>
      </Tabs>
    </div>
  </HydrationBoundary>
  );
};

export default WorkSpace;
