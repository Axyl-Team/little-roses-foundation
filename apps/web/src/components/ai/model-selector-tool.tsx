import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorLogo,
  ModelSelectorLogoGroup,
  ModelSelectorName,
  ModelSelectorTrigger,
} from "@workspace/ui/components/ai-elements/model-selector";
import { Button } from "@workspace/ui/components/button";
import type { Model } from "./models";

interface ModelSelectorToolProps {
  models: Model[];
  selectedModel: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onModelSelect: (modelId: string) => void;
}

export function ModelSelectorTool({
  models,
  selectedModel,
  open,
  onOpenChange,
  onModelSelect,
}: ModelSelectorToolProps) {
  const selectedModelData = models.find((model) => model.id === selectedModel);
  const chefs = Array.from(new Set(models.map((model) => model.chef)));

  return (
    <ModelSelector onOpenChange={onOpenChange} open={open}>
      <ModelSelectorTrigger asChild>
        <Button className="justify-between" size="sm" variant="ghost">
          {selectedModelData?.chefSlug && (
            <ModelSelectorLogo provider={selectedModelData.chefSlug} />
          )}
          {selectedModelData?.name && (
            <ModelSelectorName className="hidden sm:block">
              {selectedModelData.name}
            </ModelSelectorName>
          )}
        </Button>
      </ModelSelectorTrigger>
      <ModelSelectorContent>
        <ModelSelectorInput placeholder="Search models..." />
        <ModelSelectorList>
          <ModelSelectorEmpty>No models found.</ModelSelectorEmpty>
          {chefs.map((chef) => (
            <ModelSelectorGroup heading={chef} key={chef}>
              {models
                .filter((model) => model.chef === chef)
                .map((model) => (
                  <ModelSelectorItem
                    key={model.id}
                    onSelect={() => {
                      onModelSelect(model.id);
                      onOpenChange(false);
                    }}
                    value={model.id}
                  >
                    <ModelSelectorLogo provider={model.chefSlug} />
                    <ModelSelectorName>{model.name}</ModelSelectorName>
                    <ModelSelectorLogoGroup>
                      {model.providers.map((provider) => (
                        <ModelSelectorLogo key={provider} provider={provider} />
                      ))}
                    </ModelSelectorLogoGroup>
                  </ModelSelectorItem>
                ))}
            </ModelSelectorGroup>
          ))}
        </ModelSelectorList>
      </ModelSelectorContent>
    </ModelSelector>
  );
}
