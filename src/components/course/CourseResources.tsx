
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import { CourseResource } from "@/types/course";
import { ResourceLink } from "./ResourceLink";

interface CourseResourcesProps {
  resources: CourseResource;
  isCompleted: boolean;
}

export const CourseResources = ({ resources, isCompleted }: CourseResourcesProps) => {
  if (!isCompleted || !resources) return null;

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Course Resources</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Introduction Video</h3>
        <a 
          href={resources.introVideo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline flex items-center gap-2"
        >
          Watch on YouTube <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <Separator className="my-6" />

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Free Resources</h3>
        <div className="space-y-1">
          {resources.freeLinks.map((link, index) => (
            <ResourceLink key={index} {...link} />
          ))}
        </div>
      </div>

      {resources.paidLinks && resources.paidLinks.length > 0 && (
        <>
          <Separator className="my-6" />
          <div>
            <h3 className="text-lg font-medium mb-3">Premium Resources</h3>
            <div className="space-y-1">
              {resources.paidLinks.map((link, index) => (
                <ResourceLink key={index} {...link} />
              ))}
            </div>
          </div>
        </>
      )}
    </Card>
  );
};
