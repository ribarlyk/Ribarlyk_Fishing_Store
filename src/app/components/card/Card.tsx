import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface ItemCardProps {
  image: string;
}

export default function ItemCard({ image }: ItemCardProps) {
  return (
    <Card className="w-[350px]">
      <CardContent>
        <Image
          src={image}
          alt="image"
          width={300}
          height={200}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nGPY2fXjv458/H9Bbtf/IDbD/7v//8/Mvfq/J+nEfxAbAF3NFsFiuaE1AAAAAElFTkSuQmCC"
          placeholder="blur"
        />
      </CardContent>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardFooter className="flex">
        <Button className="flex-1" variant="destructive">
          Купи
        </Button>
      </CardFooter>
    </Card>
  );
}
