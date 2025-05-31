'use client'
import { fetcher } from "@/lib/fetcher";

import useSWR from 'swr';
import { Badge } from "./ui/badge";

export default function DBHealth() {

  const { data, error, isLoading } = useSWR('/api/db-health', fetcher)

  if (isLoading) {
    return <Badge variant="destructive">loading</Badge>
  } else if (error) {
    return <Badge variant="destructive">error</Badge>
  } else {
    return <Badge variant="default">success</Badge>
  }
}