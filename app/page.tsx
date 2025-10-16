import { getArtists } from "./actions/getArtists";
import Link from "next/link";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/shared/typography-h1";
import { TypographyH4 } from "@/components/shared/typography-h4";

export default async function Home() {
  const artists = await getArtists();
  
  return (
    <div className="container mx-auto p-6 max-w-xl">
      <div className="mb-3">
        <TypographyH1 text="Artists" />
      </div>
      <div className="mb-4 text-muted-foreground">
        <TypographyH4 text="Select an artist to view their dashboard." />
      </div>
      <ItemGroup className="gap-2">
        {artists.map((a) => (
          <Item key={a.slug} variant="outline" className="p-4">
            <ItemMedia>
              <Avatar className="size-14 md:size-16">
                <AvatarImage src={a.image} alt={a.name} />
                <AvatarFallback>{a.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemHeader>
                <ItemTitle>{a.name}</ItemTitle>
              </ItemHeader>
              <ItemDescription>{a.description}</ItemDescription>
            </ItemContent>
            <ItemActions className="self-center">
              <Button asChild size="sm">
                <Link href={`/dashboard/${a.slug}`}>View</Link>
              </Button>
            </ItemActions>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}
